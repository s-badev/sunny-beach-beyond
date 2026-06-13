import { routes } from '../../data/routes'
import { SectionLabel } from '../ui/SectionLabel'

export function LocalRoutes() {
  return (
    <section id="local-routes" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Local Routes</SectionLabel>
        <h2 className="max-w-3xl font-serif text-4xl font-semibold text-[color:var(--ink)]">
          Routes for moving through the coast, not just arriving.
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-[color:var(--muted-foreground)]">
          Placeholder route cards will later connect beaches, viewpoints, old-town walks, and night routes.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {routes.map((route) => (
            <article key={route.name} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-soft">
              <h3 className="font-serif text-2xl text-[color:var(--ink)]">{route.name}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{route.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
