import { beaches } from '../../data/beaches'
import { SectionLabel } from '../ui/SectionLabel'

export function Beaches() {
  return (
    <section id="beaches" className="px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionLabel>Beaches</SectionLabel>
          <h2 className="font-serif text-4xl font-semibold text-[color:var(--ink)]">Beach notes before beach rankings.</h2>
          <p className="mt-4 leading-7 text-[color:var(--muted-foreground)]">
            This placeholder will become a practical but personal view of sand, access, and atmosphere.
          </p>
        </div>
        <div className="grid gap-4">
          {beaches.map((beach) => (
            <article key={beach.name} className="rounded-2xl border border-[color:var(--border)] bg-white/75 p-6 shadow-soft">
              <h3 className="font-serif text-2xl text-[color:var(--ink)]">{beach.name}</h3>
              <p className="mt-2 leading-7 text-[color:var(--muted-foreground)]">{beach.character}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
