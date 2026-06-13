import { Route, Timer } from 'lucide-react'
import { routes } from '../../data/routes'
import { SectionLabel } from '../ui/SectionLabel'

export function LocalRoutes() {
  return (
    <section id="local-routes" className="section-shell">
      <div className="section-inner">
        <div className="max-w-3xl">
          <SectionLabel>Local Routes</SectionLabel>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
            Itineraries the locals actually do.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {routes.map((routeItem, index) => (
            <article key={routeItem.id} className="glass hover-lift rounded-[1.5rem] p-6 shadow-soft">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--coral)]">
                    R{String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight text-[color:var(--ink)]">{routeItem.title}</h3>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-[color:var(--sea-deep)] px-4 py-2 text-sm font-bold text-white">
                  <Timer size={16} aria-hidden="true" />
                  {routeItem.duration}
                </span>
              </div>
              <div className="mt-5 grid gap-3 text-sm leading-6 text-[color:var(--muted-foreground)] sm:grid-cols-2">
                <p>
                  <span className="font-bold text-[color:var(--ink)]">Area:</span> {routeItem.area}
                </p>
                <p>
                  <span className="font-bold text-[color:var(--ink)]">Best time:</span> {routeItem.bestTime}
                </p>
              </div>
              <p className="mt-4 leading-7 text-[color:var(--muted-foreground)]">{routeItem.idealFor}</p>
              <p className="mt-3 rounded-2xl bg-white/62 px-4 py-3 text-sm font-medium leading-6 text-[color:var(--ink)]">{routeItem.transportNote}</p>
              <div className="mt-6 grid gap-3">
                {routeItem.stops.map((stop, stopIndex) => (
                  <div key={stop} className="flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[color:var(--foam)] text-[color:var(--sea-deep)]">
                      {stopIndex === 0 ? <Route size={15} aria-hidden="true" /> : <span className="size-2 rounded-full bg-[color:var(--coral)]" />}
                    </span>
                    <span className="text-sm font-semibold text-[color:var(--ink)]">{stop}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
