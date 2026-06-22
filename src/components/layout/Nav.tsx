import { AnimatePresence, motion } from 'framer-motion'
import { Compass, Menu, Waves, X } from 'lucide-react'
import type { MouseEvent } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../i18n/useLanguage'

const navItems = [
  { href: '#vibes', label: { en: 'Vibes', bg: 'Настроения' } },
  { href: '#areas', label: { en: 'Areas', bg: 'Зони' } },
  { href: '#beaches', label: { en: 'Beaches', bg: 'Плажове' } },
  { href: '#nightlife', label: { en: 'Nightlife', bg: 'Нощен живот' } },
  { href: '#notes', label: { en: 'Notes', bg: 'Бележки' } },
  { href: '#map', label: { en: 'Map', bg: 'Карта' } },
  { href: '#places', label: { en: 'Places', bg: 'Места' } },
  { href: '#routes', label: { en: 'Routes', bg: 'Маршрути' } },
  { href: '#archive', label: { en: 'Archive', bg: 'Архив' } },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState('vibes')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const headerRef = useRef<HTMLElement | null>(null)
  const menuId = 'mobile-navigation-menu'

  const goToSection = useCallback((href: string) => {
    const sectionId = href.slice(1)
    const section = document.getElementById(sectionId)

    if (!section) return false

    const sectionStyle = window.getComputedStyle(section)
    const pageStyle = window.getComputedStyle(document.documentElement)
    const sectionOffset = Number.parseFloat(sectionStyle.scrollMarginTop) || 0
    const pageOffset = Number.parseFloat(pageStyle.scrollPaddingTop) || 0
    const offset = Math.max(sectionOffset, pageOffset)
    const top = Math.max(section.getBoundingClientRect().top + window.scrollY - offset, 0)

    window.scrollTo({ top, behavior: 'auto' })
    setActiveSection(sectionId)

    return true
  }, [])

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, href: string, closeMenu = false) {
    if (!href.startsWith('#')) return

    event.preventDefault()
    window.history.pushState(null, '', href)
    goToSection(href)

    if (closeMenu) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    let frameId = 0

    function requestHashScroll() {
      if (!window.location.hash) return

      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0
        goToSection(window.location.hash)
      })
    }

    requestHashScroll()
    window.addEventListener('hashchange', requestHashScroll)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('hashchange', requestHashScroll)
    }
  }, [goToSection])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement)

    let frameId = 0

    function updateActiveSection() {
      const activationLine = window.innerHeight * 0.36
      const currentSection =
        sections
          .map((section) => ({
            id: section.id,
            top: section.getBoundingClientRect().top,
          }))
          .filter((section) => section.top <= activationLine)
          .sort((a, b) => b.top - a.top)[0] ?? sections[0]

      if (currentSection?.id) {
        setActiveSection(currentSection.id)
      }
    }

    function requestUpdate() {
      if (frameId) return

      frameId = window.requestAnimationFrame(() => {
        frameId = 0
        updateActiveSection()
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    function closeOnOutsidePointer(event: PointerEvent) {
      if (!isMenuOpen) return
      if (headerRef.current?.contains(event.target as Node)) return

      setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsidePointer)

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsidePointer)
    }
  }, [isMenuOpen])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)')

    function closeDesktopMenu(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }

    mediaQuery.addEventListener('change', closeDesktopMenu)
    return () => mediaQuery.removeEventListener('change', closeDesktopMenu)
  }, [])

  const languageLabel = language === 'en' ? 'Language' : 'Език'
  const hamburgerLabel = isMenuOpen
    ? language === 'en'
      ? 'Close navigation menu'
      : 'Затвори навигационното меню'
    : language === 'en'
      ? 'Open navigation menu'
      : 'Отвори навигационното меню'

  return (
    <header ref={headerRef} className="sticky top-0 z-30 bg-[linear-gradient(180deg,rgba(246,251,248,0.94),rgba(246,251,248,0.76)_72%,rgba(246,251,248,0))] px-2 pb-2 pt-2 backdrop-blur-sm sm:px-5 lg:pb-3">
      <nav className="glass mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-2 rounded-full px-2.5 py-2 shadow-soft ring-1 ring-white/35 sm:gap-3 lg:px-3 lg:py-1.5" aria-label={language === 'en' ? 'Primary navigation' : 'Основна навигация'}>
        <a href="#hero" className="interactive-control group flex min-w-0 flex-1 items-center gap-2.5 rounded-full pr-1 text-[color:var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--turquoise)] lg:flex-none lg:pr-2">
          <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-[color:var(--sea-deep)] text-white shadow-glow transition group-hover:bg-[color:var(--sea)]">
            <Compass size={16} strokeWidth={2.2} aria-hidden="true" />
            <Waves className="absolute -bottom-0.5 -right-0.5 rounded-full bg-[color:var(--turquoise)] p-0.5 text-[color:var(--sea-deep)]" size={14} aria-hidden="true" />
          </span>
          <span className="max-w-[9rem] truncate font-serif text-base font-semibold min-[390px]:max-w-[10.75rem] sm:max-w-none sm:text-lg lg:max-w-[11rem] xl:max-w-none">Sunny Beach &amp; Beyond</span>
        </a>

        <div className="hidden items-center gap-0.5 whitespace-nowrap text-[0.66rem] font-semibold text-[color:var(--muted-foreground)] lg:flex xl:gap-1 xl:text-[0.72rem]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => scrollToSection(event, item.href)}
              className={`interactive-control shrink-0 rounded-full px-2 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--turquoise)] xl:px-2.5 ${
                activeSection === item.href.slice(1)
                  ? 'bg-[color:var(--sea-deep)] !text-white shadow-glow hover:!text-white focus-visible:!text-white active:!text-white'
                  : 'hover:bg-white/70 hover:text-[color:var(--sea-deep)]'
              }`}
            >
              {item.label[language]}
            </a>
          ))}
          <div className="ml-1 flex rounded-full border border-[color:var(--border)]/80 bg-white/70 p-0.5" aria-label={languageLabel}>
            {(['bg', 'en'] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
                className={`interactive-control rounded-full px-2 py-1.5 font-mono text-[0.64rem] font-extrabold uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--turquoise)] xl:px-2.5 xl:text-[0.68rem] ${
                  language === option ? 'bg-[color:var(--sea-deep)] text-white shadow-glow' : 'text-[color:var(--sea-deep)] hover:bg-white'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={hamburgerLabel}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          className="interactive-control grid size-10 shrink-0 place-items-center rounded-full border border-[color:var(--border)]/80 bg-white/80 text-[color:var(--sea-deep)] shadow-soft hover:bg-[color:var(--foam)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--turquoise)] lg:hidden"
        >
          {isMenuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="glass mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.35rem] p-2 shadow-soft ring-1 ring-white/35 lg:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => scrollToSection(event, item.href, true)}
                  className={`interactive-control rounded-[1rem] px-3.5 py-3 text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--turquoise)] ${
                    activeSection === item.href.slice(1)
                      ? 'bg-[color:var(--sea-deep)] text-white shadow-glow'
                      : 'text-[color:var(--sea-deep)] hover:bg-white/76'
                  }`}
                >
                  {item.label[language]}
                </a>
              ))}
            </div>

            <div className="mt-2 flex items-center justify-between gap-3 rounded-[1rem] border border-[color:var(--border)]/72 bg-white/66 px-3 py-2">
              <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted-foreground)]">{languageLabel}</span>
              <div className="flex rounded-full border border-[color:var(--border)]/80 bg-white/76 p-0.5" aria-label={languageLabel}>
                {(['bg', 'en'] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setLanguage(option)}
                    aria-pressed={language === option}
                    className={`interactive-control rounded-full px-3 py-2 font-mono text-[0.68rem] font-extrabold uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--turquoise)] ${
                      language === option ? 'bg-[color:var(--sea-deep)] text-white shadow-glow' : 'text-[color:var(--sea-deep)] hover:bg-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
