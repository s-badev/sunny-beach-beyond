import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, Check, Compass, ExternalLink, GitBranch, MapPin, Plus, RotateCcw, Search, ShieldCheck, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { places } from '../../data/places'
import type { AreaName, Place, PlaceCategory } from '../../types'
import { fadeUp, MotionSection } from '../ui/motion'
import { SectionIntro } from '../ui/SectionIntro'
import { SectionLabel } from '../ui/SectionLabel'

type AreaFilter = AreaName | 'All'
type CategoryFilter = PlaceCategory | 'All'

const areaFilters: AreaFilter[] = ['All', 'Sunny Beach', 'Nessebar', 'Sveti Vlas', 'Elenite']
const categoryFilters: CategoryFilter[] = ['All', 'Beaches', 'Restaurants', 'Cafes', 'Bars', 'Clubs', 'Hotels', 'Parking', 'Viewpoints']
const mapZones = [
  { label: 'Elenite bay', x: '13%', y: '12%' },
  { label: 'Sveti Vlas marina', x: '20%', y: '25%' },
  { label: 'Sunny Beach strip', x: '33%', y: '44%' },
  { label: 'South beach', x: '41%', y: '63%' },
  { label: 'Old Nessebar', x: '55%', y: '80%' },
]

const categoryTone: Record<PlaceCategory, string> = {
  Beaches: 'bg-[color:var(--sand)] text-[color:var(--ink)]',
  Restaurants: 'bg-[color:var(--foam)] text-[color:var(--sea-deep)]',
  Cafes: 'bg-white/82 text-[color:var(--ink)]',
  Bars: 'bg-[color:var(--coral-soft)] text-[color:var(--ink)]',
  Clubs: 'bg-[color:var(--coral)] text-white',
  Hotels: 'bg-white/20 text-white',
  Parking: 'bg-[color:var(--sea-deep)] text-white',
  Viewpoints: 'bg-[color:var(--turquoise)] text-[color:var(--night)]',
}

const categoryShort: Record<PlaceCategory, string> = {
  Beaches: 'Beach',
  Restaurants: 'Dine',
  Cafes: 'Cafe',
  Bars: 'Bar',
  Clubs: 'Club',
  Hotels: 'Stay',
  Parking: 'Park',
  Viewpoints: 'View',
}

type MapPreviewProps = {
  selectedMapPlace: string
  selectedStops: Place[]
  onSelectMapPlace: (placeId: string) => void
  onAddStop: (place: Place) => void
  onRemoveStop: (placeId: string) => void
}

function pointFromPosition(place: Place) {
  return {
    x: Number.parseFloat(place.position.x),
    y: Number.parseFloat(place.position.y),
  }
}

