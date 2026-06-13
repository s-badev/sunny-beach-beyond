import { areas } from '../../data/areas'
import { SectionLabel } from '../ui/SectionLabel'

export function Areas() {
  return (
    <section id="areas" className="section-shell overflow-hidden bg-[color:var(--foam)]/45">
      <div className="absolute -right-32 top-16 size-96 rounded-full bg-[color:var(--turquoise)]/18 blur-3xl" aria-hidden="true" />
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Areas</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              Four neighbourhoods, one coastline.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">
            The Bulgarian Black Sea changes character every few kilometres. Here are the four faces worth knowing before you go.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {areas.map((area, index) => (
            <article key={area.id} className="hover-lift overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/78 shadow-soft">
              <div className="relative h-40 overflow-hidden bg-[linear-gradient(135deg,var(--sea-deep),var(--turquoise)_58%,var(--sand))]">
                <div className="absolute inset-0 grain opacity-30" aria-hidden="true" />
                <div className="absolute -bottom-14 right-8 h-32 w-56 rounded-[50%] bg-[color:var(--sand)]/90" />
                <div className="absolute left-5 top-5 rounded-full bg-white/18 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  Area {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--coral)]">{area.mood}</p>
                <h3 className="mt-3 font-serif text-3xl text-[color:var(--ink)]">{area.name}</h3>
                <p className="mt-2 font-semibold text-[color:var(--sea-deep)]">{area.subtitle}</p>
                <p className="mt-4 leading-7 text-[color:var(--muted-foreground)]">{area.description}</p>
                <p className="mt-5 rounded-2xl bg-[color:var(--foam)] px-4 py-3 text-sm font-medium leading-6 text-[color:var(--ink)]">
                  {area.practicalNote}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold text-[color:var(--sea-deep)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
