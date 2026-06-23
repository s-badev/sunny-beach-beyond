import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, BadgeCheck, Clock, Compass, Martini, Moon, Music, Navigation, Sparkles, Utensils, Waves, Zap, type LucideIcon } from 'lucide-react'
import nightlifeImage from '../../assets/section-backgrounds/sunny-beach-nightlife.png'
import { nightlife } from '../../data/nightlife'
import type { NightlifeItem } from '../../types'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionBackground } from '../ui/SectionBackground'
import { SectionIntro } from '../ui/SectionIntro'
import { SectionLabel } from '../ui/SectionLabel'

type NightMetricKey = 'energy' | 'crowd' | 'transport' | 'noise' | 'polish' | 'late'

type NightMetric = {
  label: string
  value: number
  note: string
}

type NightPlan = {
  startTime: string
  bestArea: string
  mood: string
  energyLabel: string
  crowdLabel: string
  transportNote: string
  warning: string
  whyWorks: string
  afterHours: string
  returnPlan: string
  flow: string[]
  flowNotes: string[]
  cardHint: string
  metrics: Record<NightMetricKey, NightMetric>
}

const nightlifeIcons: Record<string, LucideIcon> = {
  'beach-bars': Waves,
  'night-clubs': Music,
  'pool-parties': Zap,
  'live-music': Martini,
  'late-night-food': Utensils,
  'chill-cocktail-bars': Moon,
}

