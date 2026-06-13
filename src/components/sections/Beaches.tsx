import { Waves } from 'lucide-react'
import { beaches } from '../../data/beaches'
import { SectionLabel } from '../ui/SectionLabel'

export function Beaches() {
  return (
    <section id="beaches" className="section-shell">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Beaches</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              Six shorelines, six different days.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">
            A beach atlas for choosing by access, energy and the kind of summer day you actually want.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {beaches.map((beach, index) => (
            <article key={beach.id} className="glass hover-lift rounded-[1.5rem] p-6 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--coral)]">
                    Beach / {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-[color:var(--ink)]">{beach.name}</h3>
                </div>
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[color:var(--foam)] text-[color:var(--sea-deep)]">
                  <Waves size={22} aria-hidden="true" />
                </span>
              </div>
              <p className="mt-5 w-fit rounded-full bg-[color:var(--sea-deep)] px-3 py-1 text-xs font-bold text-white">
                {beach.bestFor}
              </p>
              <p className="mt-4 leading-7 text-[color:var(--muted-foreground)]">{beach.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {beach.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--sea)]">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
