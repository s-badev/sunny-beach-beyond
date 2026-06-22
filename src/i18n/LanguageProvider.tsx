import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LANGUAGE_STORAGE_KEY, translatePhrase, type Language } from './translations'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (value: string) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

const textOriginals = new WeakMap<Text, string>()
const translatedAttributes = ['aria-label', 'alt', 'placeholder', 'title']

function storedLanguage(): Language {
  if (typeof window === 'undefined') return 'en'

  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'bg' ? 'bg' : 'en'
}

function translateTextNode(node: Text, language: Language) {
  const original = textOriginals.get(node) ?? node.nodeValue ?? ''

  if (!textOriginals.has(node)) {
    textOriginals.set(node, original)
  }

  const nextValue = translatePhrase(original, language)

  if (node.nodeValue !== nextValue) {
    node.nodeValue = nextValue
  }
}

function translateElementAttributes(element: Element, language: Language) {
  for (const attribute of translatedAttributes) {
    const currentValue = element.getAttribute(attribute)
    if (!currentValue) continue

    const dataAttribute = `data-i18n-original-${attribute}`
    const originalValue = element.getAttribute(dataAttribute) ?? currentValue

    element.setAttribute(dataAttribute, originalValue)
    element.setAttribute(attribute, translatePhrase(originalValue, language))
  }
}

function shouldSkipElement(element: Element) {
  return ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(element.tagName) || element.hasAttribute('data-no-translate')
}

function translateTree(root: ParentNode, language: Language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      if (node.nodeType === Node.ELEMENT_NODE && shouldSkipElement(node as Element)) {
        return NodeFilter.FILTER_REJECT
      }

      return NodeFilter.FILTER_ACCEPT
    },
  })

  let node = walker.nextNode()

  while (node) {
    if (node.nodeType === Node.TEXT_NODE) {
      translateTextNode(node as Text, language)
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      translateElementAttributes(node as Element, language)
    }

    node = walker.nextNode()
  }
}

function applyDocumentLanguage(language: Language) {
  document.documentElement.lang = language === 'bg' ? 'bg' : 'en'
  translateTree(document.body, language)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(storedLanguage)

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
  }, [])

  const t = useCallback((value: string) => translatePhrase(value, language), [language])

  useEffect(() => {
    let applying = false

    function apply() {
      if (applying) return
      applying = true
      window.requestAnimationFrame(() => {
        applyDocumentLanguage(language)
        applying = false
      })
    }

    apply()

    const observer = new MutationObserver((mutations) => {
      if (mutations.every((mutation) => mutation.type === 'characterData')) return
      apply()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: translatedAttributes,
    })

    return () => observer.disconnect()
  }, [language])

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
