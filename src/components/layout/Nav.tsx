import { Compass } from 'lucide-react'

const navItems = [
  { href: '#areas', label: 'Areas' },
  { href: '#beaches', label: 'Beaches' },
  { href: '#map-preview', label: 'Map' },
  { href: '#then-now', label: 'Then & Now' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--background)]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#hero" className="flex items-center gap-3 text-[color:var(--ink)]">
          <span className="grid size-10 place-items-center rounded-full bg-[color:var(--sea-deep)] text-white shadow-glow">
            <Compass size={18} strokeWidth={2.2} aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-semibold">Sunny Beach & Beyond</span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-[color:var(--muted-foreground)] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[color:var(--sea-deep)]">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
