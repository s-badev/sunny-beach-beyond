import { AnimatePresence, motion } from 'framer-motion'
import {
  AlertTriangle,
  BadgeCheck,
  Camera,
  Compass,
  Footprints,
  MapPinned,
  Moon,
  Navigation,
  ShieldCheck,
  Sun,
  Users,
  Waves,
  type LucideIcon,
} from 'lucide-react'
import vlasMarinaImage from '../../assets/section-backgrounds/vlas-marina.png'
import { areas } from '../../data/areas'
import type { Area } from '../../types'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionBackground } from '../ui/SectionBackground'
import { SectionIntro } from '../ui/SectionIntro'
import { SectionLabel } from '../ui/SectionLabel'

const areaVisuals: Record<string, string> = {
  'Sunny Beach': 'area-visual-sunny',
  Nessebar: 'area-visual-nessebar',
  'Sveti Vlas': 'area-visual-sveti-vlas',
  Elenite: 'area-visual-elenite',
}

type AreaMetric = {
  label: string
  value: number
  note: string
}

type AreaGuide = {
  personality: string
  bestFor: string
  avoidIf: string
  localTip: string
  bestUse: string
  beachAccess: string
  nightlife: string
  transport: string
  family: string
  quietness: string
  firstMove: string
  route: string
  takeaway: string
  mapLabel: string
  marker: {
    x: string
    y: string
  }
  metrics: AreaMetric[]
}