const nightPlans: Record<string, NightPlan> = {
  'beach-bars': {
    startTime: 'Sunset to late evening',
    bestArea: 'South and central Sunny Beach',
    mood: 'Beach-bar warmup',
    energyLabel: 'Medium-high',
    crowdLabel: 'Busy near the sand',
    transportNote: 'Walkable if you stay central or south; taxi back if your hotel sits outside the strip.',
    warning: 'Beach bars work best before the loudest part of the night starts.',
    whyWorks: 'It gives the night a coastal start: sunset, music, sand, and a simple exit before the club rhythm takes over.',
    afterHours: 'Late snacks are easiest around the main pedestrian areas.',
    returnPlan: 'Decide whether this stays a beach-bar night before the group drifts toward louder south-side routes.',
    flow: ['Sunset drink', 'Beach bar cluster', 'Choose louder or quieter', 'Direct walk or taxi back'],
    flowNotes: ['Start while the light is still soft.', 'Let the first venue set the volume.', 'Do not drift south by accident if you want a quiet night.', 'Keep the return route simple.'],
    cardHint: 'Best for casual drinks that can stay easy or become louder.',
    metrics: {
      energy: { label: 'Energy', value: 72, note: 'Social without starting at club level' },
      crowd: { label: 'Crowd', value: 70, note: 'Busy when sunset turns into evening' },
      transport: { label: 'Transport', value: 52, note: 'Easy if you plan the way back' },
      noise: { label: 'Noise', value: 70, note: 'Rises quickly after dark' },
      polish: { label: 'Polish', value: 48, note: 'Casual rather than refined' },
      late: { label: 'Late-night', value: 68, note: 'Can become a late route' },
    },
  },
  'night-clubs': {
    startTime: 'After midnight',
    bestArea: 'Central and south Sunny Beach',
    mood: 'Full-volume club night',
    energyLabel: 'Very high',
    crowdLabel: 'Peak crowd risk',
    transportNote: 'Plan return transport before the night gets loud, especially outside Sunny Beach.',
    warning: 'Cacao and south-side beach bars change the rhythm quickly - useful for party routes, not quiet nights.',
    whyWorks: 'It avoids wasting energy early and treats the club zone as the main event after food and a clear return plan.',
    afterHours: 'Late food is usually easier near the main pedestrian routes.',
    returnPlan: 'Set the way back before midnight. After the main event starts, transport decisions get slower and messier.',
    flow: ['Dinner first', 'Main strip warmup', 'Club or Cacao zone', 'Food near the route home'],
    flowNotes: ['Eat before the group starts splitting.', 'Choose one main direction instead of hopping randomly.', 'Make this the peak, not the first stop.', 'End near food, water and transport.'],
    cardHint: 'For groups who want the loudest Sunny Beach rhythm.',
    metrics: {
      energy: { label: 'Energy', value: 96, note: 'The loudest option here' },
      crowd: { label: 'Crowd', value: 90, note: 'Expect pressure around peak hours' },
      transport: { label: 'Transport', value: 76, note: 'Return planning matters' },
      noise: { label: 'Noise', value: 94, note: 'Not built for quiet' },
      polish: { label: 'Polish', value: 42, note: 'More intensity than elegance' },
      late: { label: 'Late-night', value: 98, note: 'Built around late hours' },
    },
  },
  'pool-parties': {
    startTime: 'Afternoon to early evening',
    bestArea: 'Sunny Beach hotel and party zones',
    mood: 'Day-party bridge',
    energyLabel: 'High',
    crowdLabel: 'Event-dependent',
    transportNote: 'Keep dinner nearby before deciding whether the night continues.',
    warning: 'Sun, drinks and transport make timing matter more than expected.',
    whyWorks: 'It lets groups get the party atmosphere early, then decide whether to continue or reset before the night.',
    afterHours: 'Keep dinner simple nearby before moving into the night.',
    returnPlan: 'Build in a reset after the event so dinner and transport do not become decisions made while tired.',
    flow: ['Afternoon event', 'Hydrate and reset', 'Simple dinner', 'Continue or call it'],
    flowNotes: ['Start earlier than a club night.', 'Build in a pause, not just another drink.', 'Avoid a long transfer while tired.', 'Choose the night only if the group still has energy.'],
    cardHint: 'Good for groups who want resort energy before club hours.',
    metrics: {
      energy: { label: 'Energy', value: 84, note: 'High before night even starts' },
      crowd: { label: 'Crowd', value: 74, note: 'Depends on the event' },
      transport: { label: 'Transport', value: 58, note: 'Timing can get awkward' },
      noise: { label: 'Noise', value: 78, note: 'Loud but earlier' },
      polish: { label: 'Polish', value: 36, note: 'Resort party, not refined evening' },
      late: { label: 'Late-night', value: 54, note: 'Optional continuation' },
    },
  },
  'live-music': {
    startTime: 'Evening',
    bestArea: 'Central Sunny Beach, Nessebar or Sveti Vlas terraces',
    mood: 'Relaxed atmosphere',
    energyLabel: 'Medium',
    crowdLabel: 'Moderate',
    transportNote: 'Prefer a walkable area after dinner instead of chasing venues across the coast.',
    warning: 'Live music and relaxed bars are better when you want atmosphere without committing to a club night.',
    whyWorks: 'It keeps the evening human-scaled: dinner, music, short walk, and no pressure to turn it into a late route.',
    afterHours: 'Walkable food stops are easier than late transfers.',
    returnPlan: 'Keep the evening in one area. A short walk back protects the relaxed mood better than a second transfer.',
    flow: ['Dinner', 'Live terrace', 'Short walk', 'Quiet finish'],
    flowNotes: ['Pick the area first, then the venue.', 'Let the music be the anchor.', 'Stay walkable if the night is low-key.', 'Do not force a second transfer.'],
    cardHint: 'For atmosphere without the commitment of a club night.',
    metrics: {
      energy: { label: 'Energy', value: 52, note: 'Warm, not overwhelming' },
      crowd: { label: 'Crowd', value: 46, note: 'Usually manageable' },
      transport: { label: 'Transport', value: 42, note: 'Low if you choose one area' },
      noise: { label: 'Noise', value: 48, note: 'Venue-dependent' },
      polish: { label: 'Polish', value: 64, note: 'Can feel nicely grown-up' },
      late: { label: 'Late-night', value: 38, note: 'Better as an earlier finish' },
    },
  },
  'late-night-food': {
    startTime: 'Late night',
    bestArea: 'Main resort center and busy pedestrian areas',
    mood: 'Practical reset',
    energyLabel: 'Low-medium',
    crowdLabel: 'Busy after venues close',
    transportNote: 'Keep it near the route home; quieter edges may not have many late options.',
    warning: 'Do not assume quieter edges have food late at night.',
    whyWorks: 'It makes the end of the night safer and simpler: food, water, orientation, then a direct way back.',
    afterHours: 'Keep it practical: quick food, water, and a direct route back.',
    returnPlan: 'Use food as the regroup point, then go home directly instead of adding a random extra stop.',
    flow: ['Exit the venue', 'Food and water', 'Re-group', 'Simple route back'],
    flowNotes: ['Leave before everyone scatters.', 'Choose practical over scenic.', 'Check who needs a taxi.', 'Do not add a new party stop by accident.'],
    cardHint: 'The useful late-night move, not the glamorous one.',
    metrics: {
      energy: { label: 'Energy', value: 36, note: 'Recovery mode' },
      crowd: { label: 'Crowd', value: 64, note: 'Busy around closing times' },
      transport: { label: 'Transport', value: 46, note: 'Works best on the way home' },
      noise: { label: 'Noise', value: 42, note: 'Street energy, not venue noise' },
      polish: { label: 'Polish', value: 24, note: 'Functional, not fancy' },
      late: { label: 'Late-night', value: 90, note: 'Only useful late' },
    },
  },
  'chill-cocktail-bars': {
    startTime: 'Sunset to evening',
    bestArea: 'Sveti Vlas marina or quieter hotel zones',
    mood: 'Polished slow evening',
    energyLabel: 'Calm',
    crowdLabel: 'Lower, reservation-dependent',
    transportNote: 'Check return timing if staying outside Sveti Vlas.',
    warning: 'Sveti Vlas evenings work best when you treat the marina as the finish.',
    whyWorks: 'It keeps the night elegant and readable: view, cocktail, conversation, then a quiet return instead of forcing a club route.',
    afterHours: 'A slow walk beats trying to turn it into a club route.',
    returnPlan: 'Check the return before the last drink. This plan works because it stays slow and intentional.',
    flow: ['Viewpoint or marina walk', 'Cocktails', 'Conversation', 'Quiet return'],
    flowNotes: ['Start with the light, not the drink.', 'Let the marina set the pace.', 'Keep the night small and intentional.', 'Return before transport becomes the problem.'],
    cardHint: 'For a polished evening with views and lower noise.',
    metrics: {
      energy: { label: 'Energy', value: 34, note: 'Slow and controlled' },
      crowd: { label: 'Crowd', value: 38, note: 'Usually easier than the strip' },
      transport: { label: 'Transport', value: 62, note: 'Return timing needs attention' },
      noise: { label: 'Noise', value: 26, note: 'The quietest night option' },
      polish: { label: 'Polish', value: 88, note: 'Best for refined evenings' },
      late: { label: 'Late-night', value: 34, note: 'Better before midnight' },
    },
  },
}

