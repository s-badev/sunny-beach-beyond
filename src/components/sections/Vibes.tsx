import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, BadgeCheck, Camera, Clock3, Coffee, Compass, Footprints, Landmark, MapPinned, Music, Route, Ship, Sparkles, Sunset, Umbrella, Users, Waves, type LucideIcon } from 'lucide-react'
import { vibes } from '../../data/vibes'
import type { Vibe } from '../../types'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionIntro } from '../ui/SectionIntro'
import { SectionLabel } from '../ui/SectionLabel'

type MoodMetricKey = 'energy' | 'calm' | 'walking' | 'nightlife' | 'family' | 'photo' | 'planning' | 'transport'

type MoodMetric = {
  label: string
  value: number
  note: string
}

type VibeRecommendation = {
  area: string
  start: string
  beach: string
  route: string
  bestTime: string
  avoidIf: string
  note: string
  guideShift: string
  whyWorks: string
  takeaway: string
  flow: string[]
  metrics: Record<MoodMetricKey, MoodMetric>
}

const iconMap: Record<string, LucideIcon> = {
  Camera,
  Coffee,
  Landmark,
  Music,
  Ship,
  Sunset,
  Umbrella,
  Users,
}

const vibeRecommendations: Record<string, VibeRecommendation> = {
  'beach-day': {
    area: 'North Sunny Beach',
    start: 'Central Sunny Beach',
    beach: 'North Sunny Beach',
    route: 'Family Beach Day',
    bestTime: 'Morning start, late promenade',
    avoidIf: 'you try to cross too many beach zones in one hot day',
    note: 'Start earlier, pick one beach zone, and save the promenade for late afternoon.',
    guideShift: 'Beach Day works best when the plan is simple: one beach zone, shade, and low-friction movement.',
    whyWorks: 'It gives you the resort without turning the day into a transfer puzzle.',
    takeaway: 'Best when the day stays simple: morning beach, light walk, late promenade.',
    flow: ['Central orientation', 'North beach base', 'Shade or lunch pause', 'Late promenade'],
    metrics: {
      energy: { label: 'Energy', value: 48, note: 'Easy daytime pace' },
      calm: { label: 'Calm', value: 70, note: 'Better away from the center' },
      walking: { label: 'Walking', value: 58, note: 'Short walks are enough' },
      nightlife: { label: 'Nightlife', value: 24, note: 'Not the focus' },
      family: { label: 'Family fit', value: 82, note: 'Simple and forgiving' },
      photo: { label: 'Photo value', value: 45, note: 'Beach memories, not viewpoints' },
      planning: { label: 'Planning', value: 56, note: 'Pick one zone early' },
      transport: { label: 'Transport', value: 34, note: 'Low if you stay nearby' },
    },
  },
  'party-night': {
    area: 'Sunny Beach',
    start: 'Cacao Beach Area',
    beach: 'South Sunny Beach',
    route: 'Party Night Route',
    bestTime: 'Dinner first, late peak',
    avoidIf: 'you have not decided how everyone gets back',
    note: 'Plan the return before the night starts; short summer distances can still feel long at 3am.',
    guideShift: 'Party Night needs a return plan before the evening starts.',
    whyWorks: 'It keeps the night pointed toward the loud zones while protecting the end of the route.',
    takeaway: 'Best when dinner, loud stops, late food and the return plan are decided in that order.',
    flow: ['Dinner near center', 'Beach bar warmup', 'Cacao or club zone', 'Food and return'],
    metrics: {
      energy: { label: 'Energy', value: 96, note: 'The loudest mood' },
      calm: { label: 'Calm', value: 12, note: 'Quiet is not the goal' },
      walking: { label: 'Walking', value: 56, note: 'Works if you stay central/south' },
      nightlife: { label: 'Nightlife', value: 98, note: 'Strongest match' },
      family: { label: 'Family fit', value: 10, note: 'Adult/group route' },
      photo: { label: 'Photo value', value: 38, note: 'Atmosphere over views' },
      planning: { label: 'Planning', value: 84, note: 'Return plan matters' },
      transport: { label: 'Transport', value: 76, note: 'Late travel friction' },
    },
  },
  'family-trip': {
    area: 'North Sunny Beach',
    start: 'Central Sunny Beach',
    beach: 'North Sunny Beach',
    route: 'Family Beach Day',
    bestTime: 'Morning start',
    avoidIf: 'you build a day with too many transfers and no shade plan',
    note: 'Keep food, shade, and walking distance simple instead of crossing the resort repeatedly.',
    guideShift: 'Family Trip should prioritize shade, easy food, and fewer transfers.',
    whyWorks: 'It reduces decision fatigue and keeps the day close to practical food, sand, and rest points.',
    takeaway: 'Best when shade, food and short walking distances come before variety.',
    flow: ['Easy start', 'North beach time', 'Shaded lunch', 'Short evening walk'],
    metrics: {
      energy: { label: 'Energy', value: 42, note: 'Low-stress day' },
      calm: { label: 'Calm', value: 74, note: 'North is kinder' },
      walking: { label: 'Walking', value: 46, note: 'Keep distances short' },
      nightlife: { label: 'Nightlife', value: 14, note: 'Not a late plan' },
      family: { label: 'Family fit', value: 96, note: 'Best family mood' },
      photo: { label: 'Photo value', value: 42, note: 'Casual memories' },
      planning: { label: 'Planning', value: 78, note: 'Shade and food matter' },
      transport: { label: 'Transport', value: 38, note: 'Avoid cross-resort hops' },
    },
  },
  'history-walk': {
    area: 'Nessebar',
    start: 'Old Nessebar',
    beach: 'Nessebar Beach',
    route: 'History Walk in Nessebar',
    bestTime: 'Morning or golden hour',
    avoidIf: 'you arrive at peak afternoon expecting empty streets',
    note: 'Go morning or golden hour if you want the old town to feel like a place, not a queue.',
    guideShift: 'History Walk works best when Nessebar is timed, not rushed.',
    whyWorks: 'It treats Nessebar as a slow walk with light and pauses, not a quick checkbox stop.',
    takeaway: 'Best when you protect the old-town walk from peak crowds and harsh midday light.',
    flow: ['Arrive with buffer', 'Pier or old lanes', 'Churches and sea walls', 'Golden-hour pause'],
    metrics: {
      energy: { label: 'Energy', value: 52, note: 'Slow but active' },
      calm: { label: 'Calm', value: 50, note: 'Depends on timing' },
      walking: { label: 'Walking', value: 88, note: 'Core of the mood' },
      nightlife: { label: 'Nightlife', value: 18, note: 'Not the point' },
      family: { label: 'Family fit', value: 54, note: 'Works if not rushed' },
      photo: { label: 'Photo value', value: 94, note: 'Best old-town light' },
      planning: { label: 'Planning', value: 82, note: 'Crowd timing matters' },
      transport: { label: 'Transport', value: 68, note: 'Roads can slow the day' },
    },
  },
  'romantic-sunset': {
    area: 'Sveti Vlas',
    start: 'Sveti Vlas Viewpoint',
    beach: 'Sveti Vlas Beach',
    route: 'Sunset & Dinner Route',
    bestTime: 'Golden hour into dinner',
    avoidIf: 'you leave the transfer so late that sunset happens in transit',
    note: 'Time the viewpoint first, then move down toward the marina once the light softens.',
    guideShift: 'Romantic Sunset depends more on timing and view direction than distance.',
    whyWorks: 'It turns the evening into a sequence: view, marina light, dinner, then a quiet finish.',
    takeaway: 'Best when the viewpoint comes before dinner and transport is solved before sunset.',
    flow: ['Viewpoint first', 'Marina walk', 'Waterfront dinner', 'Quiet drink'],
    metrics: {
      energy: { label: 'Energy', value: 38, note: 'Slow evening mood' },
      calm: { label: 'Calm', value: 78, note: 'Quieter than the strip' },
      walking: { label: 'Walking', value: 58, note: 'Short scenic movement' },
      nightlife: { label: 'Nightlife', value: 36, note: 'Dinner, not clubs' },
      family: { label: 'Family fit', value: 46, note: 'Better for adults' },
      photo: { label: 'Photo value', value: 90, note: 'Sunset is the value' },
      planning: { label: 'Planning', value: 74, note: 'Timing matters' },
      transport: { label: 'Transport', value: 64, note: 'Taxi may help' },
    },
  },
  'luxury-marina': {
    area: 'Sveti Vlas',
    start: 'Marina Dinevi',
    beach: 'Sveti Vlas Beach',
    route: 'Sunset & Dinner Route',
    bestTime: 'Late afternoon to evening',
    avoidIf: 'you want loud strip energy or a spontaneous club route',
    note: 'Treat it as a slower evening: marina walk, dinner, then cocktails rather than rushing stops.',
    guideShift: 'Luxury Marina is about a slower, polished evening rhythm in Sveti Vlas.',
    whyWorks: 'It centers the coast around boats, terraces, dinner pacing, and a calmer way to spend more.',
    takeaway: 'Best when the evening stays polished: marina first, dinner second, no rushed venue-hopping.',
    flow: ['Marina arrival', 'Waterfront walk', 'Dinner terrace', 'Cocktails or slow return'],
    metrics: {
      energy: { label: 'Energy', value: 34, note: 'Refined, not loud' },
      calm: { label: 'Calm', value: 82, note: 'Polished calm' },
      walking: { label: 'Walking', value: 52, note: 'Marina-scale walking' },
      nightlife: { label: 'Nightlife', value: 34, note: 'Cocktails, not clubs' },
      family: { label: 'Family fit', value: 52, note: 'Works for calmer groups' },
      photo: { label: 'Photo value', value: 78, note: 'Boats and evening light' },
      planning: { label: 'Planning', value: 66, note: 'Reservations help' },
      transport: { label: 'Transport', value: 58, note: 'Return timing still matters' },
    },
  },
  'chill-coffee': {
    area: 'Sveti Vlas',
    start: 'Marina Dinevi',
    beach: 'Sveti Vlas Beach',
    route: 'Chill Day in Sveti Vlas',
    bestTime: 'Morning or late afternoon',
    avoidIf: 'you choose the busiest strip when what you need is a reset',
    note: 'Use coffee as a pause between beach time and dinner, especially away from the loudest strips.',
    guideShift: 'Chill Coffee works when you need a reset away from the loudest beach paths.',
    whyWorks: 'It gives the day a pause: softer streets, lower noise, and a route that does not need to perform.',
    takeaway: 'Best when the goal is a reset, not another packed sightseeing loop.',
    flow: ['Slow arrival', 'Coffee pause', 'Short view or beach walk', 'Easy dinner option'],
    metrics: {
      energy: { label: 'Energy', value: 22, note: 'Lowest-pressure mood' },
      calm: { label: 'Calm', value: 88, note: 'Reset-friendly' },
      walking: { label: 'Walking', value: 46, note: 'Optional, short' },
      nightlife: { label: 'Nightlife', value: 18, note: 'Not a late route' },
      family: { label: 'Family fit', value: 66, note: 'Good for slow groups' },
      photo: { label: 'Photo value', value: 56, note: 'Small scenes and views' },
      planning: { label: 'Planning', value: 36, note: 'Easy to keep loose' },
      transport: { label: 'Transport', value: 46, note: 'Depends where you stay' },
    },
  },
  'photo-spots': {
    area: 'Nessebar',
    start: 'Nessebar Old Town Pier',
    beach: 'Nessebar Beach',
    route: 'History Walk in Nessebar',
    bestTime: 'Morning edge or golden hour',
    avoidIf: 'you rely on harsh midday light for old stone, sea walls, or marina views',
    note: 'Avoid flat midday light; old stone and marina views work better at the edges of the day.',
    guideShift: 'Photo Spots are better near golden hour than in harsh midday light.',
    whyWorks: 'It follows light first, then location: old town edges, viewpoints, water, and slower walking links.',
    takeaway: 'Best when you plan around light first and distance second.',
    flow: ['Start near water', 'Old-town corners', 'Sea wall or viewpoint', 'Final soft-light frame'],
    metrics: {
      energy: { label: 'Energy', value: 48, note: 'Walking with intent' },
      calm: { label: 'Calm', value: 46, note: 'Better off-peak' },
      walking: { label: 'Walking', value: 82, note: 'Move for angles' },
      nightlife: { label: 'Nightlife', value: 12, note: 'Daylight mood' },
      family: { label: 'Family fit', value: 44, note: 'Depends on patience' },
      photo: { label: 'Photo value', value: 98, note: 'The core reason' },
      planning: { label: 'Planning', value: 76, note: 'Light timing matters' },
      transport: { label: 'Transport', value: 62, note: 'Arrive before peak pressure' },
    },
  },
}

