import { nightlife } from '../../data/nightlife'
import { SectionLabel } from '../ui/SectionLabel'

export function Nightlife() {
  return (
    <section id="nightlife" className="bg-[color:var(--night)] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Nightlife</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold">After-dark coastline.</h2>
            <p className="mt-4 leading-7 text-white/70">
              A placeholder for nightlife context that reads like field notes, not a booking funnel.
            </p>
          </div>
          <div className="grid gap-4">
            {nightlife.map((item) => (
              <article key={item.name} className="glass-dark rounded-2xl p-6 shadow-glow">
                <h3 className="font-serif text-2xl">{item.name}</h3>
                <p className="mt-2 leading-7 text-white/70">{item.mood}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