type NightlifeProps = {
  selectedNightlife: string
  onSelectNightlife: (nightlifeId: string) => void
}

function MetricBar({ metric }: { metric: NightMetric }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <p className="text-[0.82rem] font-bold text-white">{metric.label}</p>
        <span className="font-mono text-[0.68rem] font-semibold text-white/68">{metric.value}/100</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.span
          className="block h-full rounded-full bg-[linear-gradient(90deg,var(--coral),var(--turquoise))]"
          initial={{ width: 0 }}
          animate={{ width: `${metric.value}%` }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
        />
      </div>
      <p className="mt-1 text-xs leading-5 text-white/66">{metric.note}</p>
    </div>
  )
}

function InfoTile({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-[1rem] border border-white/10 bg-white/7 px-3.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <span className="flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--coral-soft)]/72">
        <Icon size={14} aria-hidden="true" />
        {label}
      </span>
      <span className="mt-1 block text-sm font-bold leading-5 text-white">{value}</span>
    </div>
  )
}

function FlowStep({ label, note, index, total }: { label: string; note: string; index: number; total: number }) {
  const isFirst = index === 0
  const isLast = index === total - 1

  return (
    <motion.li
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.24, delay: index * 0.035 }}
      className="relative grid gap-3 rounded-[1.05rem] border border-white/10 bg-white/7 px-3.5 py-3 sm:grid-cols-[2.15rem_1fr]"
    >
      {!isLast && <span className="absolute left-[1.5rem] top-11 hidden h-[calc(100%+0.8rem)] w-px bg-[linear-gradient(180deg,var(--coral),rgba(32,199,189,0.38))] sm:block" aria-hidden="true" />}
      <span className={`relative z-10 grid size-8 place-items-center rounded-full border font-mono text-[0.68rem] font-bold ${
        isFirst
          ? 'border-[color:var(--coral)] bg-[color:var(--coral)] text-white'
          : isLast
            ? 'border-[color:var(--turquoise)] bg-[color:var(--turquoise)] text-[color:var(--night)]'
            : 'border-white/18 bg-white/12 text-white'
      }`}>
        {index + 1}
      </span>
      <span>
        <span className="flex flex-wrap items-center gap-2">
          <span className="font-serif text-lg leading-tight text-white">{label}</span>
          <span className="rounded-full bg-white/9 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white/72">
            {isFirst ? 'Start' : isLast ? 'Return' : index === 1 ? 'Middle' : 'Late'}
          </span>
        </span>
        <span className="mt-1.5 block text-sm leading-6 text-white/72">{note}</span>
      </span>
    </motion.li>
  )
}

