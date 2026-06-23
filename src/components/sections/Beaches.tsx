import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, BadgeCheck, Clock3, Compass, Footprints, Gauge, Navigation, ShieldCheck, Sun, Users, Waves, type LucideIcon } from 'lucide-react'
import beachfrontImage from '../../assets/section-backgrounds/sunny-beach-beachfront.png'
import { beaches } from '../../data/beaches'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionBackground } from '../ui/SectionBackground'
import { SectionIntro } from '../ui/SectionIntro'
import { SectionLabel } from '../ui/SectionLabel'

type MetricKey = 'energy' | 'crowd' | 'access' | 'family' | 'walkability' | 'nightlife' | 'calm'

type BeachMetric = {
  label: string
  value: number
  note: string
}

type BeachAtlasDetail = {
  bestTime: string
  energy: string
  crowd: string
  transport: string
  avoidIf: string
  verdict: string
  localNote: string
  dayPlan: string
  nextMove: string
  useCase: string
  atlasLabel: string
  metrics: Record<MetricKey, BeachMetric>
}

const beachDetails: Record<string, BeachAtlasDetail> = {
  'central-sunny-beach': {
    bestTime: 'Morning for space, late afternoon for atmosphere',
    energy: 'High resort energy',
    crowd: 'Busy in peak season',
    transport: 'Easy on foot from central hotels',
    avoidIf: 'you want quiet sand or a low-stimulation day',
    verdict: 'Choose Central Sunny Beach when convenience matters more than silence.',
    localNote: 'Use it as the easy first-day base: food, loungers, promenade, and quick exits are all close.',
    dayPlan: 'Arrive before the loudest hours, swim early, then save the promenade for a late-afternoon walk.',
    nextMove: 'Keep the day simple: one central beach zone first, then use the promenade only after the heat softens.',
    useCase: 'First-time resort day',
    atlasLabel: 'Most practical',
    metrics: {
      energy: { label: 'Energy', value: 88, note: 'Bright, busy and social' },
      crowd: { label: 'Crowd', value: 86, note: 'Expect peak-season pressure' },
      access: { label: 'Access', value: 95, note: 'Very easy from central hotels' },
      family: { label: 'Family fit', value: 64, note: 'Convenient, but not calm' },
      walkability: { label: 'Walkability', value: 92, note: 'Promenade-friendly' },
      nightlife: { label: 'Nightlife', value: 70, note: 'Close to the louder resort rhythm' },
      calm: { label: 'Calm', value: 28, note: 'Not the quiet choice' },
    },
  },
  'north-sunny-beach': {
    bestTime: 'Morning to early afternoon',
    energy: 'Medium resort energy',
    crowd: 'Moderate by Sunny Beach standards',
    transport: 'Taxi or longer walk from the south',
    avoidIf: 'you need to stay close to south-side bars',
    verdict: 'North Sunny Beach works better when you want the resort without the loudest edge.',
    localNote: 'It still feels like Sunny Beach, just with more breathing room and easier pacing.',
    dayPlan: 'Start with a simple swim, keep lunch nearby, then move south only if you want more noise.',
    nextMove: 'Stay north for lunch if the day is working; only move south when the group actually wants more volume.',
    useCase: 'Resort day with space',
    atlasLabel: 'Softer resort',
    metrics: {
      energy: { label: 'Energy', value: 58, note: 'Active but less intense' },
      crowd: { label: 'Crowd', value: 52, note: 'Usually easier than the center' },
      access: { label: 'Access', value: 78, note: 'Simple if staying north' },
      family: { label: 'Family fit', value: 78, note: 'More forgiving pace' },
      walkability: { label: 'Walkability', value: 74, note: 'Good hotel-side walking' },
      nightlife: { label: 'Nightlife', value: 38, note: 'Less bar-focused' },
      calm: { label: 'Calm', value: 68, note: 'A better calm/resort balance' },
    },
  },
  'south-sunny-beach': {
    bestTime: 'Afternoon into evening',
    energy: 'High beach-bar energy',
    crowd: 'Busy near bars and routes to Nessebar',
    transport: 'Useful if continuing south',
    avoidIf: 'you want a purely calm family beach day',
    verdict: 'South Sunny Beach is useful when your day may continue toward Nessebar or beach bars.',
    localNote: 'Pick it when the beach is only part of the plan, not when you want the softest day.',
    dayPlan: 'Swim later, keep the evening flexible, then continue toward a bar cluster or Nessebar-side walk.',
    nextMove: 'Treat this as a bridge: beach first, then choose either a bar cluster or a Nessebar-side walk.',
    useCase: 'Beach to evening plan',
    atlasLabel: 'Best for momentum',
    metrics: {
      energy: { label: 'Energy', value: 86, note: 'Louder and more social' },
      crowd: { label: 'Crowd', value: 78, note: 'Busy around the southern pull' },
      access: { label: 'Access', value: 82, note: 'Good for south-side stays' },
      family: { label: 'Family fit', value: 45, note: 'Better for adults and groups' },
      walkability: { label: 'Walkability', value: 80, note: 'Useful route links' },
      nightlife: { label: 'Nightlife', value: 90, note: 'Closest beach-bar logic' },
      calm: { label: 'Calm', value: 32, note: 'Choose another beach for quiet' },
    },
  },
  'nessebar-beach': {
    bestTime: 'Morning or golden hour',
    energy: 'Medium visitor energy',
    crowd: 'Crowded around old-town visiting hours',
    transport: 'Allow extra time for the road',
    avoidIf: 'you are trying to avoid transport friction',
    verdict: 'Nessebar Beach is best when the beach is part of an old-town walk, not the whole day.',
    localNote: 'The reward is the combination: sand, views, old streets, and a more textured day.',
    dayPlan: 'Swim outside the busiest window, walk the old town, then pause for a view before heading back.',
    nextMove: 'Pair the swim with one old-town loop, then leave enough time for a slow return or dinner.',
    useCase: 'Beach plus history',
    atlasLabel: 'Best paired plan',
    metrics: {
      energy: { label: 'Energy', value: 62, note: 'Visitor flow, not party energy' },
      crowd: { label: 'Crowd', value: 72, note: 'Timing matters' },
      access: { label: 'Access', value: 58, note: 'Roads can slow the day' },
      family: { label: 'Family fit', value: 56, note: 'Works if timed carefully' },
      walkability: { label: 'Walkability', value: 88, note: 'Great with old-town walking' },
      nightlife: { label: 'Nightlife', value: 28, note: 'Not the loud route' },
      calm: { label: 'Calm', value: 48, note: 'Calmer only at the right hour' },
    },
  },
  'sveti-vlas-beach': {
    bestTime: 'Late afternoon',
    energy: 'Calm marina energy',
    crowd: 'Moderate',
    transport: 'Best with planned taxi or bus',
    avoidIf: 'you want the loudest resort energy nearby',
    verdict: 'Sveti Vlas Beach is calmer and better paired with marina evenings.',
    localNote: 'It is strongest as a slower day that turns into dinner, not as a high-volume beach party.',
    dayPlan: 'Arrive after the hottest window, swim slowly, then walk toward Marina Dinevi for sunset.',
    nextMove: 'Let the marina be the natural finish: swim, walk, sunset, then dinner without adding another transfer.',
    useCase: 'Swim then marina dinner',
    atlasLabel: 'Most polished',
    metrics: {
      energy: { label: 'Energy', value: 42, note: 'Relaxed and controlled' },
      crowd: { label: 'Crowd', value: 46, note: 'Usually manageable' },
      access: { label: 'Access', value: 62, note: 'Plan the return' },
      family: { label: 'Family fit', value: 76, note: 'Gentler than the strip' },
      walkability: { label: 'Walkability', value: 66, note: 'Good around the marina' },
      nightlife: { label: 'Nightlife', value: 42, note: 'Dinner energy, not club energy' },
      calm: { label: 'Calm', value: 78, note: 'A reliable softer choice' },
    },
  },
  'elenite-beach': {
    bestTime: 'Full planned day',
    energy: 'Quiet resort energy',
    crowd: 'Lower but resort-dependent',
    transport: 'Plan return transport first',
    avoidIf: 'you want flexible hopping between areas',
    verdict: 'Elenite Beach works best as a planned slow day, not a spontaneous quick hop.',
    localNote: 'The distance is part of the choice. Treat it as staying put, not a quick detour.',
    dayPlan: 'Commit to the bay, keep the day simple, and solve the return plan before you settle in.',
    nextMove: 'Do less here on purpose: beach, lunch, long pause, and a return plan before the evening gets awkward.',
    useCase: 'Slow bay day',
    atlasLabel: 'Quietest edge',
    metrics: {
      energy: { label: 'Energy', value: 28, note: 'Low and slow' },
      crowd: { label: 'Crowd', value: 36, note: 'Often quieter' },
      access: { label: 'Access', value: 42, note: 'Less flexible without planning' },
      family: { label: 'Family fit', value: 78, note: 'Good if logistics are solved' },
      walkability: { label: 'Walkability', value: 38, note: 'More stay-put than stroll' },
      nightlife: { label: 'Nightlife', value: 18, note: 'Not a nightlife base' },
      calm: { label: 'Calm', value: 90, note: 'The calmest atlas pick' },
    },
  },
}

