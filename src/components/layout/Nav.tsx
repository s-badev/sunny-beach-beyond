import { Compass, Waves } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { href: '#vibes', label: 'Vibes' },
  { href: '#areas', label: 'Areas' },
  { href: '#beaches', label: 'Beaches' },
  { href: '#nightlife', label: 'Nightlife' },
  { href: '#notes', label: 'Notes' },
  { href: '#map', label: 'Map' },
  { href: '#places', label: 'Places' },
  { href: '#routes', label: 'Routes' },
  { href: '#archive', label: 'Archive' },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState('vibes')

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

  return (
    <header className="sticky top-0 z-30 bg-[linear-gradient(180deg,rgba(246,251,248,0.94),rgba(246,251,248,0.76)_72%,rgba(246,251,248,0))] px-2 pb-2 pt-2 backdrop-blur-sm sm:px-5 lg:pb-3">
      <nav className="glass mx-auto flex max-w-7xl flex-col gap-2 rounded-[1.45rem] px-2.5 py-2 shadow-soft ring-1 ring-white/35 lg:flex-row lg:items-center lg:justify-between lg:rounded-full lg:px-3 lg:py-1.5">
        <a href="#hero" className="interactive-control group flex min-w-0 items-center gap-2.5 rounded-full pr-2 text-[color:var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--turquoise)]">
          <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-[color:var(--sea-deep)] text-white shadow-glow transition group-hover:bg-[color:var(--sea)]">
            <Compass size={16} strokeWidth={2.2} aria-hidden="true" />
            <Waves className="absolute -bottom-0.5 -right-0.5 rounded-full bg-[color:var(--turquoise)] p-0.5 text-[color:var(--sea-deep)]" size={14} aria-hidden="true" />
          </span>
          <span className="truncate font-serif text-base font-semibold sm:text-lg">Sunny Beach &amp; Beyond</span>
        </a>

        <div className="-mx-1 flex max-w-full items-center gap-1 overflow-x-auto whitespace-nowrap px-1 pb-1 text-[0.72rem] font-semibold text-[color:var(--muted-foreground)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:max-w-[58vw] lg:gap-0.5 lg:px-0 lg:pb-0">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`interactive-control shrink-0 rounded-full px-2.5 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--turquoise)] ${
                activeSection === item.href.slice(1)
                  ? 'bg-[color:var(--sea-deep)] !text-white shadow-glow hover:!text-white focus-visible:!text-white active:!text-white'
                  : 'hover:bg-white/70 hover:text-[color:var(--sea-deep)]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
