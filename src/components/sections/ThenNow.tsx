import { archiveEntries } from '../../data/archive'
import { SectionLabel } from '../ui/SectionLabel'

export function ThenNow() {
  return (
    <section id="then-now" className="bg-[color:var(--sand)]/45 px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel>Then & Now</SectionLabel>
          <h2 className="font-serif text-4xl font-semibold text-[color:var(--ink)]">An archive-style layer for memory and change.</h2>
          <p className="mt-4 leading-7 text-[color:var(--muted-foreground)]">
            This placeholder prepares the visual archive concept without building the full comparison feature yet.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {archiveEntries.map((entry) => (
            <article key={entry.title} className="rounded-2xl bg-white/75 p-6 shadow-soft">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--coral)]">{entry.period}</p>
              <h3 className="mt-3 font-serif text-2xl text-[color:var(--ink)]">{entry.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{entry.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
