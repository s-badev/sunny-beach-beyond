import { motion } from 'framer-motion'
import { Clock, Martini, Music, Utensils, Waves } from 'lucide-react'
import { nightlife } from '../../data/nightlife'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionLabel } from '../ui/SectionLabel'

const nightlifeIcons = [Waves, Music, Martini, Music, Utensils, Martini]

const nightPlans: Record<string, { startTime: string; bestArea: string; warning: string; afterHours: string }> = {
  'beach-bars': {
    startTime: 'Start around sunset.',
    bestArea: 'South and central Sunny Beach.',
    warning: 'Check where the quiet route back to your hotel is before drinks.',
    afterHours: 'Late snacks are easiest around the main pedestrian areas.',
  },
  'night-clubs': {
    startTime: 'Start after midnight.',
    bestArea: 'Central and south Sunny Beach.',
    warning: 'Plan return transport before the night gets loud.',
    afterHours: 'Late food is usually easier near the main pedestrian routes.',
  },
  'pool-parties': {
    startTime: 'Start in the afternoon.',
    bestArea: 'Sunny Beach hotel and party zones.',
    warning: 'Sun, drinks and transport make timing matter more than expected.',
    afterHours: 'Keep dinner simple nearby before moving into the night.',
  },
  'live-music': {
    startTime: 'Start after dinner.',
    bestArea: 'Central Sunny Beach, Nessebar or Sveti Vlas terraces.',
    warning: 'Venue mood changes quickly by night and season.',
    afterHours: 'Walkable food stops are easier than late transfers.',
  },
  'late-night-food': {
    startTime: 'Useful after midnight.',
    bestArea: 'Main resort center and busy pedestrian areas.',
    warning: 'Do not assume quieter edges have many late options.',
    afterHours: 'Keep it practical: quick food, water, and a direct route back.',
  },
  'chill-cocktail-bars': {
    startTime: 'Start at golden hour.',
    bestArea: 'Sveti Vlas marina or quieter hotel zones.',
    warning: 'Check return timing if staying outside Sveti Vlas.',
    afterHours: 'A slow walk beats trying to turn it into a club route.',
  },
}

type NightlifeProps = {
  selectedNightlife: string
  onSelectNightlife: (nightlifeId: string) => void
}

export function Nightlife({ selectedNightlife, onSelectNightlife }: NightlifeProps) {
  const selectedPlan = nightPlans[selectedNightlife]
  const selectedItem = nightlife.find((item) => item.id === selectedNightlife) ?? nightlife[0]

  return (
    <MotionSection id="nightlife" className="section-shell overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(32,199,189,0.2),transparent_24rem),linear-gradient(150deg,#071a2d,#04111f_64%,#082c46)] text-white">
      <div className="grain absolute inset-0 opacity-12" aria-hidden="true" />
      <div className="nightlife-glow absolute left-1/4 top-16 size-72 rounded-full bg-[color:var(--coral)]/12 blur-3xl" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]" variants={staggerContainer}>
          <motion.div variants={fadeUp}>
            <SectionLabel>Nightlife</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              The coast doesn&apos;t sleep until you do.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/68">
              From low-lit cocktail terraces to loud open-air clubs, the summer night changes fast from Sunny Beach to Sveti Vlas and Nessebar.
            </p>
          </motion.div>
          <motion.div className="grid gap-4 sm:grid-cols-2" variants={staggerContainer}>
            {nightlife.map((item, index) => {
              const Icon = nightlifeIcons[index] ?? Music

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.01 }}
                  onClick={() => onSelectNightlife(item.id)}
                  className={`glass-dark group rounded-[1.35rem] p-5 text-left shadow-soft transition hover:border-[color:var(--coral)]/45 hover:shadow-glow sm:p-6 ${
                    selectedNightlife === item.id ? 'border-[color:var(--coral)]/60 ring-2 ring-[color:var(--coral)]/18' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-full bg-[color:var(--coral)]/16 text-[color:var(--coral-soft)] transition group-hover:-translate-y-1 group-hover:bg-[color:var(--coral)]/28">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-white/9 px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-white/72">
                      <Clock size={13} aria-hidden="true" />
                      {item.bestTime}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2 leading-7 text-white/72">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[0.72rem] font-semibold text-white/76">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.button>
              )
            })}
          </motion.div>
        </motion.div>
        <motion.div
          key={selectedNightlife}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark mt-6 overflow-hidden rounded-[1.35rem] border-[color:var(--coral)]/24 shadow-glow"
        >
          <div className="grid gap-4 border-b border-white/10 bg-white/6 p-5 md:grid-cols-[0.72fr_1fr] sm:p-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--coral-soft)]">Night plan</p>
              <h3 className="mt-2 font-serif text-3xl leading-tight text-white">{selectedItem.title}</h3>
            </div>
            <p className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3 text-sm font-medium leading-6 text-white/72">
              {selectedItem.description}
            </p>
          </div>
          <div className="grid gap-3 p-5 text-sm leading-6 text-white/72 sm:grid-cols-2 lg:grid-cols-4 sm:p-6">
            {[
              ['Start time', selectedPlan.startTime],
              ['Best area', selectedPlan.bestArea],
              ['Route warning', selectedPlan.warning],
              ['After-hours', selectedPlan.afterHours],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral-soft)]/72">{label}</span>
                <span className="mt-1.5 block font-semibold leading-5 text-white">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
