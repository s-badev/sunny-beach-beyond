import { AnimatePresence, motion } from 'framer-motion'
import { Check, ExternalLink, GitBranch, MapPin, Plus, RotateCcw, Search, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { places } from '../../data/places'
import type { AreaName, Place, PlaceCategory } from '../../types'
import { fadeUp, MotionSection } from '../ui/motion'
import { SectionLabel } from '../ui/SectionLabel'

type AreaFilter = AreaName | 'All'
type CategoryFilter = PlaceCategory | 'All'

const areaFilters: AreaFilter[] = ['All', 'Sunny Beach', 'Nessebar', 'Sveti Vlas', 'Elenite']
const categoryFilters: CategoryFilter[] = ['All', 'Beaches', 'Restaurants', 'Cafes', 'Bars', 'Clubs', 'Hotels', 'Parking', 'Viewpoints']
const mapZones = [
  { label: 'Elenite bay', x: '16%', y: '13%' },
  { label: 'Sveti Vlas edge', x: '24%', y: '22%' },
  { label: 'Sunny Beach strip', x: '36%', y: '40%' },
  { label: 'South beach', x: '42%', y: '60%' },
  { label: 'Old Nessebar', x: '56%', y: '77%' },
]

type MapPreviewProps = {
  selectedMapPlace: string
  selectedStops: Place[]
  onSelectMapPlace: (placeId: string) => void
  onAddStop: (place: Place) => void
  onRemoveStop: (placeId: string) => void
}

export function MapPreview({ selectedMapPlace, selectedStops, onSelectMapPlace, onAddStop, onRemoveStop }: MapPreviewProps) {
  const [selectedArea, setSelectedArea] = useState<AreaFilter>('All')
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All')
  const [addedPlaceId, setAddedPlaceId] = useState<string | null>(null)

  const filteredPlaces = useMemo(
    () =>
      places.filter((place) => {
        const areaMatch = selectedArea === 'All' || place.area === selectedArea
        const categoryMatch = selectedCategory === 'All' || place.category === selectedCategory

        return areaMatch && categoryMatch
      }),
    [selectedArea, selectedCategory],
  )

  useEffect(() => {
    if (filteredPlaces.length === 0) {
      if (selectedMapPlace) onSelectMapPlace('')
      return
    }

    if (!filteredPlaces.some((place) => place.id === selectedMapPlace)) {
      onSelectMapPlace(filteredPlaces[0].id)
    }
  }, [filteredPlaces, onSelectMapPlace, selectedMapPlace])

  const activePlace = filteredPlaces.find((place) => place.id === selectedMapPlace) ?? filteredPlaces[0]
  const activePlaceIsAdded = activePlace ? selectedStops.some((stop) => stop.id === activePlace.id) : false
  const routeIsFull = selectedStops.length >= 4
  const routeMood = selectedStops.some((stop) => stop.category === 'Clubs' || stop.category === 'Bars')
    ? 'night route'
    : selectedStops.some((stop) => stop.area === 'Nessebar')
      ? 'history walk'
      : selectedStops.some((stop) => stop.area === 'Sveti Vlas')
        ? 'marina day'
        : 'beach day'

  function addActivePlaceToRoute() {
    if (!activePlace) return
    if (activePlaceIsAdded) {
      setAddedPlaceId(activePlace.id)
      window.setTimeout(() => setAddedPlaceId(null), 1400)
      return
    }

    onAddStop(activePlace)
    setAddedPlaceId(activePlace.id)
    window.setTimeout(() => setAddedPlaceId(null), 1400)
  }

  function resetFilters() {
    setSelectedArea('All')
    setSelectedCategory('All')
  }

  return (
    <MotionSection id="map" className="section-shell overflow-hidden bg-[radial-gradient(circle_at_14%_10%,rgba(32,199,189,0.28),transparent_22rem),linear-gradient(145deg,#071a2d,#063b5b_58%,#04111f)] text-white">
      <div className="grain absolute inset-0 opacity-12" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Map</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">Interactive coast preview.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/68">
            Filter the coastal map by area or category, save up to four stops, and open Google Maps when you want real-world directions.
          </p>
        </motion.div>

        <motion.div className="mt-9 grid gap-5 lg:grid-cols-[23rem_1fr]" variants={fadeUp}>
          <aside className="glass-dark rounded-[1.35rem] p-4 shadow-soft sm:p-5">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/9 px-4 py-2.5 text-sm text-white/72">
              <Search size={16} aria-hidden="true" />
              <span>{filteredPlaces.length} matching places</span>
              {(selectedArea !== 'All' || selectedCategory !== 'All') && (
                <button type="button" onClick={resetFilters} className="interactive-control ml-auto rounded-full bg-white/10 px-2 py-1 text-[0.68rem] font-bold text-white/70 hover:bg-white/16 hover:text-white">
                  Reset
                </button>
              )}
            </div>

            <div className="mt-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Area</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {areaFilters.map((area) => (
                  <motion.button
                    key={area}
                    type="button"
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedArea(area)}
                    className={`interactive-control rounded-full px-3 py-1.5 text-[0.72rem] font-bold ${
                      selectedArea === area ? 'bg-[color:var(--sand)] text-[color:var(--ink)]' : 'bg-white/10 text-white/68 hover:bg-white/16'
                    }`}
                  >
                    {area}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Category</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {categoryFilters.map((category) => (
                  <motion.button
                    key={category}
                    type="button"
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`interactive-control rounded-full px-3 py-1.5 text-[0.72rem] font-bold ${
                      selectedCategory === category ? 'bg-[color:var(--turquoise)] text-[color:var(--night)]' : 'bg-white/10 text-white/68 hover:bg-white/16'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mt-5 grid max-h-[22rem] gap-2.5 overflow-auto pr-1">
              {filteredPlaces.length > 0 ? (
                filteredPlaces.map((place) => (
                  <motion.button
                    key={place.id}
                    type="button"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onSelectMapPlace(place.id)}
                    data-active={activePlace?.id === place.id}
                    className={`interactive-card rounded-2xl border p-3.5 text-left ${
                      activePlace?.id === place.id ? 'border-[color:var(--turquoise)] bg-white/15 shadow-glow' : 'border-white/10 bg-white/8 hover:bg-white/12'
                    }`}
                  >
                    <span className="font-serif text-lg leading-tight text-white">{place.name}</span>
                    <span className="mt-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/52">
                      {place.area} / {place.category}
                    </span>
                  </motion.button>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/7 p-4 text-sm leading-6 text-white/62">
                  <p className="font-semibold text-white">No places match this filter pair.</p>
                  <p className="mt-1">Reset filters or loosen one side to bring coast stops back.</p>
                  <button type="button" onClick={resetFilters} className="interactive-control mt-3 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-xs font-bold text-white hover:bg-white/18">
                    <RotateCcw size={13} aria-hidden="true" />
                    Show all places
                  </button>
                </div>
              )}
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/8 p-3.5">
              <div className="flex items-center justify-between gap-3">
                <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/52">
                  <GitBranch size={13} aria-hidden="true" />
                  Route sketch
                </p>
                <span className={`rounded-full px-2 py-0.5 text-[0.68rem] font-bold ${routeIsFull ? 'bg-[color:var(--coral)]/22 text-[color:var(--coral-soft)]' : 'bg-white/10 text-white/62'}`}>{selectedStops.length}/4</span>
              </div>
              <AnimatePresence initial={false}>
                {selectedStops.length > 0 ? (
                  <motion.div className="mt-3 grid gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {selectedStops.map((stop, index) => (
                      <motion.div
                        key={stop.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/9 px-3 py-2 text-xs font-semibold text-white/78"
                      >
                        <span className="flex min-w-0 items-center gap-2">
                          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-white/12 font-mono text-[0.62rem] text-white/70">{index + 1}</span>
                          <span className="truncate">{stop.name}</span>
                        </span>
                        <button type="button" onClick={() => onRemoveStop(stop.id)} className="interactive-control rounded-full p-1 text-white/54 hover:bg-white/12 hover:text-white" aria-label={`Remove ${stop.name}`}>
                          <X size={12} aria-hidden="true" />
                        </button>
                      </motion.div>
                    ))}
                    <div className="rounded-2xl border border-white/10 bg-white/7 px-3 py-2 text-xs leading-5 text-white/62">
                      <span className="font-bold text-white/82">{selectedStops.length} stops / {routeMood}</span>
                      <br />
                      {routeIsFull ? 'Adding another place replaces the oldest stop, keeping the route lightweight.' : 'Add up to four stops, then open each place in Google Maps for exact directions.'}
                    </div>
                  </motion.div>
                ) : (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-xs leading-5 text-white/48">
                    Choose a place on the map, then add it here to build a lightweight coastal route.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </aside>

          <div className="map-canvas">
            <svg className="absolute inset-0 z-10 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M28 6 C 34 15, 36 24, 35 34 C 34 47, 41 57, 45 68 C 49 78, 43 86, 36 94" fill="none" stroke="rgba(255,248,226,0.72)" strokeWidth="1.05" />
              <path d="M34 8 C 42 18, 45 31, 44 43 C 43 55, 51 67, 57 76 C 63 84, 64 91, 60 97" fill="none" stroke="rgba(255,255,255,0.38)" strokeDasharray="3 4" strokeWidth="0.52" />
              <path d="M19 73 C 30 66, 42 59, 56 42 C 64 32, 72 24, 83 14" fill="none" stroke="rgba(240,111,97,0.72)" strokeDasharray="2 3" strokeWidth="0.48" />
              <path d="M26 28 C 40 34, 54 38, 70 30" fill="none" stroke="rgba(32,199,189,0.72)" strokeDasharray="2 3" strokeWidth="0.48" />
              <path d="M27 84 C 38 74, 48 65, 58 58" fill="none" stroke="rgba(242,217,170,0.78)" strokeDasharray="1 3" strokeWidth="0.42" />
            </svg>

            <div className="absolute left-5 top-5 z-20 flex flex-wrap gap-2">
              <span className="rounded-full bg-[color:var(--coral)] px-3.5 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white shadow-coral">
                Live preview
              </span>
              <span className="rounded-full border border-white/12 bg-white/16 px-3.5 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                Burgas Bay
              </span>
            </div>

            <div className="pointer-events-none absolute inset-0 z-20 hidden sm:block">
              {mapZones.map((zone) => (
                <span
                  key={zone.label}
                  className="absolute rounded-full border border-white/14 bg-[color:var(--night)]/22 px-3 py-1.5 text-[0.68rem] font-semibold leading-none text-white/78 shadow-soft backdrop-blur"
                  style={{ left: zone.x, top: zone.y }}
                >
                  {zone.label}
                </span>
              ))}
            </div>

            {filteredPlaces.map((place) => {
              const isActive = activePlace?.id === place.id

              return (
                <motion.button
                  key={place.id}
                  type="button"
                  whileHover={{ scale: 1.13 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => onSelectMapPlace(place.id)}
                  className={`marker-pulse absolute z-30 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-white ring-2 ring-white/18 transition ${
                    isActive
                      ? 'border-white bg-[color:var(--coral)] shadow-coral scale-110 ring-white/55'
                      : 'border-white/80 bg-[color:var(--sea-deep)]/92 shadow-soft hover:border-white hover:bg-[color:var(--turquoise)]'
                  }`}
                  style={{ left: place.position.x, top: place.position.y }}
                  aria-label={`Select ${place.name}`}
                >
                  <MapPin size={17} aria-hidden="true" />
                </motion.button>
              )
            })}

            <AnimatePresence mode="wait">
              <motion.div
                key={activePlace?.id ?? 'empty-map-result'}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="glass-dark absolute bottom-5 right-5 z-40 w-[min(22rem,calc(100%-2.5rem))] rounded-[1.25rem] p-4 shadow-glow sm:p-5"
              >
                {activePlace ? (
                  <>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="rounded-full bg-[color:var(--sand)] px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--ink)]">{activePlace.category}</p>
                      <p className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold text-white/62">{activePlace.area}</p>
                    </div>
                    <h3 className="mt-3 font-serif text-[1.9rem] leading-tight text-white">{activePlace.name}</h3>
                    <p className="mt-2.5 text-sm leading-6 text-white/72">{activePlace.description}</p>
                    <p className="mt-3 rounded-2xl border border-white/10 bg-white/8 px-3 py-2 text-sm font-semibold leading-6 text-white">
                      <span className="block font-mono text-[0.66rem] uppercase tracking-[0.14em] text-[color:var(--sand)]/78">Use it for</span>
                      {activePlace.bestFor}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href={activePlace.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="interactive-control inline-flex items-center gap-2 rounded-full bg-[color:var(--sand)] px-3.5 py-2 text-sm font-bold text-[color:var(--ink)]"
                      >
                        Open in Google Maps
                        <ExternalLink size={15} aria-hidden="true" />
                      </a>
                      <button
                        type="button"
                        onClick={addActivePlaceToRoute}
                        aria-pressed={activePlaceIsAdded}
                        className={`interactive-control inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold text-white ${
                          activePlaceIsAdded ? 'bg-[color:var(--turquoise)]/22 text-[color:var(--foam)]' : 'bg-white/12 hover:bg-white/18'
                        }`}
                      >
                        {activePlaceIsAdded || addedPlaceId === activePlace.id ? <Check size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
                        {activePlaceIsAdded ? 'Already in route' : routeIsFull ? 'Replace oldest stop' : addedPlaceId === activePlace.id ? 'Added to route' : 'Add to Route'}
                      </button>
                    </div>
                    <p className="mt-3 rounded-2xl border border-white/10 bg-white/7 px-3 py-2 text-xs leading-5 text-white/58">
                      {activePlaceIsAdded
                        ? 'This stop is already part of the route sketch.'
                        : routeIsFull
                          ? 'Route sketch is full; adding this place keeps the latest four stops.'
                          : 'Add this stop when it belongs in the same day, not just because it looks close on the map.'}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--sand)]">Filters</p>
                    <h3 className="mt-2 font-serif text-[1.7rem] leading-tight text-white">No matching coast stops</h3>
                    <p className="mt-2.5 text-sm leading-6 text-white/72">Try another area or category to bring places back onto the map.</p>
                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/8 px-3 py-2 text-sm font-semibold text-white/58">
                      Map actions are available once a stop is visible.
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
