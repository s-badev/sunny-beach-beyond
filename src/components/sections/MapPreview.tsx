import { ExternalLink, MapPin, Plus, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { places } from '../../data/places'
import type { AreaName, Place, PlaceCategory } from '../../types'
import { SectionLabel } from '../ui/SectionLabel'

type AreaFilter = AreaName | 'All'
type CategoryFilter = PlaceCategory | 'All'

const areaFilters: AreaFilter[] = ['All', 'Sunny Beach', 'Nessebar', 'Sveti Vlas', 'Elenite']
const categoryFilters: CategoryFilter[] = ['All', 'Beaches', 'Restaurants', 'Cafes', 'Bars', 'Clubs', 'Hotels', 'Parking', 'Viewpoints']

export function MapPreview() {
  const [selectedArea, setSelectedArea] = useState<AreaFilter>('All')
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All')
  const [selectedPlace, setSelectedPlace] = useState<Place>(places[0])

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

  return (
    <section id="map-preview" className="section-shell overflow-hidden bg-[radial-gradient(circle_at_14%_10%,rgba(32,199,189,0.28),transparent_22rem),linear-gradient(145deg,#071a2d,#063b5b_58%,#04111f)] text-white">
      <div className="grain absolute inset-0 opacity-12" aria-hidden="true" />
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <SectionLabel>Map</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">Interactive coast preview.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/68">
            Filter the local sample map by area or category, then open a place in Google Maps when you want the real-world route.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[24rem_1fr]">
          <aside className="glass-dark rounded-[1.5rem] p-5 shadow-glow">
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-3 text-sm text-white/70">
              <Search size={16} aria-hidden="true" />
              <span>{filteredPlaces.length} matching places</span>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Area</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {areaFilters.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setSelectedArea(area)}
                    className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                      selectedArea === area ? 'bg-[color:var(--sand)] text-[color:var(--ink)]' : 'bg-white/10 text-white/68 hover:bg-white/16'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/48">Category</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categoryFilters.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                      selectedCategory === category ? 'bg-[color:var(--turquoise)] text-[color:var(--night)]' : 'bg-white/10 text-white/68 hover:bg-white/16'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid max-h-[23rem] gap-3 overflow-auto pr-1">
              {filteredPlaces.map((place) => (
                <button
                  key={place.id}
                  type="button"
                  onClick={() => setSelectedPlace(place)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    activePlace.id === place.id ? 'border-[color:var(--turquoise)] bg-white/16' : 'border-white/10 bg-white/7 hover:bg-white/12'
                  }`}
                >
                  <span className="font-serif text-xl text-white">{place.name}</span>
                  <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.14em] text-white/48">
                    {place.area} / {place.category}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="map-canvas">
            <svg className="absolute inset-0 z-10 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M18 16 C 30 28, 37 42, 43 58 S 55 78, 68 86" fill="none" stroke="rgba(255,255,255,0.48)" strokeDasharray="3 3" strokeWidth="0.55" />
              <path d="M10 28 C 26 34, 37 48, 50 72" fill="none" stroke="rgba(240,111,97,0.62)" strokeDasharray="2 3" strokeWidth="0.42" />
            </svg>

            <div className="absolute left-5 top-5 z-20 flex flex-wrap gap-2">
              <span className="rounded-full bg-[color:var(--coral)] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-coral">
                Live preview
              </span>
              <span className="rounded-full bg-white/16 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                Burgas Bay
              </span>
            </div>

            {filteredPlaces.map((place) => {
              const isActive = activePlace.id === place.id

              return (
                <button
                  key={place.id}
                  type="button"
                  onClick={() => setSelectedPlace(place)}
                  className={`absolute z-30 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-white transition ${
                    isActive
                      ? 'border-white bg-[color:var(--coral)] shadow-coral scale-110'
                      : 'border-white/70 bg-[color:var(--sea-deep)]/86 shadow-glow hover:scale-110'
                  }`}
                  style={{ left: place.position.x, top: place.position.y }}
                  aria-label={`Select ${place.name}`}
                >
                  <MapPin size={17} aria-hidden="true" />
                </button>
              )
            })}

            <div className="glass-dark absolute bottom-5 right-5 z-40 w-[min(22rem,calc(100%-2.5rem))] rounded-[1.35rem] p-5 shadow-glow">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--sand)]">{activePlace.category}</p>
              <h3 className="mt-2 font-serif text-3xl leading-tight text-white">{activePlace.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{activePlace.description}</p>
              <p className="mt-3 text-sm font-semibold text-white">{activePlace.bestFor}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={activePlace.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--sand)] px-4 py-2 text-sm font-bold text-[color:var(--ink)]"
                >
                  Open in Google Maps
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
                <button type="button" className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/18">
                  <Plus size={15} aria-hidden="true" />
                  Add to Route
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
