import { AnimatePresence, motion } from 'framer-motion'
import { Compass, Menu, Waves, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'

const navItems = [
  { to: '/vibes', label: { en: 'Vibes', bg: 'Настроения' } },
  { to: '/areas', label: { en: 'Areas', bg: 'Зони' } },
  { to: '/beaches', label: { en: 'Beaches', bg: 'Плажове' } },
  { to: '/nightlife', label: { en: 'Nightlife', bg: 'Нощен живот' } },
  { to: '/notes', label: { en: 'Notes', bg: 'Бележки' } },
  { to: '/map', label: { en: 'Map', bg: 'Карта' } },
  { to: '/places', label: { en: 'Places', bg: 'Места' } },
  { to: '/routes', label: { en: 'Routes', bg: 'Маршрути' } },
  { to: '/archive', label: { en: 'Archive', bg: 'Архив' } },
]

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const headerRef = useRef<HTMLElement | null>(null)
  const menuId = 'mobile-navigation-menu'

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
        <Link to="/" className="interactive-control group flex min-w-0 flex-1 items-center gap-2.5 rounded-full pr-1 text-[color:var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--turquoise)] lg:flex-none lg:pr-2">
          <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-[color:var(--sea-deep)] text-white shadow-glow transition group-hover:bg-[color:var(--sea)]">
            <Compass size={16} strokeWidth={2.2} aria-hidden="true" />
            <Waves className="absolute -bottom-0.5 -right-0.5 rounded-full bg-[color:var(--turquoise)] p-0.5 text-[color:var(--sea-deep)]" size={14} aria-hidden="true" />
          </span>
          <span className="max-w-[9rem] truncate font-sans text-base font-bold leading-none text-[color:var(--ink)] min-[390px]:max-w-[10.75rem] sm:max-w-none sm:text-lg lg:max-w-[11rem] xl:max-w-none">Sunny Beach &amp; Beyond</span>
        </Link>

        <div className="hidden items-center gap-0.5 whitespace-nowrap text-[0.72rem] font-bold text-[color:var(--muted-foreground)] lg:flex xl:gap-1 xl:text-[0.78rem]">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `interactive-control shrink-0 rounded-full px-2.5 py-1.5 transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--turquoise)] xl:px-3 ${
                  isActive
                    ? 'bg-[color:var(--sea-deep)] !text-white shadow-glow hover:!text-white focus-visible:!text-white active:!text-white'
                    : 'hover:!translate-y-[-1px] hover:!scale-105 hover:bg-[color:var(--sea-deep)] hover:!text-white hover:shadow-[0_8px_22px_rgba(9,58,82,0.14)]'
                }`
              }
            >
              <span data-no-translate>{item.label[language]}</span>
            </NavLink>
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
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `interactive-control rounded-[1rem] px-3.5 py-3 text-sm font-bold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--turquoise)] ${
                      isActive ? 'bg-[color:var(--sea-deep)] text-white shadow-glow' : 'text-[color:var(--sea-deep)] hover:!translate-y-[-1px] hover:!scale-[1.015] hover:bg-[color:var(--sea-deep)] hover:!text-white hover:shadow-sm'
                    }`
                  }
                >
                  <span data-no-translate>{item.label[language]}</span>
                </NavLink>
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
