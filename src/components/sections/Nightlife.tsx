import { Clock, Martini, Music, Utensils, Waves } from 'lucide-react'
import { nightlife } from '../../data/nightlife'
import { SectionLabel } from '../ui/SectionLabel'

const nightlifeIcons = [Waves, Music, Martini, Music, Utensils, Martini]

export function Nightlife() {
  return (
    <section id="nightlife" className="section-shell overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(32,199,189,0.26),transparent_24rem),linear-gradient(150deg,#071a2d,#04111f_64%,#082c46)] text-white">
      <div className="grain absolute inset-0 opacity-12" aria-hidden="true" />
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Nightlife</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              The coast doesn&apos;t sleep until you do.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/68">
              From low-lit cocktail terraces to loud open-air clubs, the summer night changes fast from Sunny Beach to Sveti Vlas and Nessebar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {nightlife.map((item, index) => {
              const Icon = nightlifeIcons[index] ?? Music

              return (
              <article key={item.id} className="glass-dark hover-lift rounded-[1.5rem] p-6 shadow-glow hover:border-[color:var(--coral)]/50">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full bg-[color:var(--coral)]/18 text-[color:var(--coral-soft)]">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/68">
                    <Clock size={13} aria-hidden="true" />
                    {item.bestTime}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 leading-7 text-white/70">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/74">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
