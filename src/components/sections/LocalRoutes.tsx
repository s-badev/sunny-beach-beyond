import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, BadgeCheck, Camera, Clock3, Compass, Footprints, Moon, Route as RouteIcon, Sparkles, Timer, Users, type LucideIcon } from 'lucide-react'
import { routes } from '../../data/routes'
import type { LocalRoute, Place } from '../../types'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionIntro } from '../ui/SectionIntro'
import { SectionLabel } from '../ui/SectionLabel'

type RouteMetricKey = 'walkability' | 'time' | 'friction' | 'sunset' | 'family' | 'nightlife' | 'photo' | 'crowd'

type RouteMetric = {
  label: string
  value: number
  note: string
}

type RouteGuide = {
  mood: string
  style: string
  start: string
  warning: string
  whyWorks: string
  flowNote: string
  cardHint: string
  steps: string[]
  metrics: Record<RouteMetricKey, RouteMetric>
}

const routeGuides: Record<string, RouteGuide> = {
  'first-time-in-sunny-beach': {
    mood: 'Orientation walk',
    style: 'Easy resort read',
    start: 'Central Sunny Beach',
    warning: 'Do this before choosing where to spend the evening; the resort changes quickly from center to south.',
    whyWorks: 'It gives first-time visitors the basic mental map: central beach, promenade rhythm, the southward pull, then an easy sunset finish.',
    flowNote: 'Keep it loose and let the walk decide whether the evening should stay central or move south.',
    cardHint: 'Best when you want the coastline to make sense fast.',
    steps: [
      'Start with the easiest landmark and get the beach logistics clear.',
      'Use the promenade to read food, shops, crowds and walking distances.',
      'Move south only after you understand the central rhythm.',
      'Finish with a low-commitment sunset drink near the sand.',
    ],
    metrics: {
      walkability: { label: 'Walkability', value: 90, note: 'Mostly on foot if staying central' },
      time: { label: 'Time needed', value: 58, note: 'A relaxed half day' },
      friction: { label: 'Transfer friction', value: 24, note: 'Low unless staying far north/south' },
      sunset: { label: 'Sunset value', value: 72, note: 'Good if you pace the walk' },
      family: { label: 'Family fit', value: 70, note: 'Simple and flexible' },
      nightlife: { label: 'Nightlife link', value: 58, note: 'Helps choose an evening zone' },
      photo: { label: 'Photo value', value: 54, note: 'More context than drama' },
      crowd: { label: 'Crowd risk', value: 68, note: 'Central areas get busy' },
    },
  },
  'party-night-route': {
    mood: 'Loud night',
    style: 'Group momentum',
    start: 'Dinner near the center',
    warning: 'Decide the return route before the first drink, especially if your hotel is outside Sunny Beach.',
    whyWorks: 'The route builds energy in stages instead of jumping straight into the loudest beach-club zone.',
    flowNote: 'Keep the group moving in one direction and avoid late-night improvising around transport.',
    cardHint: 'For groups who want a direct night with fewer transfers.',
    steps: [
      'Eat before the night gets complicated.',
      'Move into the beach-bar rhythm while the group is still together.',
      'Use Cacao as the loud peak, not the first stop.',
      'End near food and a known way back.',
    ],
    metrics: {
      walkability: { label: 'Walkability', value: 62, note: 'Works if based nearby' },
      time: { label: 'Time needed', value: 82, note: 'Evening into late night' },
      friction: { label: 'Transfer friction', value: 66, note: 'Return planning matters' },
      sunset: { label: 'Sunset value', value: 30, note: 'Not the point of this route' },
      family: { label: 'Family fit', value: 18, note: 'Adult/group route' },
      nightlife: { label: 'Nightlife link', value: 96, note: 'The strongest nightlife route' },
      photo: { label: 'Photo value', value: 44, note: 'Atmosphere over viewpoints' },
      crowd: { label: 'Crowd risk', value: 88, note: 'Expect busy venues' },
    },
  },
  'chill-day-in-sveti-vlas': {
    mood: 'Marina calm',
    style: 'Slow coastal day',
    start: 'Sveti Vlas Beach',
    warning: 'Treat Marina Dinevi as the evening finish, not the starting point.',
    whyWorks: 'It starts with quieter water, then gradually adds polish, views and dinner without turning into a resort crawl.',
    flowNote: 'Arrive after the harshest sun and let the route become dinner naturally.',
    cardHint: 'Best when you want softer water, views and marina food.',
    steps: [
      'Begin with a calmer swim away from central resort noise.',
      'Walk into the marina after the beach, not before.',
      'Use the viewpoint as the slow transition into evening.',
      'Finish with dinner while the marina lights come on.',
    ],
    metrics: {
      walkability: { label: 'Walkability', value: 66, note: 'Good once you are there' },
      time: { label: 'Time needed', value: 70, note: 'Half day can stretch easily' },
      friction: { label: 'Transfer friction', value: 58, note: 'Check return timing' },
      sunset: { label: 'Sunset value', value: 86, note: 'One of the stronger sunset reads' },
      family: { label: 'Family fit', value: 72, note: 'Gentler pace' },
      nightlife: { label: 'Nightlife link', value: 42, note: 'Dinner energy, not club energy' },
      photo: { label: 'Photo value', value: 82, note: 'Marina and bay views' },
      crowd: { label: 'Crowd risk', value: 44, note: 'Usually more controlled' },
    },
  },
  'history-walk-in-nessebar': {
    mood: 'Old-town walk',
    style: 'Slow history loop',
    start: 'Nessebar approach',
    warning: 'Nessebar is best as a slower walk, not a quick checkbox stop.',
    whyWorks: 'It keeps the practical arrival separate from the atmospheric old-town loop, which makes the visit calmer and more memorable.',
    flowNote: 'Avoid the harshest crowded window and let side streets do the work.',
    cardHint: 'For photos, stone streets and a slower day off the strip.',
    steps: [
      'Solve parking or arrival before the old-town mood begins.',
      'Pause near the pier to shift from transport into walking mode.',
      'Let the old lanes slow the pace instead of rushing landmarks.',
      'End at the sea wall when the light is softer.',
    ],
    metrics: {
      walkability: { label: 'Walkability', value: 88, note: 'Excellent once inside the old town' },
      time: { label: 'Time needed', value: 54, note: 'Three to four hours is enough' },
      friction: { label: 'Transfer friction', value: 72, note: 'Traffic can change the day' },
      sunset: { label: 'Sunset value', value: 84, note: 'Golden hour is the prize' },
      family: { label: 'Family fit', value: 58, note: 'Good if the walk stays slow' },
      nightlife: { label: 'Nightlife link', value: 24, note: 'Not a party bridge' },
      photo: { label: 'Photo value', value: 94, note: 'The most photogenic route' },
      crowd: { label: 'Crowd risk', value: 78, note: 'Seasonal crowds are real' },
    },
  },
  'family-beach-day': {
    mood: 'Low-friction family day',
    style: 'Simple beach rhythm',
    start: 'North Beach',
    warning: 'Choose one beach zone and avoid crossing the resort repeatedly with tired people.',
    whyWorks: 'It keeps the day predictable: quieter start, shaded break, central access, then an easy promenade finish.',
    flowNote: 'Protect the middle of the day and keep the route practical rather than ambitious.',
    cardHint: 'For shade, simple logistics and fewer moving parts.',
    steps: [
      'Start north for a softer beach rhythm.',
      'Build in a shaded lunch stop before energy dips.',
      'Use Central Sunny Beach only when convenience helps.',
      'End with a short promenade, not a forced extra transfer.',
    ],
    metrics: {
      walkability: { label: 'Walkability', value: 76, note: 'Good if kept in one zone' },
      time: { label: 'Time needed', value: 86, note: 'A full but simple day' },
      friction: { label: 'Transfer friction', value: 34, note: 'Low if you resist over-moving' },
      sunset: { label: 'Sunset value', value: 54, note: 'Nice, but not essential' },
      family: { label: 'Family fit', value: 94, note: 'The safest family pick' },
      nightlife: { label: 'Nightlife link', value: 20, note: 'Not built for late-night plans' },
      photo: { label: 'Photo value', value: 46, note: 'Memory route, not photo route' },
      crowd: { label: 'Crowd risk', value: 56, note: 'Manageable with an early start' },
    },
  },
  'sunset-and-dinner-route': {
    mood: 'Golden-hour dinner',
    style: 'Polished evening',
    start: 'Sveti Vlas Viewpoint',
    warning: 'Use taxi or car between areas; the coast looks close on the map but moves differently in summer.',
    whyWorks: 'It turns the evening into a sequence: viewpoint, marina glow, dinner, then a quiet finish instead of a rushed transfer.',
    flowNote: 'Start early enough that sunset does not happen while you are still in transit.',
    cardHint: 'For couples or friends who want views before dinner.',
    steps: [
      'Start high enough to read the bay before dinner.',
      'Drop into Marina Dinevi while the light is still warm.',
      'Let dinner be the anchor rather than another stop to rush.',
      'Finish with a quiet drink instead of switching into a club route.',
    ],
    metrics: {
      walkability: { label: 'Walkability', value: 48, note: 'Needs planned movement' },
      time: { label: 'Time needed', value: 60, note: 'Compact evening if timed well' },
      friction: { label: 'Transfer friction', value: 70, note: 'Taxi timing matters' },
      sunset: { label: 'Sunset value', value: 96, note: 'The strongest sunset route' },
      family: { label: 'Family fit', value: 52, note: 'Better for adults or older kids' },
      nightlife: { label: 'Nightlife link', value: 38, note: 'Dinner and cocktails, not clubs' },
      photo: { label: 'Photo value', value: 88, note: 'Viewpoint plus marina light' },
      crowd: { label: 'Crowd risk', value: 46, note: 'Reservation timing helps' },
    },
  },
}