type BeachesProps = {
  selectedBeach: string
  onSelectBeach: (beachId: string) => void
}

function MetricBar({ metric }: { metric: BeachMetric }) {
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

function DetailChip({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
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

export function Beaches({ selectedBeach, onSelectBeach }: BeachesProps) {
  const selectedBeachItem = beaches.find((beach) => beach.id === selectedBeach) ?? beaches[0]
  const selectedBeachDetails = beachDetails[selectedBeachItem.id]
  const selectedIndex = beaches.findIndex((beach) => beach.id === selectedBeachItem.id)
  const selectedMetrics = selectedBeachDetails.metrics

  return (
    <MotionSection id="beaches" className="section-shell overflow-hidden bg-[linear-gradient(180deg,#fff8e8_0%,#f3fbf8_46%,#eaf6f2_100%)]">
      <SectionBackground
        image={beachfrontImage}
        position="center 48%"
        imageClassName="opacity-88 saturate-[1.16] contrast-[1.04]"
        overlay="bg-[linear-gradient(180deg,rgba(255,248,232,0.5)_0%,rgba(243,251,248,0.2)_42%,rgba(234,246,242,0.52)_100%),linear-gradient(90deg,rgba(255,255,255,0.6),rgba(255,255,255,0.14)_46%,rgba(255,255,255,0.34)),radial-gradient(circle_at_18%_14%,rgba(255,248,226,0.3),transparent_18rem)]"
      />
      <div className="grain absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Beaches</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              A beach atlas for choosing the right day.
            </h2>
          </div>
          <SectionIntro label="Beach atlas">
            Compare the coast by mood, access, crowd, calm and what each shoreline is actually good for.
          </SectionIntro>
        </motion.div>

        <motion.div className="mt-7 overflow-hidden rounded-[1.75rem] border border-white/72 bg-white/58 shadow-[0_32px_90px_rgba(9,58,82,0.13)] backdrop-blur" variants={fadeUp}>
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.12fr)_minmax(20rem,0.88fr)]">
            <AnimatePresence mode="wait">
              <motion.article
                key={selectedBeachItem.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.24 }}
                className="min-w-0 border-b border-[color:var(--border)]/70 bg-white/52 p-3 sm:p-4 lg:border-b-0 lg:border-r"
              >
                <div className="grid min-h-full gap-3 xl:grid-cols-[0.78fr_1.22fr]">
                  <div className="beach-atlas-visual min-h-[15rem] rounded-[1.25rem] border border-white/68 p-4 text-white shadow-soft sm:min-h-[17rem]">
                    <div className="relative z-10 flex h-full min-h-[13rem] flex-col justify-between sm:min-h-[15rem]">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/72">Selected shoreline</p>
                          <p className="mt-2 w-fit rounded-full bg-white/18 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                            Beach / {String(selectedIndex + 1).padStart(2, '0')}
                          </p>
                        </div>
                        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/32 bg-white/20 backdrop-blur">
                          <Waves size={20} aria-hidden="true" />
                        </span>
                      </div>
                      <div>
                        <p className="w-fit rounded-full bg-[color:var(--coral)] px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.11em] text-white shadow-coral">
                          {selectedBeachDetails.atlasLabel}
                        </p>
                        <h3 className="mt-3 max-w-md font-serif text-3xl font-semibold leading-[0.98] text-white sm:text-4xl">{selectedBeachItem.name}</h3>
                        <p className="mt-2 max-w-md text-sm font-semibold leading-6 text-white/76">{selectedBeachItem.area} / {selectedBeachDetails.useCase}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/80 p-4 shadow-soft">
                    <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">Recommendation</p>
                    <p className="mt-2 font-serif text-[1.55rem] leading-tight text-[color:var(--ink)]">{selectedBeachDetails.verdict}</p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">{selectedBeachDetails.localNote}</p>

                    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      <div className="rounded-[1rem] border border-[color:var(--border)]/72 bg-[color:var(--foam)]/58 px-3.5 py-2.5">
                        <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/62">Best for</p>
                        <p className="mt-1.5 text-sm font-bold leading-6 text-[color:var(--ink)]">{selectedBeachItem.bestFor}</p>
                      </div>
                      <div className="rounded-[1rem] border border-[color:var(--coral)]/18 bg-[color:var(--coral-soft)]/30 px-3.5 py-2.5">
                        <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--coral)]">Avoid if</p>
                        <p className="mt-1.5 text-sm font-bold leading-6 text-[color:var(--ink)]">{selectedBeachDetails.avoidIf}</p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-[1rem] border border-[color:var(--border)]/72 bg-[color:var(--background)]/68 p-3.5">
                      <span className="inline-flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/62">
                        <ShieldCheck size={14} aria-hidden="true" />
                        How to use it
                      </span>
                      <p className="mt-1.5 text-sm font-medium leading-6 text-[color:var(--ink)]">{selectedBeachDetails.dayPlan}</p>
                    </div>

                    <div className="mt-3 rounded-[1rem] border border-[color:var(--turquoise)]/24 bg-[color:var(--foam)]/62 p-3.5">
                      <span className="inline-flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]">
                        <Compass size={14} aria-hidden="true" />
                        Good next move
                      </span>
                      <p className="mt-1.5 text-sm font-semibold leading-6 text-[color:var(--ink)]">{selectedBeachDetails.nextMove}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <aside className="min-w-0 bg-[linear-gradient(180deg,rgba(223,246,237,0.58),rgba(255,255,255,0.62))] p-3 sm:p-4">
              <div className="grid gap-2.5 sm:grid-cols-2">
                {([
                  ['Best time', selectedBeachDetails.bestTime, Clock3],
                  ['Energy', selectedBeachDetails.energy, Gauge],
                  ['Crowd', selectedBeachDetails.crowd, Users],
                  ['Access', selectedBeachDetails.transport, Navigation],
                ] satisfies [string, string, LucideIcon][]).map(([label, value, Icon]) => (
                  <DetailChip key={label} icon={Icon} label={label} value={value} />
                ))}
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/78 p-3.5 shadow-soft sm:p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Decision metrics</p>
                  <span className="rounded-full bg-[color:var(--foam)] px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)]">Beach fit</span>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <MetricBar metric={selectedMetrics.energy} />
                  <MetricBar metric={selectedMetrics.calm} />
                  <MetricBar metric={selectedMetrics.access} />
                  <MetricBar metric={selectedMetrics.family} />
                </div>
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/78 p-3.5 shadow-soft sm:p-4">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Practical read</p>
                <div className="mt-2.5 grid gap-2">
                  {([
                    [Footprints, 'Walkability', selectedMetrics.walkability.note],
                    [Sun, 'Calm factor', selectedMetrics.calm.note],
                    [Compass, 'After-beach plan', selectedMetrics.nightlife.note],
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
            </aside>
          </div>
        </motion.div>

        <motion.div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3" variants={staggerContainer}>
          {beaches.map((beach, index) => {
            const isSelected = selectedBeach === beach.id
            const detail = beachDetails[beach.id]

            return (
              <motion.button
                key={beach.id}
                type="button"
                variants={fadeUp}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => onSelectBeach(beach.id)}
                data-active={isSelected}
                aria-pressed={isSelected}
                aria-label={`Select ${beach.name}`}
                className={`interactive-card active-rail group min-w-0 overflow-hidden rounded-[1.35rem] border p-0 text-left shadow-soft ${
                  isSelected
                    ? 'border-[color:var(--turquoise)]/70 bg-white/88 ring-2 ring-[color:var(--turquoise)]/18'
                    : 'border-white/72 bg-white/64 hover:bg-white/78'
                }`}
              >
                <div className="beach-card-shore h-24 border-b border-white/66 p-4">
                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <span className="rounded-full bg-white/76 px-3 py-1 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)] shadow-sm">
                      Beach / {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`grid size-10 shrink-0 place-items-center rounded-full border border-white/72 transition ${
                      isSelected ? 'bg-[color:var(--turquoise)] text-[color:var(--night)] shadow-glow' : 'bg-white/62 text-[color:var(--sea-deep)] group-hover:bg-[color:var(--turquoise)] group-hover:text-[color:var(--night)]'
                    }`}>
                      {isSelected ? <BadgeCheck size={18} aria-hidden="true" /> : <Waves size={18} aria-hidden="true" />}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[color:var(--sea-deep)] px-3 py-1.5 text-[0.7rem] font-bold leading-none text-white">{detail.atlasLabel}</span>
                    <span className="rounded-full border border-[color:var(--border)] bg-white/72 px-3 py-1.5 text-[0.7rem] font-bold leading-none text-[color:var(--sea-deep)]">{beach.area}</span>
                  </div>

                  <h3 className="mt-4 font-serif text-[1.8rem] leading-tight text-[color:var(--ink)]">{beach.name}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[color:var(--sea-deep)]">{beach.bestFor}</p>
                  <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{beach.description}</p>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-[1rem] bg-[color:var(--foam)]/68 px-3 py-2">
                      <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--sea-deep)]/62">Energy</p>
                      <p className="mt-1 text-sm font-bold text-[color:var(--ink)]">{detail.energy}</p>
                    </div>
                    <div className="rounded-[1rem] bg-[color:var(--background)]/76 px-3 py-2">
                      <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--sea-deep)]/62">Calm</p>
                      <p className="mt-1 text-sm font-bold text-[color:var(--ink)]">{detail.metrics.calm.value}/100</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1rem] border border-[color:var(--coral)]/16 bg-[color:var(--coral-soft)]/24 px-3 py-2.5">
                    <span className="flex items-center gap-2 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-[color:var(--coral)]">
                      <AlertTriangle size={13} aria-hidden="true" />
                      Avoid if
                    </span>
                    <p className="mt-1.5 text-sm font-medium leading-6 text-[color:var(--ink)]">{detail.avoidIf}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {beach.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/80 bg-white/62 px-2.5 py-1 text-[0.72rem] font-semibold text-[color:var(--sea-deep)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </MotionSection>
  )
}