type VibesProps = {
  selectedVibe: string
  onSelectVibe: (vibeId: string) => void
}

function MetricBar({ metric }: { metric: MoodMetric }) {
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

function FlowTile({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-[1.05rem] border border-[color:var(--border)]/72 bg-white/72 px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.68)]">
      <span className="flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/62">
        <Icon size={14} aria-hidden="true" />
        {label}
      </span>
      <span className="mt-1.5 block text-sm font-bold leading-5 text-[color:var(--ink)]">{value}</span>
    </div>
  )
}

function VibeCard({ vibe, index, isSelected, onSelect }: { vibe: Vibe; index: number; isSelected: boolean; onSelect: () => void }) {
  const Icon = iconMap[vibe.iconName] ?? Compass
  const recommendation = vibeRecommendations[vibe.id]

  return (
    <motion.button
      key={vibe.id}
      type="button"
      variants={fadeUp}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      onClick={onSelect}
      data-active={isSelected}
      aria-pressed={isSelected}
      aria-label={`Select ${vibe.title}`}
      className={`interactive-card active-rail mood-card group min-w-0 overflow-hidden rounded-[1.25rem] border p-0 text-left shadow-soft ${
        isSelected ? 'border-[color:var(--coral)]/60 bg-white/86 ring-2 ring-[color:var(--coral)]/16' : 'border-white/72 bg-white/62 hover:bg-white/78'
      }`}
    >
      <div className="mood-card-strip border-b border-white/64 p-4">
        <div className="relative z-10 flex items-start justify-between gap-3">
          <span className="rounded-full bg-white/74 px-3 py-1 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)] shadow-sm">
            Mood / {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`grid size-10 shrink-0 place-items-center rounded-full border border-white/72 transition ${
            isSelected ? 'bg-[color:var(--coral)] text-white shadow-coral' : 'bg-white/62 text-[color:var(--sea-deep)] group-hover:bg-[color:var(--turquoise)] group-hover:text-[color:var(--night)]'
          }`}>
            {isSelected ? <BadgeCheck size={18} aria-hidden="true" /> : <Icon size={18} aria-hidden="true" />}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[color:var(--sea-deep)] px-3 py-1.5 text-[0.68rem] font-bold leading-none text-white">{recommendation.area}</span>
          <span className="rounded-full border border-[color:var(--border)] bg-white/72 px-3 py-1.5 text-[0.68rem] font-bold leading-none text-[color:var(--sea-deep)]">{recommendation.bestTime}</span>
        </div>
        <h3 className="mt-4 font-serif text-2xl leading-tight text-[color:var(--ink)]">{vibe.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{vibe.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {vibe.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/80 bg-white/62 px-2.5 py-1 text-[0.72rem] font-semibold text-[color:var(--sea-deep)]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}

export function Vibes({ selectedVibe, onSelectVibe }: VibesProps) {
  const selectedVibeItem = vibes.find((vibe) => vibe.id === selectedVibe) ?? vibes[0]
  const selectedRecommendation = vibeRecommendations[selectedVibeItem.id]
  const SelectedIcon = iconMap[selectedVibeItem.iconName] ?? Compass

  return (
    <MotionSection id="vibes" className="section-shell overflow-hidden bg-[linear-gradient(180deg,#f6fbf8_0%,#fff8e8_48%,#eaf6f2_100%)]">
      <div className="grain absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.76fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Vibes</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              Choose a coastal mood, get a day compass.
            </h2>
          </div>
          <SectionIntro label="Mood compass">
            Pick the kind of day you want. The guide turns it into an area, first stop, beach match, route, timing and local note.
          </SectionIntro>
        </motion.div>

        <motion.div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/72 bg-white/58 shadow-[0_32px_90px_rgba(9,58,82,0.13)] backdrop-blur" variants={fadeUp}>
          <div className="grid gap-0 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
            <AnimatePresence mode="wait">
              <motion.article
                key={selectedVibeItem.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.24 }}
                className="min-w-0 border-b border-[color:var(--border)]/70 bg-white/50 p-4 sm:p-5 xl:border-b-0 xl:border-r"
              >
                <div className="mood-compass-visual rounded-[1.35rem] border border-white/68 p-4 text-white shadow-soft sm:p-5">
                  <div className="relative z-10 grid gap-5 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-white/18 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                          Selected mood
                        </span>
                        <span className="grid size-10 place-items-center rounded-full border border-white/24 bg-white/18 text-white backdrop-blur">
                          <SelectedIcon size={18} aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-[0.98] text-white sm:text-5xl">{selectedVibeItem.title}</h3>
                      <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-white/76">{selectedRecommendation.bestTime} / {selectedRecommendation.area}</p>
                    </div>
                    <div className="rounded-[1.15rem] border border-white/20 bg-white/16 p-4 backdrop-blur">
                      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sand)]">Why this works</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-white/86">{selectedRecommendation.whyWorks}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 rounded-[1.35rem] border border-[color:var(--border)]/72 bg-white/82 p-4 shadow-soft">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">Recommendation flow</p>
                      <p className="mt-1 text-sm leading-6 text-[color:var(--muted-foreground)]">{selectedRecommendation.guideShift}</p>
                    </div>
                    <span className="rounded-full bg-[color:var(--foam)] px-3 py-1.5 text-[0.72rem] font-bold text-[color:var(--sea-deep)]">Day compass</span>
                  </div>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                    <FlowTile icon={MapPinned} label="Best area" value={selectedRecommendation.area} />
                    <FlowTile icon={Compass} label="First stop" value={selectedRecommendation.start} />
                    <FlowTile icon={Waves} label="Beach" value={selectedRecommendation.beach} />
                    <FlowTile icon={Route} label="Route" value={selectedRecommendation.route} />
                  </div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-4">
                    {selectedRecommendation.flow.map((step, index) => (
                      <div key={step} className="rounded-[1rem] border border-[color:var(--border)]/70 bg-[color:var(--background)]/66 px-3 py-2.5">
                        <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--sea-deep)]/62">Step {index + 1}</span>
                        <p className="mt-1 text-sm font-bold leading-5 text-[color:var(--ink)]">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <aside className="min-w-0 bg-[linear-gradient(180deg,rgba(223,246,237,0.58),rgba(255,255,255,0.62))] p-4 sm:p-5">
              <div className="rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/80 p-4 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Mood indicators</p>
                  <span className="rounded-full bg-[color:var(--foam)] px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)]">Fit read</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <MetricBar metric={selectedRecommendation.metrics.energy} />
                  <MetricBar metric={selectedRecommendation.metrics.calm} />
                  <MetricBar metric={selectedRecommendation.metrics.walking} />
                  <MetricBar metric={selectedRecommendation.metrics.planning} />
                </div>
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-[color:var(--coral)]/18 bg-[color:var(--coral-soft)]/26 p-4 shadow-soft">
                <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
                  <AlertTriangle size={14} aria-hidden="true" />
                  Avoid if
                </span>
                <p className="mt-2 text-sm font-medium leading-6 text-[color:var(--ink)]">{selectedRecommendation.avoidIf}</p>
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/80 p-4 shadow-soft">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Field note</p>
                <p className="mt-2 text-sm font-medium leading-6 text-[color:var(--muted-foreground)]">{selectedRecommendation.note}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-[1rem] bg-[color:var(--background)]/68 px-3 py-2">
                    <span className="flex items-center gap-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--sea-deep)]/62">
                      <Footprints size={13} aria-hidden="true" />
                      Transport
                    </span>
                    <p className="mt-1 text-sm font-bold text-[color:var(--ink)]">{selectedRecommendation.metrics.transport.value}/100 friction</p>
                  </div>
                  <div className="rounded-[1rem] bg-[color:var(--background)]/68 px-3 py-2">
                    <span className="flex items-center gap-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--sea-deep)]/62">
                      <Sparkles size={13} aria-hidden="true" />
                      Photo
                    </span>
                    <p className="mt-1 text-sm font-bold text-[color:var(--ink)]">{selectedRecommendation.metrics.photo.value}/100 value</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/80 p-4 shadow-soft">
                <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">
                  <Clock3 size={14} aria-hidden="true" />
                  Day timing
                </span>
                <p className="mt-2 text-sm font-bold leading-6 text-[color:var(--ink)]">{selectedRecommendation.bestTime}</p>
                <p className="mt-1.5 text-sm leading-6 text-[color:var(--muted-foreground)]">{selectedRecommendation.takeaway}</p>
              </div>
            </aside>
          </div>
        </motion.div>

        <motion.div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer}>
          {vibes.map((vibe, index) => (
            <VibeCard
              key={vibe.id}
              vibe={vibe}
              index={index}
              isSelected={selectedVibe === vibe.id}
              onSelect={() => onSelectVibe(vibe.id)}
            />
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}
