import { Camera, Coffee, Compass, Landmark, Music, Ship, Sunset, Umbrella, Users, type LucideIcon } from 'lucide-react'
import { vibes } from '../../data/vibes'
import { SectionLabel } from '../ui/SectionLabel'

const iconMap: Record<string, LucideIcon> = {
  Camera,
  Coffee,
  Landmark,
  Music,
  Ship,
  Sunset,
  Umbrella,
  Users,
}

export function Vibes() {
  return (
    <section id="vibes" className="section-shell">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(223,246,237,0.72),transparent)]" aria-hidden="true" />
      <div className="section-inner">
        <div className="max-w-3xl">
          <SectionLabel>Vibes</SectionLabel>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
            What kind of day are you after?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-8 text-[color:var(--muted-foreground)]">
            Pick a mood - we&apos;ll match it with neighbourhoods, beaches, routes and local notes.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vibes.map((vibe, index) => {
            const Icon = iconMap[vibe.iconName] ?? Compass

            return (
              <article key={vibe.id} className="glass hover-lift group rounded-[1.35rem] p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--coral)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="grid size-11 place-items-center rounded-full bg-[color:var(--sea-deep)] text-white shadow-glow transition group-hover:scale-105">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-[color:var(--ink)]">{vibe.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{vibe.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {vibe.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--sea-deep)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