type LocalRoutesProps = {
  selectedRoute: string
  selectedStops: Place[]
  onSelectRoute: (routeId: string) => void
}

function MetricBar({ metric }: { metric: RouteMetric }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <p className="text-[0.82rem] font-bold text-[color:var(--ink)]">{metric.label}</p>
        <span className="font-mono text-[0.68rem] font-semibold text-[color:var(--sea-deep)]/62">{metric.value}/100</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[color:var(--muted)]">
        <motion.span
          className="block h-full rounded-full bg-[linear-gradient(90deg,var(--turquoise),var(--coral))]"
          initial={{ width: 0 }}
          animate={{ width: `${metric.value}%` }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        />
      </div>
      <p className="mt-1 text-xs leading-5 text-[color:var(--muted-foreground)]">{metric.note}</p>
    </div>
  )
}

function MetaChip({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-[1rem] border border-[color:var(--border)]/72 bg-white/72 px-3.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.68)]">
      <span className="flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/62">
        <Icon size={14} aria-hidden="true" />
        {label}
      </span>
      <span className="mt-1 block text-sm font-bold leading-5 text-[color:var(--ink)]">{value}</span>
    </div>
  )
}

function StoryboardStep({ stop, note, index, total }: { stop: string; note: string; index: number; total: number }) {
  const isFirst = index === 0
  const isLast = index === total - 1

  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.24, delay: index * 0.035 }}
      className="relative grid gap-3 rounded-[1.1rem] border border-[color:var(--border)]/68 bg-white/72 px-3.5 py-3 sm:grid-cols-[2.25rem_1fr]"
    >
      {!isLast && <span className="absolute left-[1.56rem] top-11 hidden h-[calc(100%+0.85rem)] w-px bg-[linear-gradient(180deg,var(--coral),rgba(32,199,189,0.42))] sm:block" aria-hidden="true" />}
      <span className={`relative z-10 grid size-9 place-items-center rounded-full border font-mono text-[0.72rem] font-bold ${
        isFirst
          ? 'border-[color:var(--sea-deep)] bg-[color:var(--sea-deep)] text-white'
          : isLast
            ? 'border-[color:var(--coral)] bg-[color:var(--coral)] text-white'
            : 'border-white bg-[color:var(--foam)] text-[color:var(--sea-deep)]'
      }`}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-2">
          <span className="font-serif text-lg leading-tight text-[color:var(--ink)]">{stop}</span>
          <span className="rounded-full bg-[color:var(--background)] px-2 py-0.5 text-[0.64rem] font-bold uppercase tracking-[0.1em] text-[color:var(--sea-deep)]/70">
            {isFirst ? 'Start' : isLast ? 'Finish' : 'Move'}
          </span>
        </span>
        <span className="mt-1.5 block text-sm leading-6 text-[color:var(--muted-foreground)]">{note}</span>
      </span>
    </motion.li>
  )
}

