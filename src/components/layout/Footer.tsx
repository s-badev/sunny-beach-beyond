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

const coastNotes = ['Bulgarian Black Sea coast', 'Sunny Beach to Elenite', '42.7 N, 27.7 E']

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group inline-flex w-fit items-center gap-2 rounded-full py-1.5 pr-3 text-sm font-semibold text-white/72 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--turquoise)]"
    >
      <span className="size-1.5 rounded-full bg-[color:var(--turquoise)]/42 transition group-hover:bg-[color:var(--coral)]" aria-hidden="true" />
      {label}
    </a>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_16%_0%,rgba(32,199,189,0.16),transparent_24rem),radial-gradient(circle_at_86%_16%,rgba(240,111,97,0.13),transparent_22rem),linear-gradient(150deg,#071a2d,#04111f_62%,#082c46)] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
      <div className="grain absolute inset-0 opacity-12" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--turquoise)]/46 to-transparent" aria-hidden="true" />

      <div className="section-inner relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.7fr)_minmax(0,0.7fr)_minmax(0,0.85fr)] lg:gap-12">
          <div className="max-w-xl">
            <p className="w-fit rounded-full border border-white/14 bg-white/8 px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--coral-soft)]">
              Coastal guide / archive
            </p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Sunny Beach &amp; Beyond
            </h2>
            <p className="mt-5 max-w-lg text-base font-medium leading-8 text-white/72 sm:text-lg">
              A personal digital travel guide for Sunny Beach, Nessebar, Sveti Vlas and Elenite, built around local notes, routes, maps and archive-style memories.
            </p>
            <div className="mt-7 rounded-[1.35rem] border border-white/12 bg-white/7 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur">
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/50">Project note</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/78">
                Built as a calm, practical coastal companion: part local guide, part route planner, part postcard archive.
              </p>
            </div>
          </div>

          <nav aria-label="Footer explore navigation">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Explore</p>
            <div className="mt-5 grid gap-1">
              {exploreLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </nav>

          <nav aria-label="Footer tools navigation">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Tools</p>
            <div className="mt-5 grid gap-1">
              {toolLinks.map((link) => (
                <FooterLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </nav>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Coordinates</p>
            <div className="mt-5 grid gap-3">
              {coastNotes.map((note) => (
                <p key={note} className="rounded-[1rem] border border-white/10 bg-white/7 px-3.5 py-3 text-sm font-semibold leading-5 text-white/76">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm font-medium text-white/56 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p>Made as a personal digital travel guide and archive project.</p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/44">
            Sunny Beach &amp; Beyond / {year}
          </p>
        </div>
      </div>
    </footer>
  )
}