function buildRoutePath(stops: Place[]) {
  if (stops.length < 2) return ''

  return stops
    .map((stop, index) => {
      const point = pointFromPosition(stop)
      return `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
    })
    .join(' ')
}

function getNextMove(place: Place) {
  if (place.category === 'Clubs' || place.category === 'Bars') {
    return {
      title: 'Good next move',
      text: 'Pair this with late food or a direct return plan. Do not leave transport vague after the loud stops.',
    }
  }

  if (place.area === 'Nessebar') {
    return {
      title: 'Good next move',
      text: 'Pair this with an old-town walk or sea-wall pause, then add buffer time before dinner or sunset.',
    }
  }

  if (place.area === 'Sveti Vlas') {
    return {
      title: 'Good next move',
      text: 'Pair it with Marina Dinevi or a sunset viewpoint, and treat the marina as the evening finish.',
    }
  }

  if (place.area === 'Elenite') {
    return {
      title: 'Good next move',
      text: 'Use this as a slow planned stop. It works better as a stay-put beach day than a quick hop.',
    }
  }

  return {
    title: 'Good next move',
    text: 'Pair nearby beach time with a simple promenade stop, then avoid stacking too many far areas into one day.',
  }
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
  const routePath = buildRoutePath(selectedStops)
  const routeMood = selectedStops.some((stop) => stop.category === 'Clubs' || stop.category === 'Bars')
    ? 'night route'
    : selectedStops.some((stop) => stop.area === 'Nessebar')
      ? 'history walk'
      : selectedStops.some((stop) => stop.area === 'Sveti Vlas')
        ? 'marina day'
        : 'beach day'
  const currentViewLabel = `${selectedArea === 'All' ? 'All areas' : selectedArea} / ${selectedCategory === 'All' ? 'all categories' : selectedCategory}`
  const nextMove = activePlace ? getNextMove(activePlace) : null
  const filteredPlacesCountLabel = `${filteredPlaces.length} ${filteredPlaces.length === 1 ? 'place' : 'places'}`
  const visiblePlacesLabel = `${filteredPlaces.length} ${filteredPlaces.length === 1 ? 'place is' : 'places are'} visible on the coast.`
  const pinsLabel = `${filteredPlaces.length} ${filteredPlaces.length === 1 ? 'pin' : 'pins'}`
  const checklistItems = [
    {
      label: 'Same-day fit',
      complete: selectedStops.length > 0,
      note: selectedStops.length > 0 ? 'Route has a starting rhythm.' : 'Add one stop to start shaping the day.',
    },
    {
      label: 'Route line',
      complete: selectedStops.length >= 2,
      note: selectedStops.length >= 2 ? 'Two or more stops are connected on the map.' : 'Add 2+ stops to draw a route line.',
    },
    {
      label: 'Transport check',
      complete: selectedStops.some((stop) => stop.area !== selectedStops[0]?.area),
      note: selectedStops.some((stop) => stop.area !== selectedStops[0]?.area) ? 'Cross-area route: allow transfer time.' : 'Close on the map can still be slow in summer.',
    },
  ]

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
    <MotionSection id="map" className="section-shell overflow-hidden bg-[linear-gradient(180deg,#f3fbf8_0%,#e6f5f2_52%,#fff8e8_100%)] text-[color:var(--ink)]">
      <div className="grain absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Map</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">Interactive coast preview.</h2>
          </div>
          <SectionIntro label="Planning tool">
            Filter the coastal map by area or category, save up to four stops, and open Google Maps when you want real-world directions.
          </SectionIntro>
        </motion.div>

        <motion.div
          className="mt-9 overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/54 shadow-[0_32px_90px_rgba(9,58,82,0.14)] backdrop-blur"
          variants={fadeUp}
        >
          <div className="grid min-w-0 gap-0 lg:grid-cols-[19rem_minmax(0,1fr)] xl:grid-cols-[20.5rem_minmax(0,1fr)_21rem]">
            <aside className="min-w-0 border-b border-[color:var(--border)]/75 bg-white/62 p-4 sm:p-5 lg:border-b-0 lg:border-r">
              <div className="rounded-[1.35rem] border border-[color:var(--border)]/70 bg-white/78 p-3 shadow-soft">
                <div className="flex items-center gap-3 rounded-2xl bg-[color:var(--foam)] px-3 py-2.5 text-sm font-semibold text-[color:var(--sea-deep)]">
                  <Search size={16} aria-hidden="true" />
                  <span className="min-w-0 flex-1 whitespace-nowrap">
                    {filteredPlacesCountLabel}
                  </span>
                  {(selectedArea !== 'All' || selectedCategory !== 'All') && (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="interactive-control inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)] shadow-sm hover:bg-[color:var(--sand)]"
                    >
                      <RotateCcw size={12} aria-hidden="true" />
                      Reset
                    </button>
                  )}
                </div>

                <div className="mt-4 rounded-[1.15rem] border border-[color:var(--border)]/70 bg-[color:var(--background)]/72 p-3">
                  <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">Current view</p>
                  <p className="mt-1.5 text-sm font-bold text-[color:var(--ink)]">{currentViewLabel}</p>
                  <p className="mt-1 text-xs leading-5 text-[color:var(--muted-foreground)]">
                    {visiblePlacesLabel}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--sea-deep)]/62">Area</p>
                  <span className="text-xs font-semibold text-[color:var(--muted-foreground)]">{selectedArea === 'All' ? 'whole coast' : selectedArea}</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {areaFilters.map((area) => (
                    <motion.button
                      key={area}
                      type="button"
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedArea(area)}
                      aria-pressed={selectedArea === area}
                      className={`interactive-control min-h-11 rounded-2xl border px-3 py-2 text-sm font-bold ${
                        selectedArea === area
                          ? 'border-[color:var(--sea-deep)] bg-[color:var(--sea-deep)] text-white shadow-[0_14px_34px_rgba(6,59,91,0.22)]'
                          : 'border-[color:var(--border)]/80 bg-white/76 text-[color:var(--sea-deep)] hover:border-[color:var(--turquoise)] hover:bg-white'
                      }`}
                    >
                      {area}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--sea-deep)]/62">Category</p>
                  <span className="text-xs font-semibold text-[color:var(--muted-foreground)]">{selectedCategory === 'All' ? 'all types' : selectedCategory}</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {categoryFilters.map((category) => (
                    <motion.button
                      key={category}
                      type="button"
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedCategory(category)}
                      aria-pressed={selectedCategory === category}
                      className={`interactive-control min-h-11 rounded-2xl border px-3 py-2 text-sm font-bold ${
                        selectedCategory === category
                          ? 'border-[color:var(--turquoise)] bg-[color:var(--turquoise)] text-[color:var(--night)] shadow-[0_14px_34px_rgba(32,199,189,0.2)]'
                          : 'border-[color:var(--border)]/80 bg-white/76 text-[color:var(--sea-deep)] hover:border-[color:var(--turquoise)] hover:bg-white'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--sea-deep)]/62">Places</p>
                  <span className="rounded-full bg-[color:var(--foam)] px-2 py-1 text-xs font-bold text-[color:var(--sea-deep)]">{filteredPlaces.length}</span>
                </div>
                <div className="mt-3 grid max-h-[19rem] gap-2.5 overflow-x-hidden overflow-y-auto pr-1 sm:max-h-[22rem] lg:max-h-[25rem]">
                  {filteredPlaces.length > 0 ? (
                    filteredPlaces.map((place) => (
                      <motion.button
                        key={place.id}
                        type="button"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => onSelectMapPlace(place.id)}
                        data-active={activePlace?.id === place.id}
                        className={`interactive-card active-rail w-full min-w-0 rounded-[1.15rem] border p-3 text-left ${
                          activePlace?.id === place.id
                            ? 'border-[color:var(--turquoise)] bg-white shadow-glow'
                            : 'border-[color:var(--border)]/74 bg-white/72 hover:bg-white'
                        }`}
                      >
                        <span className="flex min-w-0 items-start justify-between gap-3">
                          <span className="min-w-0 flex-1">
                            <span className="block truncate font-serif text-lg leading-tight text-[color:var(--ink)]">{place.name}</span>
                            <span className="mt-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-foreground)]">
                              {place.area}
                            </span>
                          </span>
                          <span className={`max-w-[5.75rem] shrink-0 truncate rounded-full px-2 py-1 text-[0.62rem] font-bold ${categoryTone[place.category]}`}>
                            {categoryShort[place.category]}
                          </span>
                        </span>
                      </motion.button>
                    ))
                  ) : (
                    <div className="rounded-[1.15rem] border border-[color:var(--border)]/78 bg-white/72 p-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
                      <p className="font-bold text-[color:var(--ink)]">No places match this filter pair.</p>
                      <p className="mt-1">Reset filters or loosen one side to bring coast stops back.</p>
                      <button
                        type="button"
                        onClick={resetFilters}
                        className="interactive-control mt-3 inline-flex items-center gap-2 rounded-full bg-[color:var(--sea-deep)] px-3 py-1.5 text-xs font-bold text-white hover:bg-[color:var(--sea)]"
                      >
                        <RotateCcw size={13} aria-hidden="true" />
                        Show all places
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                <div className="rounded-[1.15rem] border border-[color:var(--border)]/70 bg-white/76 p-3 shadow-soft">
                  <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Map legend</p>
                  <div className="mt-3 grid gap-2 text-xs font-semibold text-[color:var(--ink)]">
                    <div className="flex items-center gap-2">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[color:var(--coral)] text-white">
                        <MapPin size={12} aria-hidden="true" />
                      </span>
                      Selected pin
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[color:var(--turquoise)] text-[color:var(--night)]">
                        <Check size={12} aria-hidden="true" />
                      </span>
                      Route stop
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[color:var(--sea-deep)] text-white">
                        <MapPin size={12} aria-hidden="true" />
                      </span>
                      Available place
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.15rem] border border-[color:var(--turquoise)]/22 bg-[color:var(--foam)]/72 p-3 shadow-soft">
                  <p className="inline-flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]">
                    <Compass size={13} aria-hidden="true" />
                    Filter tip
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-[color:var(--ink)]">
                    Use area first, then category. Distance alone does not tell the full summer rhythm.
                  </p>
                </div>
              </div>
            </aside>

            <div className="flex min-w-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(223,246,237,0.36))] p-3 sm:p-5 xl:p-6">
              <div className="map-canvas min-h-full flex-1">
                <svg className="absolute inset-0 z-10 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M27 2 C 33 12, 36 23, 34 34 C 32 47, 41 57, 44 68 C 48 80, 42 89, 36 98" fill="none" stroke="rgba(255,248,226,0.92)" strokeWidth="1.25" />
                  <path d="M33 3 C 42 15, 45 30, 43 43 C 41 57, 52 68, 59 79 C 64 87, 64 94, 60 100" fill="none" stroke="rgba(255,255,255,0.48)" strokeDasharray="3 4" strokeWidth="0.62" />
                  <path d="M18 74 C 30 68, 42 59, 56 43 C 65 31, 74 23, 86 13" fill="none" stroke="rgba(240,111,97,0.72)" strokeDasharray="1.4 3" strokeWidth="0.55" />
                  <path d="M23 29 C 39 34, 55 39, 73 30" fill="none" stroke="rgba(255,255,255,0.38)" strokeDasharray="2 5" strokeWidth="0.5" />
                  <path d="M26 85 C 37 75, 48 66, 59 59" fill="none" stroke="rgba(242,217,170,0.88)" strokeDasharray="1 3" strokeWidth="0.48" />
                  {routePath && (
                    <motion.path
                      key={routePath}
                      className="route-dash"
                      d={routePath}
                      fill="none"
                      stroke="rgba(255,255,255,0.95)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="5 5"
                      strokeWidth="1.15"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.55, ease: 'easeOut' }}
                    />
                  )}
                </svg>

                <div className="absolute left-4 right-4 top-4 z-20 flex flex-wrap items-center gap-2 sm:left-5 sm:right-auto sm:top-5">
                  <span className="rounded-full bg-[color:var(--coral)] px-3.5 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white shadow-coral">
                    Coastal explorer
                  </span>
                  <span className="rounded-full border border-white/30 bg-white/24 px-3.5 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                    Burgas Bay
                  </span>
                </div>

                <div className="pointer-events-none absolute inset-0 z-20 hidden sm:block">
                  {mapZones.map((zone) => (
                    <span
                      key={zone.label}
                      className="absolute rounded-full border border-white/24 bg-[color:var(--night)]/24 px-3 py-1.5 text-[0.68rem] font-semibold leading-none text-white/82 shadow-soft backdrop-blur"
                      style={{ left: zone.x, top: zone.y }}
                    >
                      {zone.label}
                    </span>
                  ))}
                </div>

                {filteredPlaces.map((place) => {
                  const isActive = activePlace?.id === place.id
                  const isStop = selectedStops.some((stop) => stop.id === place.id)

                  return (
                    <motion.button
                      key={place.id}
                      type="button"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => onSelectMapPlace(place.id)}
                      className={`interactive-control group absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-white ${
                        isActive ? 'marker-pulse' : ''
                      }`}
                      style={{ left: place.position.x, top: place.position.y }}
                      aria-label={`Select ${place.name}`}
                    >
                      <span
                        className={`grid size-10 place-items-center rounded-full border text-white ring-2 transition ${
                          isActive
                            ? 'border-white bg-[color:var(--coral)] shadow-coral ring-white/65'
                            : isStop
                              ? 'border-white bg-[color:var(--turquoise)] text-[color:var(--night)] ring-white/42 shadow-glow'
                              : 'border-white/82 bg-[color:var(--sea-deep)]/92 ring-white/18 shadow-soft group-hover:border-white group-hover:bg-[color:var(--turquoise)] group-hover:text-[color:var(--night)]'
                        }`}
                      >
                        <MapPin size={17} aria-hidden="true" />
                      </span>
                      {isStop && (
                        <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full border border-white bg-[color:var(--night)] font-mono text-[0.6rem] font-bold text-white">
                          {selectedStops.findIndex((stop) => stop.id === place.id) + 1}
                        </span>
                      )}
                      <span
                        className={`pointer-events-none absolute left-1/2 top-[calc(100%+0.45rem)] max-w-[8rem] -translate-x-1/2 rounded-full border border-white/24 bg-[color:var(--night)]/72 px-2.5 py-1 text-center text-[0.68rem] font-bold leading-tight text-white shadow-soft backdrop-blur transition ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
                        }`}
                      >
                        {place.name}
                      </span>
                    </motion.button>
                  )
                })}

                <div className="absolute inset-x-4 bottom-4 z-20 rounded-[1.15rem] border border-white/22 bg-[color:var(--night)]/36 p-3 text-white shadow-soft backdrop-blur sm:left-auto sm:right-5 sm:w-[18rem]">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white/62">Map readout</p>
                    <span className="rounded-full bg-white/16 px-2 py-0.5 text-[0.68rem] font-bold text-white/78">{pinsLabel}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold leading-5 text-white">
                    {activePlace ? `${activePlace.name} is selected.` : 'No stop selected.'}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/62">
                    {selectedStops.length > 1 ? `${selectedStops.length} route stops are connected on the map.` : 'Add two or more stops to draw a route line.'}
                  </p>
                </div>
              </div>
            </div>

            <aside className="min-w-0 border-t border-[color:var(--border)]/75 bg-white/64 p-4 sm:p-5 lg:col-span-2 xl:col-span-1 xl:border-l xl:border-t-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlace?.id ?? 'empty-map-result'}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-[1.35rem] border border-[color:var(--border)]/75 bg-white/84 p-4 shadow-soft sm:p-5"
                >
                  {activePlace ? (
                    <>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className={`rounded-full px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] ${categoryTone[activePlace.category]}`}>
                          {activePlace.category}
                        </p>
                        <p className="rounded-full border border-[color:var(--border)] bg-[color:var(--foam)] px-3 py-1 text-xs font-bold text-[color:var(--sea-deep)]">{activePlace.area}</p>
                      </div>
                      <h3 className="mt-3 font-serif text-[2rem] leading-tight text-[color:var(--ink)]">{activePlace.name}</h3>
                      <p className="mt-2.5 text-sm leading-6 text-[color:var(--muted-foreground)]">{activePlace.description}</p>
                      <div className="mt-4 rounded-[1.1rem] border border-[color:var(--border)]/78 bg-[color:var(--background)]/68 px-3.5 py-3">
                        <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea)]">Why go</p>
                        <p className="mt-1 text-sm font-bold leading-6 text-[color:var(--ink)]">{activePlace.bestFor}</p>
                      </div>
                      <div className="mt-4 grid gap-2">
                        <a
                          href={activePlace.googleMapsUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="interactive-control inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--sea-deep)] px-3.5 py-2.5 text-center text-sm font-bold !text-white hover:bg-[color:var(--sea)] hover:!text-white focus-visible:!text-white active:!text-white"
                        >
                          <span className="!text-white">Open in Google Maps</span>
                          <ExternalLink size={15} className="!text-white" aria-hidden="true" />
                        </a>
                        <button
                          type="button"
                          onClick={addActivePlaceToRoute}
                          aria-pressed={activePlaceIsAdded}
                          className={`interactive-control inline-flex items-center justify-center gap-2 rounded-full px-3.5 py-2.5 text-center text-sm font-bold ${
                            activePlaceIsAdded
                              ? 'bg-[color:var(--turquoise)]/22 text-[color:var(--sea-deep)]'
                              : 'bg-[color:var(--coral)] text-white shadow-coral hover:bg-[#e55f52]'
                          }`}
                        >
                          {activePlaceIsAdded || addedPlaceId === activePlace.id ? <Check size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
                          {activePlaceIsAdded ? 'Already in route' : routeIsFull ? 'Replace oldest stop' : addedPlaceId === activePlace.id ? 'Added to route' : 'Add to route'}
                        </button>
                      </div>
                      <p className="mt-3 rounded-[1rem] border border-[color:var(--border)]/70 bg-white/72 px-3 py-2 text-xs leading-5 text-[color:var(--muted-foreground)]">
                        {activePlaceIsAdded
                          ? 'This stop is already part of the route sketch.'
                          : routeIsFull
                            ? 'Route sketch is full; adding this place keeps the latest four stops.'
                            : 'Add this stop when it belongs in the same day, not just because it looks close on the map.'}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--sea)]">Filters</p>
                      <h3 className="mt-2 font-serif text-[1.7rem] leading-tight text-[color:var(--ink)]">No matching coast stops</h3>
                      <p className="mt-2.5 text-sm leading-6 text-[color:var(--muted-foreground)]">Try another area or category to bring places back onto the map.</p>
                      <button
                        type="button"
                        onClick={resetFilters}
                        className="interactive-control mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--sea-deep)] px-3.5 py-2 text-sm font-bold text-white hover:bg-[color:var(--sea)]"
                      >
                        <RotateCcw size={14} aria-hidden="true" />
                        Reset filters
                      </button>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 rounded-[1.35rem] border border-[color:var(--border)]/75 bg-white/84 p-4 shadow-soft sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--sea-deep)]/62">
                    <GitBranch size={13} aria-hidden="true" />
                    Route sketch
                  </p>
                  <span className={`rounded-full px-2.5 py-1 text-[0.68rem] font-bold ${routeIsFull ? 'bg-[color:var(--coral-soft)] text-[color:var(--ink)]' : 'bg-[color:var(--foam)] text-[color:var(--sea-deep)]'}`}>
                    {selectedStops.length}/4
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {selectedStops.length > 0 ? (
                    <motion.div className="mt-4 grid gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {selectedStops.map((stop, index) => (
                        <motion.div
                          key={stop.id}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          className="relative flex items-center justify-between gap-3 rounded-[1.1rem] border border-[color:var(--border)]/70 bg-[color:var(--background)]/76 px-3 py-2.5 text-sm font-semibold text-[color:var(--ink)]"
                        >
                          {index < selectedStops.length - 1 && <span className="absolute left-[1.38rem] top-[2.55rem] h-4 w-px bg-[color:var(--turquoise)]/55" aria-hidden="true" />}
                          <span className="flex min-w-0 items-center gap-3">
                            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[color:var(--sea-deep)] font-mono text-[0.68rem] text-white">{index + 1}</span>
                            <span className="min-w-0">
                              <span className="block truncate">{stop.name}</span>
                              <span className="mt-0.5 block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-foreground)]">
                                {stop.area} / {categoryShort[stop.category]}
                              </span>
                            </span>
                          </span>
                          <button
                            type="button"
                            onClick={() => onRemoveStop(stop.id)}
                            className="interactive-control shrink-0 rounded-full p-1.5 text-[color:var(--muted-foreground)] hover:bg-[color:var(--coral-soft)] hover:text-[color:var(--ink)]"
                            aria-label={`Remove ${stop.name}`}
                          >
                            <X size={14} aria-hidden="true" />
                          </button>
                        </motion.div>
                      ))}
                      <div className="rounded-[1.1rem] border border-[color:var(--border)]/70 bg-white/72 px-3 py-2.5 text-xs leading-5 text-[color:var(--muted-foreground)]">
                        <span className="font-bold text-[color:var(--ink)]">
                          {selectedStops.length} stops / {routeMood}
                        </span>
                        <br />
                        {routeIsFull ? 'Adding another place replaces the oldest stop, keeping the route lightweight.' : 'Add up to four stops, then open each place in Google Maps for exact directions.'}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 rounded-[1.1rem] border border-dashed border-[color:var(--border)] bg-[color:var(--background)]/58 p-4 text-sm leading-6 text-[color:var(--muted-foreground)]"
                    >
                      <p className="font-bold text-[color:var(--ink)]">Start with one coast stop.</p>
                      <p className="mt-1">Choose a marker or place card, then add it here to build a simple day route.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {activePlace && (
                <div className="mt-4 grid gap-3">
                  <div className="rounded-[1.25rem] border border-[color:var(--border)]/75 bg-white/82 p-4 shadow-soft">
                    <div className="flex items-center justify-between gap-3">
                      <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">
                        <Compass size={13} aria-hidden="true" />
                        Stop context
                      </p>
                      <span className={`max-w-[6rem] truncate rounded-full px-2.5 py-1 text-[0.66rem] font-bold ${categoryTone[activePlace.category]}`}>
                        {categoryShort[activePlace.category]}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-bold leading-6 text-[color:var(--ink)]">Best use: {activePlace.bestFor}</p>
                    <p className="mt-1.5 text-xs leading-5 text-[color:var(--muted-foreground)]">
                      {activePlace.area} stop. Use it when the day rhythm matches the plan, not just because the pin looks close.
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-[color:var(--border)]/75 bg-white/82 p-4 shadow-soft">
                    <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">
                      <ShieldCheck size={13} aria-hidden="true" />
                      Route checklist
                    </p>
                    <div className="mt-3 grid gap-2">
                      {checklistItems.map((item) => (
                        <div key={item.label} className="flex gap-3 rounded-[1rem] bg-[color:var(--background)]/68 px-3 py-2">
                          <span
                            className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${
                              item.complete ? 'bg-[color:var(--turquoise)] text-[color:var(--night)]' : 'bg-white text-[color:var(--sea-deep)]'
                            }`}
                          >
                            {item.complete ? <Check size={13} aria-hidden="true" /> : <Plus size={13} aria-hidden="true" />}
                          </span>
                          <p className="text-xs leading-5 text-[color:var(--muted-foreground)]">
                            <span className="block font-bold text-[color:var(--ink)]">{item.label}</span>
                            {item.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] border border-[color:var(--coral)]/18 bg-[color:var(--coral-soft)]/24 p-4 shadow-soft">
                    <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
                      <AlertTriangle size={13} aria-hidden="true" />
                      {nextMove?.title}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-6 text-[color:var(--ink)]">{nextMove?.text}</p>
                    <p className="mt-2 border-t border-[color:var(--coral)]/14 pt-2 text-xs leading-5 text-[color:var(--muted-foreground)]">
                      Build routes by day rhythm, transport friction, and timing. Distance alone is the least useful signal in peak summer.
                    </p>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
