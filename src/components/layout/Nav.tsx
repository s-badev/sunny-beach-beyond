import { Compass, Waves } from 'lucide-react'

const navItems = [
  { href: '#vibes', label: 'Vibes' },
  { href: '#areas', label: 'Areas' },
  { href: '#beaches', label: 'Beaches' },
  { href: '#nightlife', label: 'Nightlife' },
  { href: '#notes', label: 'Notes' },
  { href: '#map', label: 'Map' },
  { href: '#routes', label: 'Routes' },
  { href: '#archive', label: 'Archive' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-[linear-gradient(180deg,rgba(246,251,248,0.92),rgba(246,251,248,0.72)_68%,rgba(246,251,248,0))] px-3 pb-3 pt-2 backdrop-blur-sm sm:px-5">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-1.5 shadow-soft ring-1 ring-white/35">
        <a href="#hero" className="flex min-w-0 items-center gap-2.5 text-[color:var(--ink)]">
          <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-[color:var(--sea-deep)] text-white shadow-glow">
            <Compass size={16} strokeWidth={2.2} aria-hidden="true" />
            <Waves className="absolute -bottom-0.5 -right-0.5 rounded-full bg-[color:var(--turquoise)] p-0.5 text-[color:var(--sea-deep)]" size={14} aria-hidden="true" />
          </span>
          <span className="truncate font-serif text-base font-semibold sm:text-lg">Sunny Beach &amp; Beyond</span>
        </a>

        <div className="hidden max-w-[58vw] items-center gap-0.5 overflow-x-auto whitespace-nowrap text-[0.72rem] font-semibold text-[color:var(--muted-foreground)] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-2.5 py-1.5 transition hover:bg-white/60 hover:text-[color:var(--sea-deep)]">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
