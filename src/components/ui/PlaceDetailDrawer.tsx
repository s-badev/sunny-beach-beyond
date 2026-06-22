import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, ArrowRight, Check, Compass, MapPinned, Navigation, Plus, Route, Sun, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { GuidePlace, Place } from '../../types'
import { guidePlaceToRoutePlace } from '../../lib/guideSearch'
import { PhotoFrame } from './PhotoFrame'

type PlaceDetailDrawerProps = {
  place: GuidePlace | null
  isOpen: boolean
  selectedStops: Place[]
  routeStatus: string
  onClose: () => void
  onAddToRoute: (place: GuidePlace) => void
}

const typeLabels: Record<GuidePlace['type'], string> = {
  restaurant: 'Restaurant',
  bar: 'Bar',
  cafe: 'Cafe',
  club: 'Club',
  attraction: 'Attraction',
  'water-sport': 'Water sport',
  walk: 'Walk',
  viewpoint: 'Viewpoint',
  family: 'Family',
  transport: 'Transport',
}

const timeLabels: Record<GuidePlace['bestTime'], string> = {
  morning: 'Morning',
  day: 'Day',
  sunset: 'Sunset',
  evening: 'Evening',
  'late-night': 'Late night',
}

const budgetLabels: Record<GuidePlace['budget'], string> = {
  low: 'Budget',
  medium: 'Mid-range',
  high: 'Premium',
}

const noiseLabels: Record<GuidePlace['noise'], string> = {
  quiet: 'Quiet',
  medium: 'Medium noise',
  loud: 'Loud',
}

function toneForPlace(place: GuidePlace) {
  if (place.type === 'club' || place.type === 'bar') return 'nightlife' as const
  if (place.type === 'water-sport') return 'water' as const
  if (place.type === 'walk' || place.type === 'viewpoint') return 'walk' as const
  if (place.type === 'family' || place.type === 'attraction') return 'attraction' as const
  if (place.area === 'Sveti Vlas' || place.budget === 'high') return 'premium' as const
  if (place.type === 'restaurant') return 'food' as const
  if (place.type === 'cafe') return 'cafe' as const
  return 'coastal' as const
}

