import { Compass, Waves } from 'lucide-react'

const navItems = [
  { href: '#vibes', label: 'Vibes' },
  { href: '#areas', label: 'Areas' },
  { href: '#beaches', label: 'Beaches' },
  { href: '#nightlife', label: 'Nightlife' },
  { href: '#local-notes', label: 'Notes' },
  { href: '#map-preview', label: 'Map' },
  { href: '#local-routes', label: 'Routes' },
  { href: '#then-now', label: 'Archive' },
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 shadow-soft">
        <a href="#hero" className="flex min-w-0 items-center gap-3 text-[color:var(--ink)]">
          <span className="relative grid size-11 shrink-0 place-items-center rounded-full bg-[color:var(--sea-deep)] text-white shadow-glow">
            <Compass size={19} strokeWidth={2.2} aria-hidden="true" />
            <Waves className="absolute -bottom-1 -right-1 rounded-full bg-[color:var(--turquoise)] p-0.5 text-[color:var(--sea-deep)]" size={17} aria-hidden="true" />
          </span>
          <span className="truncate font-serif text-lg font-semibold sm:text-xl">Sunny Beach &amp; Beyond</span>
        </a>

        <div className="hidden items-center gap-1 text-xs font-semibold text-[color:var(--muted-foreground)] lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-white/65 hover:text-[color:var(--sea-deep)]">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
