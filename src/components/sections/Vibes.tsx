import { vibes } from '../../data/vibes'
import { SectionLabel } from '../ui/SectionLabel'

export function Vibes() {
  return (
    <section id="vibes" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Vibes</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-[color:var(--ink)]">A coast with several moods.</h2>
            <p className="mt-4 text-pretty leading-7 text-[color:var(--muted-foreground)]">
              This section will frame the guide by atmosphere before it becomes a list of places.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {vibes.map((vibe) => (
              <article key={vibe.title} className="glass rounded-2xl p-5 shadow-soft">
                <h3 className="font-serif text-2xl text-[color:var(--ink)]">{vibe.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{vibe.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