export function PlaceDetailDrawer({ place, isOpen, selectedStops, routeStatus, onClose, onAddToRoute }: PlaceDetailDrawerProps) {
  const routePlace = place ? guidePlaceToRoutePlace(place) : null
  const isInRoute = routePlace ? selectedStops.some((stop) => stop.id === routePlace.id) : false
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.setTimeout(() => closeButtonRef.current?.focus(), 0)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && place && (
        <div className="fixed inset-0 z-50">
          <motion.button
            type="button"
            className="absolute inset-0 bg-[color:var(--night)]/42 backdrop-blur-[2px]"
            aria-label="Close place detail"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={`${place.name} guide detail`}
            initial={{ opacity: 0, x: 38, y: 24 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 28, y: 18 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="drawer-product-sheet absolute inset-x-2 bottom-2 max-h-[88vh] overflow-y-auto rounded-[1.65rem] border border-white/72 bg-[color:var(--background)] p-3 shadow-[0_28px_90px_rgba(7,26,45,0.32)] sm:inset-x-auto sm:bottom-4 sm:right-4 sm:top-4 sm:w-[min(34rem,calc(100vw-2rem))] sm:p-4"
          >
            <div className="overflow-hidden rounded-[1.35rem] border border-white/72 bg-white/76 shadow-soft">
              <PhotoFrame
                mediaKey={place.photoKey}
                tone={toneForPlace(place)}
                title={place.name}
                subtitle={`${place.area} / ${typeLabels[place.type]}`}
                areaLabel={place.area}
                categoryLabel="Guide detail"
                editorialLabel={place.routePairing ?? 'Coastal planner'}
                heightClassName="min-h-[18rem]"
                selected
              />

              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">Guide detail</p>
                    <h2 className="mt-2 font-serif text-3xl leading-tight text-[color:var(--ink)]">{place.name}</h2>
                  </div>
                  <button ref={closeButtonRef} type="button" onClick={onClose} className="interactive-control shrink-0 rounded-full border border-[color:var(--border)] bg-white p-2 text-[color:var(--sea-deep)] hover:bg-[color:var(--foam)]" aria-label="Close guide detail">
                    <X size={18} aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-4 grid gap-2 rounded-[1.1rem] border border-[color:var(--turquoise)]/24 bg-[color:var(--foam)]/54 p-3 sm:grid-cols-3">
                  {[
                    { label: 'Route list', value: `${selectedStops.length}/4 stops` },
                    { label: 'Status', value: isInRoute ? 'Added' : 'Ready' },
                    { label: 'Next', value: place.type === 'club' || place.type === 'bar' ? 'Night route' : 'Day route' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--sea-deep)]/62">{item.label}</p>
                      <p className="mt-1 text-sm font-bold leading-5 text-[color:var(--ink)]">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[place.area, typeLabels[place.type], budgetLabels[place.budget], noiseLabels[place.noise], timeLabels[place.bestTime]].map((item) => (
                    <span key={item} className="rounded-full border border-[color:var(--border)] bg-white/72 px-3 py-1.5 text-[0.7rem] font-bold text-[color:var(--sea-deep)]">
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm font-semibold leading-6 text-[color:var(--sea-deep)]">{place.bestFor}</p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">{place.description}</p>

                <div className="mt-4 grid gap-3">
                  <div className="rounded-[1.15rem] border border-[color:var(--turquoise)]/24 bg-[color:var(--foam)]/62 p-4">
                    <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]">
                      <Compass size={14} aria-hidden="true" />
                      Local tip
                    </p>
                    <p className="mt-2 text-sm font-bold leading-6 text-[color:var(--ink)]">{place.localTip}</p>
                  </div>

                  <div className="rounded-[1.15rem] border border-[color:var(--coral)]/18 bg-[color:var(--coral-soft)]/24 p-4">
                    <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
                      <AlertTriangle size={14} aria-hidden="true" />
                      Avoid if
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--ink)]">{place.avoidIf}</p>
                  </div>

                  <div className="rounded-[1.15rem] border border-[color:var(--border)]/72 bg-white/70 p-4">
                    <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">
                      <Route size={14} aria-hidden="true" />
                      Route pairing
                    </p>
                    <p className="mt-2 text-sm font-bold leading-6 text-[color:var(--ink)]">{place.routePairing}</p>
                    <p className="mt-2 text-xs leading-5 text-[color:var(--muted-foreground)]">{place.goodNextMove}</p>
                  </div>

                  <div className="rounded-[1.15rem] border border-[color:var(--border)]/72 bg-[color:var(--background)]/70 p-4">
                    <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">
                      <Navigation size={14} aria-hidden="true" />
                      Seasonal source note
                    </p>
                    <p className="mt-2 text-xs font-semibold leading-5 text-[color:var(--ink)]">{place.seasonality}</p>
                    <p className="mt-2 border-t border-[color:var(--border)]/70 pt-2 text-xs leading-5 text-[color:var(--muted-foreground)]">{place.sourceNote}</p>
                  </div>
                </div>

                <div className="sticky bottom-0 -mx-4 -mb-4 mt-4 border-t border-[color:var(--border)]/70 bg-white/88 p-4 backdrop-blur sm:-mx-5 sm:-mb-5 sm:p-5">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => onAddToRoute(place)}
                      aria-pressed={isInRoute}
                      className={`interactive-control inline-flex items-center justify-center gap-2 rounded-full px-3.5 py-2.5 text-sm font-bold ${
                        isInRoute ? 'bg-[color:var(--turquoise)]/24 text-[color:var(--sea-deep)]' : 'bg-[color:var(--coral)] text-white shadow-coral'
                      }`}
                    >
                      {isInRoute ? <Check size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
                      {isInRoute ? 'Already in route' : 'Add to route'}
                    </button>
                    <a href="#map" onClick={onClose} className="interactive-control inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--sea-deep)] px-3.5 py-2.5 text-sm font-bold text-white hover:bg-[color:var(--sea)]">
                      <MapPinned size={15} aria-hidden="true" />
                      View on Map
                    </a>
                    <a href="#routes" onClick={onClose} className="interactive-control inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-3.5 py-2.5 text-sm font-bold text-[color:var(--sea-deep)] hover:bg-[color:var(--foam)]">
                      <Route size={15} aria-hidden="true" />
                      Pair with Routes
                    </a>
                    <a href="#areas" onClick={onClose} className="interactive-control inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-3.5 py-2.5 text-sm font-bold text-[color:var(--sea-deep)] hover:bg-[color:var(--foam)]">
                      <Compass size={15} aria-hidden="true" />
                      Compare area
                    </a>
                    <a href={place.type === 'club' || place.type === 'bar' ? '#nightlife' : '#beaches'} onClick={onClose} className="interactive-control inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-3.5 py-2.5 text-sm font-bold text-[color:var(--sea-deep)] hover:bg-[color:var(--foam)] sm:col-span-2">
                      <Sun size={15} aria-hidden="true" />
                      {place.type === 'club' || place.type === 'bar' ? 'Check nightlife style' : 'Use this as a beach day'}
                      <ArrowRight size={14} aria-hidden="true" />
                    </a>
                  </div>

                  {routeStatus && <p className="mt-3 rounded-[1rem] border border-[color:var(--turquoise)]/22 bg-[color:var(--foam)]/72 px-3 py-2 text-xs font-semibold leading-5 text-[color:var(--sea-deep)]">{routeStatus}</p>}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