function RouteSelectorCard({ routeItem, index, isSelected, onSelect }: { routeItem: LocalRoute; index: number; isSelected: boolean; onSelect: () => void }) {
  const guide = routeGuides[routeItem.id]

  return (
    <motion.button
      type="button"
      variants={fadeUp}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      onClick={onSelect}
      data-active={isSelected}
      aria-pressed={isSelected}
      aria-label={`Select ${routeItem.title}`}
      className={`interactive-card active-rail group min-w-0 overflow-hidden rounded-[1.35rem] border p-0 text-left shadow-soft ${
        isSelected ? 'border-[color:var(--coral)]/56 bg-white/88 ring-2 ring-[color:var(--coral)]/14' : 'border-white/72 bg-white/64 hover:bg-white/78'
      }`}
    >
      <div className="route-cinema-strip border-b border-white/64 p-4">
        <div className="relative z-10 flex items-start justify-between gap-3">
          <span className="rounded-full bg-white/78 px-3 py-1 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)] shadow-sm">
            Route / {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`grid size-10 shrink-0 place-items-center rounded-full border border-white/72 transition ${
            isSelected ? 'bg-[color:var(--coral)] text-white shadow-coral' : 'bg-white/62 text-[color:var(--sea-deep)] group-hover:bg-[color:var(--turquoise)] group-hover:text-[color:var(--night)]'
          }`}>
            {isSelected ? <BadgeCheck size={18} aria-hidden="true" /> : <RouteIcon size={18} aria-hidden="true" />}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[color:var(--sea-deep)] px-3 py-1.5 text-[0.7rem] font-bold leading-none text-white">{routeItem.duration}</span>
          <span className="rounded-full border border-[color:var(--border)] bg-white/72 px-3 py-1.5 text-[0.7rem] font-bold leading-none text-[color:var(--sea-deep)]">{routeItem.bestTime}</span>
        </div>
        <h3 className="mt-4 font-serif text-[1.7rem] leading-tight text-[color:var(--ink)]">{routeItem.title}</h3>
        <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--sea-deep)]">{guide.mood} / {routeItem.area}</p>
        <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{guide.cardHint}</p>
        <div className="mt-4 rounded-[1rem] border border-[color:var(--border)]/70 bg-[color:var(--background)]/66 px-3 py-2.5">
          <p className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-[color:var(--sea-deep)]/62">Preview</p>
          <p className="mt-1.5 text-sm font-bold leading-6 text-[color:var(--ink)]">
            {routeItem.stops[0]} {'->'} {routeItem.stops[routeItem.stops.length - 1]}
          </p>
        </div>
      </div>
    </motion.button>
  )
}