const areaGuides: Record<string, AreaGuide> = {
  'sunny-beach': {
    personality: 'high-energy resort base',
    bestFor: 'first timers, easy beach days, nightlife access, groups who want everything nearby',
    avoidIf: 'you need quiet evenings, old-town texture, or a slow local pace',
    localTip: 'Treat north, center, and south Sunny Beach as different stays. The exact zone changes noise, walking time, and beach rhythm.',
    bestUse: 'Use it as the practical base when convenience matters more than atmosphere.',
    beachAccess: 'Very easy: broad sand and paid zones are close to most hotels.',
    nightlife: 'Highest concentration of late bars, clubs, and loud promenade energy.',
    transport: 'Simple inside the resort, but summer traffic can slow short hops.',
    family: 'Works best in quieter hotel pockets away from the loudest center streets.',
    quietness: 'Lowest in the center, better toward the edges.',
    firstMove: 'Check the hotel zone first, then choose beach time or night plans around that location.',
    route: 'Beach base -> promenade dinner -> central nightlife, or keep north/south edges for a calmer loop.',
    takeaway: 'Pick Sunny Beach when you want frictionless logistics and do not mind seasonal volume.',
    mapLabel: 'Resort strip',
    marker: { x: '46%', y: '54%' },
    metrics: [
      { label: 'Beach access', value: 94, note: 'easy sand reach' },
      { label: 'Nightlife', value: 98, note: 'main late zone' },
      { label: 'Quietness', value: 34, note: 'edge dependent' },
      { label: 'Transport friction', value: 42, note: 'traffic peaks' },
      { label: 'First-timer fit', value: 92, note: 'simple base' },
    ],
  },
  nessebar: {
    personality: 'historic sea-wall wander',
    bestFor: 'old streets, sea views, photos, golden-hour walks, one compact culture hit',
    avoidIf: 'you dislike crowds, stairs, uneven stone lanes, or slow peak-season foot traffic',
    localTip: 'Go early or near golden hour. Midday can flatten the magic and compress the lanes.',
    bestUse: 'Use it as a focused half-day or evening walk rather than a lazy beach-base substitute.',
    beachAccess: 'Good nearby, but the old town itself is more walking and viewpoints than sand time.',
    nightlife: 'Better for dinners and harbor drinks than loud late club routes.',
    transport: 'Close to Sunny Beach, but parking and old-town access need patience.',
    family: 'Great for curious families if the route stays short and the timing avoids heat.',
    quietness: 'Beautiful but rarely empty in season.',
    firstMove: 'Start at the old town edge, walk the sea wall, then choose a slow dinner lane.',
    route: 'Old gate -> church ruins -> sea-wall loop -> harbor dinner.',
    takeaway: 'Pick Nessebar for texture and memory, not for effortless resort logistics.',
    mapLabel: 'Old town edge',
    marker: { x: '59%', y: '71%' },
    metrics: [
      { label: 'Beach access', value: 62, note: 'nearby, not central' },
      { label: 'Photo value', value: 96, note: 'stone and sea' },
      { label: 'Walkability', value: 88, note: 'compact lanes' },
      { label: 'Transport friction', value: 66, note: 'parking pressure' },
      { label: 'Evening value', value: 84, note: 'dinner light' },
    ],
  },
  'sveti-vlas': {
    personality: 'polished marina coast',
    bestFor: 'bay views, calmer evenings, marina dinners, couples, quieter hotel rhythm',
    avoidIf: 'you want the loudest nightlife on foot or a fully spontaneous late return',
    localTip: 'Pair beach time with Marina Dinevi. It feels more complete than treating Vlas as only a hotel zone.',
    bestUse: 'Use it when you want a cleaner, more sea-facing base with easy evening polish.',
    beachAccess: 'Good, with smaller beach pockets and a more curated coast feel.',
    nightlife: 'Stylish and social, but less chaotic than central Sunny Beach.',
    transport: 'Close by map, slower by summer movement. Plan the return after dinner.',
    family: 'Good for families who prefer quieter evenings and neater surroundings.',
    quietness: 'Noticeably calmer than the main resort strip.',
    firstMove: 'Start with the beach, then move toward the marina before sunset.',
    route: 'Beach pocket -> marina walk -> terrace dinner -> bay-view nightcap.',
    takeaway: 'Pick Sveti Vlas when you want polish, views, and lower friction evenings.',
    mapLabel: 'Marina slope',
    marker: { x: '35%', y: '34%' },
    metrics: [
      { label: 'Beach access', value: 78, note: 'smaller pockets' },
      { label: 'Evening value', value: 90, note: 'marina views' },
      { label: 'Quietness', value: 74, note: 'calmer base' },
      { label: 'Transport friction', value: 58, note: 'return timing' },
      { label: 'Family fit', value: 82, note: 'neater rhythm' },
    ],
  },
  elenite: {
    personality: 'quiet northern retreat',
    bestFor: 'slower resort days, low-noise beach time, families who plan to stay put',
    avoidIf: 'you need frequent taxis, late-night choice, or flexible hopping between areas',
    localTip: 'Plan the return before you go. Elenite is calmer partly because movement is less casual.',
    bestUse: 'Use it as a deliberate quiet day, not as a base for covering every coastal stop.',
    beachAccess: 'Simple once you are there, with a tucked-away resort-edge feel.',
    nightlife: 'Limited. This is not the late-night choice.',
    transport: 'Highest friction of the four if you are moving in and out often.',
    family: 'Strong for planned family days and calmer resort rhythm.',
    quietness: 'The calmest of the set.',
    firstMove: 'Arrive with the day already shaped: beach, lunch, slow return.',
    route: 'Beach arrival -> long swim window -> relaxed lunch -> early return.',
    takeaway: 'Pick Elenite when the goal is less movement and more quiet coast.',
    mapLabel: 'Northern bay',
    marker: { x: '25%', y: '18%' },
    metrics: [
      { label: 'Beach access', value: 72, note: 'easy on arrival' },
      { label: 'Quietness', value: 92, note: 'lowest volume' },
      { label: 'Family fit', value: 86, note: 'planned days' },
      { label: 'Transport friction', value: 82, note: 'less flexible' },
      { label: 'Nightlife', value: 22, note: 'not the point' },
    ],
  },
}

const quickSignals: Array<{ label: keyof Pick<AreaGuide, 'beachAccess' | 'nightlife' | 'transport' | 'family' | 'quietness'>; icon: LucideIcon; title: string }> = [
  { label: 'beachAccess', icon: Waves, title: 'Beach access' },
  { label: 'nightlife', icon: Moon, title: 'Nightlife' },
  { label: 'transport', icon: Navigation, title: 'Transport' },
  { label: 'family', icon: Users, title: 'Family fit' },
  { label: 'quietness', icon: ShieldCheck, title: 'Quietness' },
]