function NightlifeCard({ item, isSelected, onSelect }: { item: NightlifeItem; isSelected: boolean; onSelect: () => void }) {
  const Icon = nightlifeIcons[item.id] ?? Music
  const plan = nightPlans[item.id]

  return (
    <motion.button
      type="button"
      variants={fadeUp}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      onClick={onSelect}
      data-active={isSelected}
      aria-pressed={isSelected}
      aria-label={`Select ${item.title}`}
      className={`interactive-card active-rail group min-w-0 overflow-hidden rounded-[1.25rem] border p-0 text-left shadow-soft ${
        isSelected ? 'border-[color:var(--coral)]/62 bg-white/13 ring-2 ring-[color:var(--coral)]/20' : 'border-white/10 bg-white/7 hover:border-[color:var(--coral)]/38 hover:bg-white/10'
      }`}
    >
      <div className="nightlife-card-strip border-b border-white/10 p-4">
        <div className="relative z-10 flex items-start justify-between gap-3">
          <span className="rounded-full bg-white/12 px-3 py-1 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-white/76">
            {plan.mood}
          </span>
          <span className={`grid size-10 shrink-0 place-items-center rounded-full border transition ${
            isSelected ? 'border-[color:var(--coral)] bg-[color:var(--coral)] text-white shadow-coral' : 'border-white/18 bg-white/12 text-[color:var(--coral-soft)] group-hover:bg-[color:var(--turquoise)] group-hover:text-[color:var(--night)]'
          }`}>
            {isSelected ? <BadgeCheck size={18} aria-hidden="true" /> : <Icon size={18} aria-hidden="true" />}
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[color:var(--coral)] px-3 py-1.5 text-[0.68rem] font-bold leading-none text-white">{item.bestTime}</span>
          <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[0.68rem] font-bold leading-none text-white/74">{plan.energyLabel}</span>
        </div>
        <h3 className="mt-4 font-serif text-2xl leading-tight text-white">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/74">{plan.cardHint}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-[0.95rem] bg-white/7 px-3 py-2">
            <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/58">Crowd</p>
            <p className="mt-1 text-sm font-bold text-white">{plan.crowdLabel}</p>
          </div>
          <div className="rounded-[0.95rem] bg-white/7 px-3 py-2">
            <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/58">Noise</p>
            <p className="mt-1 text-sm font-bold text-white">{plan.metrics.noise.value}/100</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[0.72rem] font-semibold text-white/72">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}

export function Nightlife({ selectedNightlife, onSelectNightlife }: NightlifeProps) {
  const selectedItem = nightlife.find((item) => item.id === selectedNightlife) ?? nightlife[0]
  const selectedPlan = nightPlans[selectedItem.id]

  return (
    <MotionSection id="nightlife" className="section-shell overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(32,199,189,0.16),transparent_24rem),radial-gradient(circle_at_82%_20%,rgba(240,111,97,0.14),transparent_22rem),linear-gradient(150deg,#071a2d,#04111f_62%,#082c46)] text-white">
      <SectionBackground
        image={nightlifeImage}
        position="center 46%"
        imageClassName="opacity-95 saturate-[1.26] contrast-[1.08]"
        overlay="bg-[radial-gradient(circle_at_18%_20%,rgba(32,199,189,0.18),transparent_22rem),radial-gradient(circle_at_82%_16%,rgba(240,111,97,0.18),transparent_24rem),linear-gradient(180deg,rgba(3,17,31,0.62)_0%,rgba(3,17,31,0.42)_42%,rgba(4,17,31,0.72)_100%),linear-gradient(110deg,rgba(3,17,31,0.78),rgba(7,26,45,0.26)_48%,rgba(3,17,31,0.68))]"
      />
      <div className="grain absolute inset-0 opacity-12" aria-hidden="true" />
      <div className="nightlife-glow absolute left-1/4 top-16 size-72 rounded-full bg-[color:var(--coral)]/12 blur-3xl" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Nightlife</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              A cinematic evening guide for the coast after dark.
            </h2>
          </div>
          <SectionIntro label="Evening guide" tone="dark">
            Choose the night by mood, noise, transport and how you want the evening to end, from sunset cocktails to south-side club energy.
          </SectionIntro>
        </motion.div>

        <motion.div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/7 shadow-[0_32px_90px_rgba(0,0,0,0.28)] backdrop-blur" variants={fadeUp}>
          <div className="grid gap-0 xl:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)]">
            <AnimatePresence mode="wait">
              <motion.article
                key={selectedItem.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.24 }}
                className="min-w-0 border-b border-white/10 bg-white/5 p-4 xl:border-b-0 xl:border-r"
              >
                <div className="nightlife-cinema-hero rounded-[1.35rem] border border-white/14 p-4 shadow-glow sm:p-5">
                  <div className="relative z-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white/14 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/80 backdrop-blur">
                          Evening plan
                        </span>
                        <span className="rounded-full bg-[color:var(--coral)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.11em] text-white shadow-coral">
                          {selectedPlan.mood}
                        </span>
                      </div>
                      <h3 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-[0.98] text-white sm:text-5xl">{selectedItem.title}</h3>
                      <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-white/74">{selectedPlan.bestArea} / {selectedPlan.startTime}</p>
                    </div>
                    <div className="rounded-[1.15rem] border border-white/16 bg-white/12 p-4 backdrop-blur">
                      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral-soft)]">Why this works</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-white/84">{selectedPlan.whyWorks}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.35rem] border border-white/10 bg-white/8 p-4 shadow-soft sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral-soft)]">Night flow</p>
                      <p className="mt-1 text-sm leading-6 text-white/72">A compact rhythm for how the evening usually moves.</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1.5 text-[0.72rem] font-bold text-white/76">{selectedPlan.energyLabel}</span>
                  </div>
                  <ol className="mt-4 grid gap-3">
                    {selectedPlan.flow.map((step, index) => (
                      <FlowStep key={step} label={step} note={selectedPlan.flowNotes[index]} index={index} total={selectedPlan.flow.length} />
                    ))}
                  </ol>
                </div>
              </motion.article>
            </AnimatePresence>

            <aside className="min-w-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-4">
              <div className="grid gap-2.5 sm:grid-cols-2">
                {([
                  ['Best time', selectedPlan.startTime, Clock],
                  ['Area', selectedPlan.bestArea, Compass],
                  ['Mood', selectedPlan.mood, Sparkles],
                  ['Transport', selectedPlan.transportNote, Navigation],
                ] satisfies [string, string, LucideIcon][]).map(([label, value, Icon]) => (
                  <InfoTile key={label} icon={Icon} label={label} value={value} />
                ))}
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-[color:var(--coral)]/18 bg-[color:var(--coral)]/10 p-4 shadow-soft">
                <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral-soft)]">
                  <AlertTriangle size={14} aria-hidden="true" />
                  Local warning
                </span>
                <p className="mt-2 text-sm font-medium leading-6 text-white/86">{selectedPlan.warning}</p>
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-white/10 bg-white/7 p-4 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/66">Night indicators</p>
                  <span className="rounded-full bg-white/9 px-2.5 py-1 text-[0.68rem] font-bold text-white/68">Decision layer</span>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <MetricBar metric={selectedPlan.metrics.energy} />
                  <MetricBar metric={selectedPlan.metrics.crowd} />
                  <MetricBar metric={selectedPlan.metrics.transport} />
                  <MetricBar metric={selectedPlan.metrics.polish} />
                </div>
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-white/10 bg-white/7 p-4 shadow-soft">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/66">After-hours read</p>
                <p className="mt-2 text-sm font-medium leading-6 text-white/74">{selectedPlan.afterHours}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-[1rem] bg-white/7 px-3 py-2">
                    <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/58">Crowd</p>
                    <p className="mt-1 text-sm font-bold text-white">{selectedPlan.crowdLabel}</p>
                  </div>
                  <div className="rounded-[1rem] bg-white/7 px-3 py-2">
                    <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-white/58">Late value</p>
                    <p className="mt-1 text-sm font-bold text-white">{selectedPlan.metrics.late.value}/100</p>
                  </div>
                </div>
                <div className="mt-3 rounded-[1rem] border border-[color:var(--turquoise)]/18 bg-[color:var(--turquoise)]/10 px-3 py-2.5">
                  <span className="inline-flex items-center gap-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[color:var(--turquoise)]">
                    <Navigation size={13} aria-hidden="true" />
                    Return plan
                  </span>
                  <p className="mt-1.5 text-sm font-semibold leading-6 text-white/84">{selectedPlan.returnPlan}</p>
                </div>
              </div>
            </aside>
          </div>
        </motion.div>

        <motion.div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3" variants={staggerContainer}>
          {nightlife.map((item) => (
            <NightlifeCard
              key={item.id}
              item={item}
              isSelected={selectedItem.id === item.id}
              onSelect={() => onSelectNightlife(item.id)}
            />
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}