export function LocalRoutes({ selectedRoute, selectedStops, onSelectRoute }: LocalRoutesProps) {
  const selectedRouteItem = routes.find((routeItem) => routeItem.id === selectedRoute) ?? routes[0]
  const selectedGuide = routeGuides[selectedRouteItem.id]
  const selectedIndex = routes.findIndex((routeItem) => routeItem.id === selectedRouteItem.id)

  return (
    <MotionSection id="routes" className="section-shell overflow-hidden bg-[linear-gradient(180deg,#eaf6f2_0%,#fff8e8_46%,#f6fbf8_100%)]">
      <div className="grain absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.76fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Local Routes</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              Cinematic routes for the kind of day you want.
            </h2>
          </div>
          <SectionIntro label="Itinerary lens">
            Pick a local itinerary by pace, transport, timing and the mistake you want to avoid before the coast gets busy.
          </SectionIntro>
        </motion.div>

        <motion.div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/72 bg-white/58 shadow-[0_32px_90px_rgba(9,58,82,0.13)] backdrop-blur" variants={fadeUp}>
          <div className="grid gap-0 xl:grid-cols-[minmax(0,1.12fr)_minmax(20rem,0.88fr)]">
            <AnimatePresence mode="wait">
              <motion.article
                key={selectedRouteItem.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.24 }}
                className="min-w-0 border-b border-[color:var(--border)]/70 bg-white/52 p-4 xl:border-b-0 xl:border-r"
              >
                <div className="route-cinema-hero rounded-[1.35rem] border border-white/68 p-4 text-white shadow-soft sm:p-5">
                  <div className="relative z-10 grid gap-5 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white/18 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                          Route / {String(selectedIndex + 1).padStart(2, '0')}
                        </span>
                        <span className="rounded-full bg-[color:var(--coral)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.11em] text-white shadow-coral">
                          {selectedGuide.mood}
                        </span>
                      </div>
                      <h3 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-[0.98] text-white sm:text-5xl">{selectedRouteItem.title}</h3>
                      <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-white/76">{selectedGuide.style} / start at {selectedGuide.start}</p>
                    </div>
                    <div className="rounded-[1.15rem] border border-white/20 bg-white/16 p-4 backdrop-blur">
                      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sand)]">Why this route works</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-white/86">{selectedGuide.whyWorks}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.35rem] border border-[color:var(--border)]/72 bg-white/82 p-4 shadow-soft sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">Route storyboard</p>
                      <p className="mt-1 text-sm leading-6 text-[color:var(--muted-foreground)]">{selectedGuide.flowNote}</p>
                    </div>
                    <span className="rounded-full bg-[color:var(--foam)] px-3 py-1.5 text-[0.72rem] font-bold text-[color:var(--sea-deep)]">{selectedRouteItem.stops.length} stops</span>
                  </div>
                  <ol className="mt-4 grid gap-3">
                    {selectedRouteItem.stops.map((stop, stopIndex) => (
                      <StoryboardStep key={stop} stop={stop} note={selectedGuide.steps[stopIndex] ?? selectedGuide.flowNote} index={stopIndex} total={selectedRouteItem.stops.length} />
                    ))}
                  </ol>
                </div>
              </motion.article>
            </AnimatePresence>

            <aside className="min-w-0 bg-[linear-gradient(180deg,rgba(223,246,237,0.58),rgba(255,255,255,0.62))] p-4">
              <div className="grid gap-2.5 sm:grid-cols-2">
                {([
                  ['Duration', selectedRouteItem.duration, Timer],
                  ['Best time', selectedRouteItem.bestTime, Clock3],
                  ['Area', selectedRouteItem.area, Compass],
                  ['Style', selectedGuide.style, Sparkles],
                ] satisfies [string, string, LucideIcon][]).map(([label, value, Icon]) => (
                  <MetaChip key={label} icon={Icon} label={label} value={value} />
                ))}
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/80 p-4 shadow-soft">
                <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
                  <AlertTriangle size={14} aria-hidden="true" />
                  Local warning
                </span>
                <p className="mt-2 text-sm font-medium leading-6 text-[color:var(--ink)]">{selectedGuide.warning}</p>
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/80 p-4 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Route indicators</p>
                  <span className="rounded-full bg-[color:var(--foam)] px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)]">Decision layer</span>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <MetricBar metric={selectedGuide.metrics.walkability} />
                  <MetricBar metric={selectedGuide.metrics.friction} />
                  <MetricBar metric={selectedGuide.metrics.sunset} />
                  <MetricBar metric={selectedGuide.metrics.crowd} />
                </div>
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/80 p-4 shadow-soft">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Practical read</p>
                <div className="mt-2.5 grid gap-2">
                  {([
                    [Footprints, 'Walkability', selectedGuide.metrics.walkability.note],
                    [Moon, 'Night link', selectedGuide.metrics.nightlife.note],
                    [Camera, 'Photo value', selectedGuide.metrics.photo.note],
                    [Users, 'Family fit', selectedGuide.metrics.family.note],
                  ] satisfies [LucideIcon, string, string][]).map(([Icon, label, note]) => (
                    <div key={label} className="flex gap-3 rounded-[1rem] bg-[color:var(--background)]/62 px-3 py-2">
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-white text-[color:var(--sea-deep)] shadow-sm">
                        <Icon size={14} aria-hidden="true" />
                      </span>
                      <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
                        <span className="font-bold text-[color:var(--ink)]">{label}:</span> {note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {selectedStops.length > 0 && (
                <div className="mt-3 rounded-[1.25rem] border border-[color:var(--turquoise)]/24 bg-[color:var(--foam)]/58 p-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
                  <span className="font-bold text-[color:var(--ink)]">Map variation ready:</span> {selectedStops.length} custom stop{selectedStops.length === 1 ? '' : 's'} from Map Preview can shape this into a lighter personal route.
                </div>
              )}
            </aside>
          </div>
        </motion.div>

        <motion.div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3" variants={staggerContainer}>
          {routes.map((routeItem, index) => (
            <RouteSelectorCard
              key={routeItem.id}
              routeItem={routeItem}
              index={index}
              isSelected={selectedRoute === routeItem.id}
              onSelect={() => onSelectRoute(routeItem.id)}
            />
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}