type AreasProps = {
  selectedArea: string
  onSelectArea: (areaId: string) => void
}

function MetricBar({ metric }: { metric: AreaMetric }) {
  return (
    <div className="rounded-2xl border border-white/75 bg-white/62 p-3 shadow-[0_14px_34px_rgba(4,47,70,0.06)]">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-bold text-[color:var(--ink)]">{metric.label}</p>
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/62">{metric.note}</p>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-[color:var(--sand)]/70" aria-hidden="true">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[color:var(--turquoise)] to-[color:var(--coral)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${metric.value}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
      </div>
      <span className="sr-only">
        {metric.label}: {metric.value} out of 100, {metric.note}
      </span>
    </div>
  )
}

function SignalCard({ title, value, icon: Icon }: { title: string; value: string; icon: LucideIcon }) {
  return (
    <div className="rounded-2xl border border-[color:var(--border)]/70 bg-white/64 p-3">
      <div className="flex items-center gap-2 text-[color:var(--sea-deep)]">
        <Icon className="size-4" aria-hidden="true" />
        <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em]">{title}</span>
      </div>
      <p className="mt-2 text-sm font-semibold leading-5 text-[color:var(--ink)]">{value}</p>
    </div>
  )
}

function AreaSelectorCard({
  area,
  guide,
  index,
  isSelected,
  onSelect,
}: {
  area: Area
  guide: AreaGuide
  index: number
  isSelected: boolean
  onSelect: (areaId: string) => void
}) {
  return (
    <motion.button
      type="button"
      variants={fadeUp}
      onClick={() => onSelect(area.id)}
      aria-pressed={isSelected}
      aria-label={`Select ${area.name} area guide`}
      data-active={isSelected}
      className={`interactive-card active-rail group min-w-0 overflow-hidden rounded-[1.35rem] border bg-white/84 text-left shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--coral)] ${
        isSelected ? 'border-[color:var(--coral)]/65 bg-white ring-2 ring-[color:var(--coral)]/16' : 'border-white/70 hover:border-[color:var(--turquoise)]/45'
      }`}
    >
      <div className={`area-card-strip relative h-24 overflow-hidden ${areaVisuals[area.name]}`}>
        <div className="absolute inset-0 grain opacity-28" aria-hidden="true" />
        <div className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
          Area {String(index + 1).padStart(2, '0')}
        </div>
        {isSelected && (
          <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[color:var(--ink)]/72 px-2.5 py-1 text-xs font-bold text-white backdrop-blur">
            <BadgeCheck className="size-3.5" aria-hidden="true" />
            Active
          </div>
        )}
      </div>
      <div className="p-4 sm:p-5">
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">{guide.personality}</p>
        <h3 className="mt-2 font-serif text-2xl text-[color:var(--ink)]">{area.name}</h3>
        <p className="mt-1 font-semibold text-[color:var(--sea-deep)]">{area.subtitle}</p>
        <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{area.description}</p>
        <div className="mt-4 grid gap-2">
          <p className="rounded-2xl border border-white/80 bg-white/64 px-3 py-2 text-sm leading-5 text-[color:var(--ink)]">
            <span className="block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[color:var(--sea-deep)]/62">Best for</span>
            <span className="mt-1 block font-bold">{guide.bestFor}</span>
          </p>
          <p className="rounded-2xl border border-[color:var(--sand)]/80 bg-[color:var(--sand)]/28 px-3 py-2 text-sm leading-5 text-[color:var(--ink)]">
            <span className="block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[color:var(--coral)]">Avoid if</span>
            <span className="mt-1 block font-semibold">{guide.avoidIf}</span>
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {area.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[color:var(--border)] bg-white/54 px-3 py-1 text-xs font-bold text-[color:var(--sea-deep)]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}

export function Areas({ selectedArea, onSelectArea }: AreasProps) {
  const selectedAreaItem = areas.find((area) => area.id === selectedArea) ?? areas[0]
  const selectedGuide = areaGuides[selectedAreaItem.id]
  const selectedIndex = areas.findIndex((area) => area.id === selectedAreaItem.id)

  return (
    <MotionSection id="areas" className="section-shell overflow-hidden bg-[color:var(--foam)]/45">
      <SectionBackground
        image={vlasMarinaImage}
        position="center 44%"
        imageClassName="opacity-78 saturate-[1.1] contrast-[1.03]"
        overlay="bg-[linear-gradient(180deg,rgba(223,246,237,0.54)_0%,rgba(246,251,248,0.24)_44%,rgba(223,246,237,0.52)_100%),linear-gradient(105deg,rgba(255,255,255,0.56),rgba(255,255,255,0.12)_48%,rgba(255,248,232,0.36)),radial-gradient(circle_at_76%_16%,rgba(255,255,255,0.28),transparent_18rem)]"
      />
      <div className="absolute -right-32 top-16 size-96 rounded-full bg-[color:var(--turquoise)]/18 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-36 bottom-8 size-80 rounded-full bg-[color:var(--sand)]/42 blur-3xl" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Areas</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              Choose the right coast, not just the nearest hotel.
            </h2>
          </div>
          <SectionIntro label="Decision guide">
            Sunny Beach, Nessebar, Sveti Vlas, and Elenite may sit close together, but each one changes the whole rhythm of a trip. Use this area guide to compare beach access, nightlife, transport, quietness, and first-day fit before choosing where to stay.
          </SectionIntro>
        </motion.div>

        <motion.div className="mt-10 overflow-hidden rounded-[2rem] border border-white/76 bg-white/54 p-3 shadow-soft backdrop-blur md:p-4" variants={fadeUp}>
          <div className="grid gap-4 xl:grid-cols-[1.48fr_0.92fr] xl:items-stretch">
            <div className="grid min-w-0 gap-4 lg:grid-cols-[0.8fr_1fr]">
              <div className="area-zone-map relative min-h-[25rem] overflow-hidden rounded-[1.55rem] border border-white/55 bg-[color:var(--sea-deep)] text-white shadow-[0_24px_60px_rgba(4,47,70,0.18)] sm:min-h-[28rem] lg:min-h-full">
                <div className="absolute left-5 top-5 z-10 rounded-full border border-white/24 bg-white/18 px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                  Coastal decision map
                </div>
                <div className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl border border-white/20 bg-[color:var(--ink)]/38 p-4 backdrop-blur-md">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/72">Selected zone</p>
                  <h3 className="mt-1 font-serif text-3xl leading-none text-white">{selectedAreaItem.name}</h3>
                  <p className="mt-2 max-w-[18rem] text-sm font-medium leading-6 text-white/82">{selectedGuide.mapLabel}: {selectedGuide.personality}</p>
                </div>
                <div className="absolute inset-y-10 left-[22%] z-[1] w-[38%] rounded-[55%] border-r border-white/32 bg-white/12 blur-[0.2px]" aria-hidden="true" />
                <div className="absolute left-[38%] top-[12%] z-[2] h-[70%] w-px rotate-[17deg] bg-gradient-to-b from-white/18 via-white/50 to-white/12" aria-hidden="true" />
                <div className="absolute left-[28%] top-[20%] z-[2] h-[52%] w-px rotate-[31deg] bg-[color:var(--coral)]/58 shadow-[0_0_22px_rgba(240,111,97,0.28)]" aria-hidden="true" />
                {areas.map((area, index) => {
                  const guide = areaGuides[area.id]
                  const isActive = area.id === selectedAreaItem.id

                  return (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => onSelectArea(area.id)}
                      aria-label={`Show ${area.name} on the area map`}
                      data-active={isActive}
                      className="area-map-marker absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/55 bg-white/82 p-1.5 text-[color:var(--sea-deep)] shadow-[0_12px_28px_rgba(4,47,70,0.24)] transition hover:-translate-y-[55%] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white data-[active=true]:border-[color:var(--coral)] data-[active=true]:bg-[color:var(--coral)] data-[active=true]:text-white data-[active=true]:shadow-[0_0_0_8px_rgba(255,255,255,0.18),0_18px_36px_rgba(4,47,70,0.3)]"
                      style={{ left: guide.marker.x, top: guide.marker.y }}
                    >
                      <MapPinned className="size-4" aria-hidden="true" />
                      <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.45rem)] min-w-max -translate-x-1/2 rounded-full bg-[color:var(--ink)]/78 px-2.5 py-1 text-[0.68rem] font-bold text-white opacity-90 backdrop-blur">
                        {index + 1}. {area.name}
                      </span>
                    </button>
                  )
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedAreaItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="panel-sheen min-w-0 rounded-[1.55rem] border border-[color:var(--turquoise)]/28 bg-white/78 p-5 shadow-[0_22px_54px_rgba(4,47,70,0.1)] sm:p-6"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[color:var(--turquoise)]/13 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]">
                      Area {String(selectedIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full bg-[color:var(--coral)]/12 px-3 py-1 text-xs font-bold text-[color:var(--coral)]">{selectedGuide.personality}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-4xl leading-tight text-[color:var(--ink)]">{selectedAreaItem.name}</h3>
                  <p className="mt-2 text-lg font-semibold text-[color:var(--sea-deep)]">{selectedAreaItem.subtitle}</p>
                  <p className="mt-4 leading-7 text-[color:var(--muted-foreground)]">{selectedAreaItem.description}</p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/80 bg-white/66 p-4">
                      <div className="flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/68">
                        <BadgeCheck className="size-4" aria-hidden="true" />
                        Best use
                      </div>
                      <p className="mt-2 text-sm font-bold leading-6 text-[color:var(--ink)]">{selectedGuide.bestUse}</p>
                    </div>
                    <div className="rounded-2xl border border-[color:var(--sand)]/80 bg-[color:var(--sand)]/28 p-4">
                      <div className="flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
                        <AlertTriangle className="size-4" aria-hidden="true" />
                        Avoid if
                      </div>
                      <p className="mt-2 text-sm font-bold leading-6 text-[color:var(--ink)]">{selectedGuide.avoidIf}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1.25rem] border border-[color:var(--border)]/70 bg-[color:var(--foam)]/70 p-4">
                    <div className="flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]">
                      <Compass className="size-4" aria-hidden="true" />
                      First move
                    </div>
                    <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--ink)]">{selectedGuide.firstMove}</p>
                    <p className="mt-3 border-t border-white/70 pt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{selectedGuide.route}</p>
                  </div>

                  <div className="mt-4 rounded-[1.25rem] border border-[color:var(--turquoise)]/22 bg-white/58 p-4">
                    <div className="flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
                      <Sun className="size-4" aria-hidden="true" />
                      Local takeaway
                    </div>
                    <p className="mt-2 text-sm font-bold leading-6 text-[color:var(--ink)]">{selectedGuide.takeaway}</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">{selectedGuide.localTip}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <aside className="min-w-0 rounded-[1.55rem] border border-white/78 bg-[color:var(--foam)]/76 p-5 shadow-[0_18px_44px_rgba(4,47,70,0.08)] sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--coral)]">Decision indicators</p>
                  <h3 className="mt-2 font-serif text-3xl text-[color:var(--ink)]">What this area is good at</h3>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/62 p-3 text-[color:var(--sea-deep)]">
                  <Footprints className="size-5" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {selectedGuide.metrics.map((metric) => (
                  <MetricBar key={metric.label} metric={metric} />
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                {quickSignals.map((signal) => (
                  <SignalCard key={signal.label} title={signal.title} value={selectedGuide[signal.label]} icon={signal.icon} />
                ))}
              </div>

              <div className="mt-4 rounded-[1.35rem] border border-[color:var(--sea-deep)]/10 bg-white/66 p-4">
                <div className="flex items-center gap-2 text-[color:var(--sea-deep)]">
                  <Camera className="size-4" aria-hidden="true" />
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em]">Decision rule</p>
                </div>
                <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--ink)]">
                  Choose by day rhythm first: beach access, evening plans, and return transport matter more here than pure map distance.
                </p>
              </div>
            </aside>
          </div>
        </motion.div>

        <motion.div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4" variants={staggerContainer}>
          {areas.map((area, index) => (
            <AreaSelectorCard
              key={area.id}
              area={area}
              guide={areaGuides[area.id]}
              index={index}
              isSelected={selectedAreaItem.id === area.id}
              onSelect={onSelectArea}
            />
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}
