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
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {beaches.map((beach, index) => (
            <article key={beach.id} className="glass hover-lift flex min-h-full flex-col rounded-[1.35rem] p-5 shadow-soft sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--coral)]">
                    Beach / {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-serif text-[1.7rem] leading-tight text-[color:var(--ink)]">{beach.name}</h3>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/70 bg-[color:var(--foam)] text-[color:var(--sea-deep)]">
                  <Waves size={19} aria-hidden="true" />
                </span>
              </div>
              <p className="mt-4 w-fit rounded-full bg-[color:var(--sea-deep)] px-3 py-1.5 text-[0.72rem] font-bold leading-none text-white">
                {beach.bestFor}
              </p>
              <p className="mt-4 flex-1 leading-7 text-[color:var(--muted-foreground)]">{beach.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {beach.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/80 bg-white/58 px-2.5 py-1 text-[0.72rem] font-semibold text-[color:var(--sea-deep)]">
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
