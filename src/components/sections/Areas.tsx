import { areas } from '../../data/areas'
import { SectionLabel } from '../ui/SectionLabel'

export function Areas() {
  return (
    <section id="areas" className="bg-[color:var(--foam)]/50 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Areas</SectionLabel>
        <h2 className="max-w-3xl font-serif text-4xl font-semibold text-[color:var(--ink)]">
          Four coastal anchors, each with its own rhythm.
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-[color:var(--muted-foreground)]">
          Placeholder area cards introduce the guide&apos;s core geography without turning it into a directory.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {areas.map((area) => (
            <article key={area.name} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-soft">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--sea)]">{area.tone}</p>
              <h3 className="mt-3 font-serif text-3xl text-[color:var(--ink)]">{area.name}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{area.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
