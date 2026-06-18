import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Route, Timer } from 'lucide-react'
import { useEffect, useState } from 'react'
import { routes } from '../../data/routes'
import type { Place } from '../../types'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionLabel } from '../ui/SectionLabel'

type LocalRoutesProps = {
  selectedRoute: string
  selectedStops: Place[]
  onSelectRoute: (routeId: string) => void
}

export function LocalRoutes({ selectedRoute, selectedStops, onSelectRoute }: LocalRoutesProps) {
  const [expandedRouteId, setExpandedRouteId] = useState(selectedRoute)

  useEffect(() => {
    setExpandedRouteId(selectedRoute)
  }, [selectedRoute])

  return (
    <MotionSection id="routes" className="section-shell">
      <div className="section-inner">
        <motion.div className="max-w-3xl" variants={fadeUp}>
          <SectionLabel>Local Routes</SectionLabel>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
            Itineraries the locals actually do.
          </h2>
        </motion.div>
        <motion.div className="mt-9 grid gap-4 lg:grid-cols-2" variants={staggerContainer}>
          {routes.map((routeItem, index) => (
            <motion.article
              key={routeItem.id}
              variants={fadeUp}
              tabIndex={0}
              role="button"
              onKeyDown={(event) => {
                if (event.target !== event.currentTarget) return

                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  onSelectRoute(routeItem.id)
                }
              }}
              data-active={selectedRoute === routeItem.id}
              className={`interactive-card active-rail glass group rounded-[1.35rem] p-5 pl-6 shadow-soft sm:p-6 ${
                selectedRoute === routeItem.id ? 'border-[color:var(--coral)]/50 bg-white/78 ring-2 ring-[color:var(--coral)]/14' : ''
              }`}
              onClick={() => onSelectRoute(routeItem.id)}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--coral)]">
                    R{String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2.5 font-serif text-[1.7rem] leading-tight text-[color:var(--ink)]">{routeItem.title}</h3>
                </div>
                <span className="interactive-control flex items-center gap-2 rounded-full bg-[color:var(--sea-deep)] px-3.5 py-2 text-xs font-bold text-white group-hover:bg-[color:var(--coral)]">
                  <Timer size={16} aria-hidden="true" />
                  {routeItem.duration}
                </span>
              </div>
              <div className="mt-4 grid gap-2 text-sm leading-6 text-[color:var(--muted-foreground)] sm:grid-cols-2">
                <p className="rounded-2xl border border-white/60 bg-white/46 px-3 py-2">
                  <span className="font-bold text-[color:var(--ink)]">Area:</span> {routeItem.area}
                </p>
                <p className="rounded-2xl border border-white/60 bg-white/46 px-3 py-2">
                  <span className="font-bold text-[color:var(--ink)]">Best time:</span> {routeItem.bestTime}
                </p>
              </div>
              <p className="mt-3.5 text-[0.95rem] leading-6 text-[color:var(--muted-foreground)]">{routeItem.idealFor}</p>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  setExpandedRouteId(expandedRouteId === routeItem.id ? '' : routeItem.id)
                  onSelectRoute(routeItem.id)
                }}
                className="interactive-control mt-3 flex w-full items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/58 px-4 py-3 text-left text-sm font-medium leading-6 text-[color:var(--ink)] hover:border-[color:var(--turquoise)]/50 hover:bg-white/78"
              >
                <span>{routeItem.transportNote}</span>
                <ChevronDown
                  className={`shrink-0 transition ${expandedRouteId === routeItem.id || selectedRoute === routeItem.id ? 'rotate-180 text-[color:var(--coral)]' : 'text-[color:var(--sea-deep)]/54'}`}
                  size={17}
                  aria-hidden="true"
                />
              </button>
              <div className="mt-5 rounded-2xl border border-[color:var(--border)]/70 bg-white/46 p-4 transition group-hover:bg-white/58">
                <p className="mb-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/60">Stops</p>
                <div className="grid gap-2.5">
                {routeItem.stops.map((stop, stopIndex) => (
                  <div key={stop} className="relative flex items-center gap-3">
                    {stopIndex < routeItem.stops.length - 1 && <span className="absolute left-[0.9375rem] top-8 h-5 w-px bg-[color:var(--border)] transition group-data-[active=true]:bg-[color:var(--coral)]/45" aria-hidden="true" />}
                    <span className="z-10 grid size-8 shrink-0 place-items-center rounded-full border border-white/80 bg-[color:var(--foam)] text-[color:var(--sea-deep)] transition group-hover:bg-[color:var(--sea-deep)] group-hover:text-white group-data-[active=true]:bg-[color:var(--sea-deep)] group-data-[active=true]:text-white">
                      {stopIndex === 0 ? <Route size={15} aria-hidden="true" /> : <span className="size-2 rounded-full bg-[color:var(--coral)]" />}
                    </span>
                    <span className="text-sm font-semibold text-[color:var(--ink)]">{stop}</span>
                  </div>
                ))}
                </div>
              </div>
              <AnimatePresence initial={false}>
                {(expandedRouteId === routeItem.id || selectedRoute === routeItem.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 overflow-hidden rounded-2xl border border-[color:var(--turquoise)]/22 bg-[linear-gradient(135deg,rgba(6,59,91,0.96),rgba(8,121,150,0.86))] px-4 py-3 text-sm font-medium leading-6 text-white shadow-glow"
                  >
                    <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sand)]/84">Route note</span>
                    <span className="mt-1.5 block">Keep this itinerary flexible and treat the four stops as a rhythm, not a strict schedule.</span>
                    {selectedStops.length > 0 && (
                      <span className="mt-2 block text-white/72">Map preview has {selectedStops.length} custom stop{selectedStops.length === 1 ? '' : 's'} ready as a variation.</span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}
