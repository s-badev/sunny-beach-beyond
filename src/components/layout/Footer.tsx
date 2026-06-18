export function Footer() {
  const exploreLinks = [
    { href: '#vibes', label: 'Vibes' },
    { href: '#areas', label: 'Areas' },
    { href: '#beaches', label: 'Beaches' },
    { href: '#nightlife', label: 'Nightlife' },
    { href: '#notes', label: 'Notes' },
  ]
  const toolLinks = [
    { href: '#map', label: 'Interactive Map' },
    { href: '#routes', label: 'Local Routes' },
    { href: '#archive', label: 'Archive' },
  ]

  return (
    <footer className="relative overflow-hidden bg-[color:var(--night)] px-5 py-10 text-white sm:px-8 sm:py-12">
      <div className="grain absolute inset-0 opacity-15" aria-hidden="true" />
      <div className="section-inner grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <p className="font-serif text-3xl font-semibold">Sunny Beach &amp; Beyond</p>
          <p className="mt-4 max-w-md leading-7 text-white/66">
            A personal digital travel guide for Sunny Beach, Nessebar, Sveti Vlas and Elenite, built around local notes, routes, maps and archive-style memories.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--sand)]">
            Made as a personal digital travel guide and archive project.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/48">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-white/72">
            {exploreLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/48">Tools</p>
          <div className="mt-4 grid gap-2 text-sm text-white/72">
            {toolLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/48">Coordinates</p>
          <p className="mt-4 text-sm leading-7 text-white/72">
            Bulgarian Black Sea coast
            <br />
            Sunny Beach to Elenite
            <br />
            42.7 N, 27.7 E
          </p>
        </div>
      </div>
    </footer>
  )
}
