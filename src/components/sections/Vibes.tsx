import { motion } from 'framer-motion'
import { Camera, Coffee, Compass, Landmark, Music, Ship, Sunset, Umbrella, Users, type LucideIcon } from 'lucide-react'
import { useState } from 'react'
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

const vibeRecommendations: Record<string, { area: string; start: string; route: string; note: string }> = {
  'beach-day': {
    area: 'North Sunny Beach',
    start: 'Central Sunny Beach',
    route: 'Family Beach Day',
    note: 'Start earlier, pick one beach zone, and save the promenade for late afternoon.',
  },
  'party-night': {
    area: 'Sunny Beach',
    start: 'Cacao Beach Area',
    route: 'Party Night Route',
    note: 'Plan the return before the night starts; short summer distances can still feel long at 3am.',
  },
  'family-trip': {
    area: 'North Sunny Beach',
    start: 'Central Sunny Beach',
    route: 'Family Beach Day',
    note: 'Keep food, shade, and walking distance simple instead of crossing the resort repeatedly.',
  },
  'history-walk': {
    area: 'Nessebar',
    start: 'Old Nessebar',
    route: 'History Walk in Nessebar',
    note: 'Go morning or golden hour if you want the old town to feel like a place, not a queue.',
  },
  'romantic-sunset': {
    area: 'Sveti Vlas',
    start: 'Sveti Vlas Viewpoint',
    route: 'Sunset & Dinner Route',
    note: 'Time the viewpoint first, then move down toward the marina once the light softens.',
  },
  'luxury-marina': {
    area: 'Sveti Vlas',
    start: 'Marina Dinevi',
    route: 'Sunset & Dinner Route',
    note: 'Treat it as a slower evening: marina walk, dinner, then cocktails rather than rushing stops.',
  },
  'chill-coffee': {
    area: 'Sveti Vlas',
    start: 'Marina Dinevi',
    route: 'Chill Day in Sveti Vlas',
    note: 'Use coffee as a pause between beach time and dinner, especially away from the loudest strips.',
  },
  'photo-spots': {
    area: 'Nessebar',
    start: 'Nessebar Old Town Pier',
    route: 'History Walk in Nessebar',
    note: 'Avoid flat midday light; old stone and marina views work better at the edges of the day.',
  },
}

export function Vibes() {
  const [selectedVibeId, setSelectedVibeId] = useState(vibes[0].id)
  const selectedVibe = vibes.find((vibe) => vibe.id === selectedVibeId) ?? vibes[0]
  const selectedRecommendation = vibeRecommendations[selectedVibe.id]

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
            const isSelected = selectedVibeId === vibe.id

            return (
              <motion.button
                key={vibe.id}
                type="button"
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedVibeId(vibe.id)}
                className={`glass group rounded-[1.35rem] p-5 text-left shadow-soft outline-none transition ${
                  isSelected ? 'border-[color:var(--coral)]/70 ring-2 ring-[color:var(--coral)]/20' : 'hover:border-[color:var(--turquoise)]/45'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-semibold uppercase tracking-[0.2em] ${isSelected ? 'text-[color:var(--sea-deep)]' : 'text-[color:var(--coral)]'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`grid size-11 place-items-center rounded-full text-white shadow-glow transition group-hover:scale-105 ${isSelected ? 'bg-[color:var(--coral)]' : 'bg-[color:var(--sea-deep)]'}`}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-[color:var(--ink)]">{vibe.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{vibe.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {vibe.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--sea-deep)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            )
          })}
        </motion.div>
        <motion.div
          key={selectedVibe.id}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="glass mt-6 grid gap-4 rounded-[1.35rem] border-[color:var(--coral)]/35 p-5 shadow-soft md:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--coral)]">For this vibe, start with</p>
            <h3 className="mt-3 font-serif text-3xl text-[color:var(--ink)]">{selectedVibe.title}</h3>
          </div>
          <div className="grid gap-3 text-sm leading-6 text-[color:var(--muted-foreground)] sm:grid-cols-3">
            <p>
              <span className="block font-bold text-[color:var(--ink)]">Area</span>
              {selectedRecommendation.area}
            </p>
            <p>
              <span className="block font-bold text-[color:var(--ink)]">First stop</span>
              {selectedRecommendation.start}
            </p>
            <p>
              <span className="block font-bold text-[color:var(--ink)]">Route</span>
              {selectedRecommendation.route}
            </p>
            <p className="sm:col-span-3">
              <span className="font-bold text-[color:var(--ink)]">Field note:</span> {selectedRecommendation.note}
            </p>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
