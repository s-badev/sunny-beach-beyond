import { motion } from 'framer-motion'
import { ArrowRight, Camera, Coffee, Compass, Landmark, Music, Ship, Sparkles, Sunset, Umbrella, Users, type LucideIcon } from 'lucide-react'
import { vibes } from '../../data/vibes'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionLabel } from '../ui/SectionLabel'

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

const vibeRecommendations: Record<string, { area: string; start: string; beach: string; route: string; note: string; guideShift: string }> = {
  'beach-day': {
    area: 'North Sunny Beach',
    start: 'Central Sunny Beach',
    beach: 'North Sunny Beach',
    route: 'Family Beach Day',
    note: 'Start earlier, pick one beach zone, and save the promenade for late afternoon.',
    guideShift: 'The guide now prioritizes easy beach access, shade, and low-friction movement.',
  },
  'party-night': {
    area: 'Sunny Beach',
    start: 'Cacao Beach Area',
    beach: 'South Sunny Beach',
    route: 'Party Night Route',
    note: 'Plan the return before the night starts; short summer distances can still feel long at 3am.',
    guideShift: 'The guide now weights late transport, food stops, and south/central nightlife clusters.',
  },
  'family-trip': {
    area: 'North Sunny Beach',
    start: 'Central Sunny Beach',
    beach: 'North Sunny Beach',
    route: 'Family Beach Day',
    note: 'Keep food, shade, and walking distance simple instead of crossing the resort repeatedly.',
    guideShift: 'The guide now favors compact days, calmer zones, and fewer transfers.',
  },
  'history-walk': {
    area: 'Nessebar',
    start: 'Old Nessebar',
    beach: 'Nessebar Beach',
    route: 'History Walk in Nessebar',
    note: 'Go morning or golden hour if you want the old town to feel like a place, not a queue.',
    guideShift: 'The guide now shifts toward walkability, old-town timing, and photo-friendly light.',
  },
  'romantic-sunset': {
    area: 'Sveti Vlas',
    start: 'Sveti Vlas Viewpoint',
    beach: 'Sveti Vlas Beach',
    route: 'Sunset & Dinner Route',
    note: 'Time the viewpoint first, then move down toward the marina once the light softens.',
    guideShift: 'The guide now favors golden-hour views, dinner pacing, and quieter transfers.',
  },
  'luxury-marina': {
    area: 'Sveti Vlas',
    start: 'Marina Dinevi',
    beach: 'Sveti Vlas Beach',
    route: 'Sunset & Dinner Route',
    note: 'Treat it as a slower evening: marina walk, dinner, then cocktails rather than rushing stops.',
    guideShift: 'The guide now centers polished waterfront stops and a slower evening spend.',
  },
  'chill-coffee': {
    area: 'Sveti Vlas',
    start: 'Marina Dinevi',
    beach: 'Sveti Vlas Beach',
    route: 'Chill Day in Sveti Vlas',
    note: 'Use coffee as a pause between beach time and dinner, especially away from the loudest strips.',
    guideShift: 'The guide now suggests pauses, cafe-friendly areas, and lower-noise routes.',
  },
  'photo-spots': {
    area: 'Nessebar',
    start: 'Nessebar Old Town Pier',
    beach: 'Nessebar Beach',
    route: 'History Walk in Nessebar',
    note: 'Avoid flat midday light; old stone and marina views work better at the edges of the day.',
    guideShift: 'The guide now highlights viewpoints, morning/evening light, and scenic walking links.',
  },
}

type VibesProps = {
  selectedVibe: string
  onSelectVibe: (vibeId: string) => void
}

export function Vibes({ selectedVibe, onSelectVibe }: VibesProps) {
  const selectedVibeItem = vibes.find((vibe) => vibe.id === selectedVibe) ?? vibes[0]
  const selectedRecommendation = vibeRecommendations[selectedVibeItem.id]

  return (
    <MotionSection id="vibes" className="section-shell">
      <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(223,246,237,0.72),transparent)]" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="max-w-3xl" variants={fadeUp}>
          <SectionLabel>Vibes</SectionLabel>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
            What kind of day are you after?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-8 text-[color:var(--muted-foreground)]">
            Pick a mood - we&apos;ll match it with neighbourhoods, beaches, routes and local notes.
          </p>
        </motion.div>
        <motion.div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer}>
          {vibes.map((vibe, index) => {
            const Icon = iconMap[vibe.iconName] ?? Compass
            const isSelected = selectedVibe === vibe.id

            return (
              <motion.button
                key={vibe.id}
                type="button"
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => onSelectVibe(vibe.id)}
                data-active={isSelected}
                className={`interactive-card active-rail glass group rounded-[1.35rem] p-5 pl-6 text-left shadow-soft ${
                  isSelected ? 'border-[color:var(--coral)]/70 bg-white/78 ring-2 ring-[color:var(--coral)]/20' : 'hover:border-[color:var(--turquoise)]/45'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-semibold uppercase tracking-[0.2em] ${isSelected ? 'text-[color:var(--sea-deep)]' : 'text-[color:var(--coral)]'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`grid size-11 place-items-center rounded-full text-white shadow-glow transition group-hover:-translate-y-0.5 group-hover:scale-105 ${isSelected ? 'bg-[color:var(--coral)]' : 'bg-[color:var(--sea-deep)]'}`}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-[color:var(--ink)]">{vibe.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{vibe.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {vibe.tags.map((tag) => (
                    <span key={tag} className="interactive-control rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--sea-deep)] group-hover:bg-white/90">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[color:var(--coral)] opacity-0 transition group-hover:opacity-100 group-data-[active=true]:opacity-100">
                  <span>{isSelected ? 'Active mood' : 'Preview plan'}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </div>
              </motion.button>
            )
          })}
        </motion.div>
        <motion.div
          key={selectedVibeItem.id}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="panel-sheen glass mt-6 overflow-hidden rounded-[1.35rem] border-[color:var(--coral)]/35 shadow-soft"
        >
          <div className="grid gap-5 p-5 md:grid-cols-[0.72fr_1.28fr] sm:p-6">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-[color:var(--coral)]/10 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--coral)]">
                <Sparkles size={14} aria-hidden="true" />
                Recommended coast plan
              </p>
              <h3 className="mt-3 font-serif text-3xl text-[color:var(--ink)]">{selectedVibeItem.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">{selectedRecommendation.guideShift}</p>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Best area', selectedRecommendation.area],
                ['First stop', selectedRecommendation.start],
                ['Beach', selectedRecommendation.beach],
                ['Route', selectedRecommendation.route],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/70 bg-white/62 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                  <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">{label}</span>
                  <span className="mt-1.5 block text-sm font-bold leading-5 text-[color:var(--ink)]">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-white/58 bg-[linear-gradient(90deg,rgba(242,217,170,0.46),rgba(255,255,255,0.34))] px-5 py-4 sm:px-6">
            <p className="flex flex-col gap-2 text-sm font-medium leading-6 text-[color:var(--ink)] sm:flex-row sm:items-start">
              <span className="inline-flex w-fit rounded-full bg-white/58 px-3 py-1 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">Field note</span>
              <span className="text-[color:var(--muted-foreground)]">{selectedRecommendation.note}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
