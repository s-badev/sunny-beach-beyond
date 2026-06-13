import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, MapPin, Plus, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { places } from '../../data/places'
import type { AreaName, Place, PlaceCategory } from '../../types'
import { fadeUp, MotionSection } from '../ui/motion'
import { SectionLabel } from '../ui/SectionLabel'

type AreaFilter = AreaName | 'All'
type CategoryFilter = PlaceCategory | 'All'

const areaFilters: AreaFilter[] = ['All', 'Sunny Beach', 'Nessebar', 'Sveti Vlas', 'Elenite']
const categoryFilters: CategoryFilter[] = ['All', 'Beaches', 'Restaurants', 'Cafes', 'Bars', 'Clubs', 'Hotels', 'Parking', 'Viewpoints']

export function MapPreview() {
  const [selectedArea, setSelectedArea] = useState<AreaFilter>('All')
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All')
  const [selectedPlace, setSelectedPlace] = useState<Place>(places[0])
  const [routeStops, setRouteStops] = useState<Place[]>([])
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

  const activePlace = filteredPlaces.find((place) => place.id === selectedPlace.id) ?? filteredPlaces[0] ?? selectedPlace

  function addActivePlaceToRoute() {
    setRouteStops((currentStops) => {
      if (currentStops.some((stop) => stop.id === activePlace.id)) return currentStops

      return [...currentStops, activePlace].slice(-4)
    })
    setAddedPlaceId(activePlace.id)
    window.setTimeout(() => setAddedPlaceId(null), 1400)
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
            Filter the local sample map by area or category, then open a place in Google Maps when you want the real-world route.
          </p>
        </motion.div>

        <motion.div className="mt-9 grid gap-5 lg:grid-cols-[23rem_1fr]" variants={fadeUp}>
          <aside className="glass-dark rounded-[1.35rem] p-4 shadow-soft sm:p-5">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/9 px-4 py-2.5 text-sm text-white/72">
              <Search size={16} aria-hidden="true" />
              <span>{filteredPlaces.length} matching places</span>
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
                    className={`rounded-full px-3 py-1.5 text-[0.72rem] font-bold transition ${
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
                    className={`rounded-full px-3 py-1.5 text-[0.72rem] font-bold transition ${
                      selectedCategory === category ? 'bg-[color:var(--turquoise)] text-[color:var(--night)]' : 'bg-white/10 text-white/68 hover:bg-white/16'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mt-5 grid max-h-[22rem] gap-2.5 overflow-auto pr-1">
              {filteredPlaces.map((place) => (
                <motion.button
                  key={place.id}
                  type="button"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedPlace(place)}
                  className={`rounded-2xl border p-3.5 text-left transition ${
                    activePlace.id === place.id ? 'border-[color:var(--turquoise)] bg-white/15 shadow-glow' : 'border-white/10 bg-white/8 hover:bg-white/12'
                  }`}
                >
                  <span className="font-serif text-lg leading-tight text-white">{place.name}</span>
                  <span className="mt-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/52">
                    {place.area} / {place.category}
                  </span>
                </motion.button>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/8 p-3.5">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/52">Selected stops</p>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.68rem] font-bold text-white/62">{routeStops.length}/4</span>
              </div>
              <AnimatePresence initial={false}>
                {routeStops.length > 0 ? (
                  <motion.div className="mt-3 grid gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {routeStops.map((stop, index) => (
                      <motion.p
                        key={stop.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        className="rounded-full bg-white/9 px-3 py-1.5 text-xs font-semibold text-white/78"
                      >
                        {index + 1}. {stop.name}
                      </motion.p>
                    ))}
                  </motion.div>
                ) : (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 text-xs leading-5 text-white/48">
                    Add map places to sketch a lightweight route.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </aside>

          <div className="map-canvas">
            <svg className="absolute inset-0 z-10 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M18 16 C 30 28, 37 42, 43 58 S 55 78, 68 86" fill="none" stroke="rgba(255,255,255,0.48)" strokeDasharray="3 3" strokeWidth="0.55" />
              <path d="M10 28 C 26 34, 37 48, 50 72" fill="none" stroke="rgba(240,111,97,0.62)" strokeDasharray="2 3" strokeWidth="0.42" />
            </svg>

            <div className="absolute left-5 top-5 z-20 flex flex-wrap gap-2">
              <span className="rounded-full bg-[color:var(--coral)] px-3.5 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white shadow-coral">
                Live preview
              </span>
              <span className="rounded-full border border-white/12 bg-white/16 px-3.5 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                Burgas Bay
              </span>
            </div>

            {filteredPlaces.map((place) => {
              const isActive = activePlace.id === place.id

              return (
                <motion.button
                  key={place.id}
                  type="button"
                  whileHover={{ scale: 1.13 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setSelectedPlace(place)}
                  className={`marker-pulse absolute z-30 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-white ring-2 ring-white/18 transition ${
                    isActive
                      ? 'border-white bg-[color:var(--coral)] shadow-coral scale-110 ring-white/55'
                      : 'border-white/75 bg-[color:var(--sea-deep)]/90 shadow-soft hover:scale-110'
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
                key={activePlace.id}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.22 }}
                className="glass-dark absolute bottom-5 right-5 z-40 w-[min(22rem,calc(100%-2.5rem))] rounded-[1.25rem] p-4 shadow-glow sm:p-5"
              >
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--sand)]">{activePlace.category}</p>
                <h3 className="mt-2 font-serif text-[1.7rem] leading-tight text-white">{activePlace.name}</h3>
                <p className="mt-2.5 text-sm leading-6 text-white/72">{activePlace.description}</p>
                <p className="mt-3 rounded-2xl border border-white/10 bg-white/8 px-3 py-2 text-sm font-semibold text-white">{activePlace.bestFor}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={activePlace.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sand)] px-3.5 py-2 text-sm font-bold text-[color:var(--ink)] transition hover:-translate-y-0.5"
                  >
                    Open in Google Maps
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                  <button type="button" onClick={addActivePlaceToRoute} className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/18">
                    <Plus size={15} aria-hidden="true" />
                    {addedPlaceId === activePlace.id ? 'Added to route' : 'Add to Route'}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
