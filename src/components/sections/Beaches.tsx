import { motion } from 'framer-motion'
import { Clock3, Navigation, ShieldCheck, Users, Waves, type LucideIcon } from 'lucide-react'
import { beaches } from '../../data/beaches'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionLabel } from '../ui/SectionLabel'

const beachTips: Record<string, string> = {
  'central-sunny-beach': 'Best when you want easy food, loungers, and a simple first day.',
  'north-sunny-beach': 'Pick this when you want Sunny Beach access with a little more breathing room.',
  'south-sunny-beach': 'Better later in the day if you plan to continue toward beach bars or Nessebar.',
  'nessebar-beach': 'Pair it with an old-town walk, but avoid the most crowded afternoon window.',
  'sveti-vlas-beach': 'Works well before a marina dinner or a slower sunset route.',
  'elenite-beach': 'Treat this as a planned quiet beach day, not a quick hop.',
}

const beachDetails: Record<string, { bestTime: string; energy: string; crowd: string; transport: string; verdict: string }> = {
  'central-sunny-beach': {
    bestTime: 'Morning for space, late afternoon for atmosphere',
    energy: 'High',
    crowd: 'Busy in peak season',
    transport: 'Easy on foot from central hotels',
    verdict: 'The practical first-day choice.',
  },
  'north-sunny-beach': {
    bestTime: 'Morning to early afternoon',
    energy: 'Medium',
    crowd: 'Moderate by Sunny Beach standards',
    transport: 'Taxi or longer walk from the south',
    verdict: 'Better breathing room without leaving the resort.',
  },
  'south-sunny-beach': {
    bestTime: 'Afternoon into evening',
    energy: 'High',
    crowd: 'Busy near bars and routes to Nessebar',
    transport: 'Useful if continuing south',
    verdict: 'Best when beach day becomes evening plans.',
  },
  'nessebar-beach': {
    bestTime: 'Morning or golden hour',
    energy: 'Medium',
    crowd: 'Crowded around old-town visiting hours',
    transport: 'Allow extra time for the road',
    verdict: 'Beach plus history, if timed well.',
  },
  'sveti-vlas-beach': {
    bestTime: 'Late afternoon',
    energy: 'Calm',
    crowd: 'Moderate',
    transport: 'Best with planned taxi or bus',
    verdict: 'A softer beach day before marina dinner.',
  },
  'elenite-beach': {
    bestTime: 'Full planned day',
    energy: 'Quiet',
    crowd: 'Lower but resort-dependent',
    transport: 'Plan return transport first',
    verdict: 'Slow and quiet, less spontaneous.',
  },
}

type BeachesProps = {
  selectedBeach: string
  onSelectBeach: (beachId: string) => void
}

export function Beaches({ selectedBeach, onSelectBeach }: BeachesProps) {
  const selectedBeachItem = beaches.find((beach) => beach.id === selectedBeach) ?? beaches[0]
  const selectedBeachDetails = beachDetails[selectedBeachItem.id]

  return (
    <MotionSection id="beaches" className="section-shell">
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Beaches</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              Six shorelines, six different days.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">
            A beach atlas for choosing by access, energy and the kind of summer day you actually want.
          </p>
        </motion.div>
        <motion.div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3" variants={staggerContainer}>
          {beaches.map((beach, index) => {
            const isSelected = selectedBeach === beach.id

            return (
              <motion.button
                key={beach.id}
                type="button"
                variants={fadeUp}
                whileTap={{ scale: 0.99 }}
                onClick={() => onSelectBeach(beach.id)}
                data-active={isSelected}
                className={`interactive-card active-rail glass group flex min-h-full flex-col rounded-[1.35rem] p-5 pl-6 text-left shadow-soft sm:p-6 ${
                  isSelected ? 'border-[color:var(--turquoise)]/60 bg-white/82 ring-2 ring-[color:var(--turquoise)]/16' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--coral)]">
                      Beach / {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 font-serif text-[1.7rem] leading-tight text-[color:var(--ink)]">{beach.name}</h3>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/70 bg-[color:var(--foam)] text-[color:var(--sea-deep)] transition group-hover:-translate-y-1 group-hover:bg-[color:var(--turquoise)] group-hover:text-white group-data-[active=true]:bg-[color:var(--turquoise)] group-data-[active=true]:text-white">
                    <Waves size={19} aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-4 w-fit rounded-full bg-[color:var(--sea-deep)] px-3 py-1.5 text-[0.72rem] font-bold leading-none text-white transition group-hover:bg-[color:var(--coral)]">
                  Best for / {beach.bestFor}
                </p>
                <p className="mt-4 flex-1 leading-7 text-[color:var(--muted-foreground)]">{beach.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 opacity-80 transition group-hover:opacity-100">
                  {beach.tags.map((tag) => (
                    <span key={tag} className="interactive-control rounded-full border border-white/80 bg-white/58 px-2.5 py-1 text-[0.72rem] font-semibold text-[color:var(--sea-deep)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            )
          })}
        </motion.div>
        <motion.div
          key={selectedBeachItem.id}
          className="panel-sheen mt-5 overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/76 shadow-soft"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid gap-4 border-b border-[color:var(--border)]/70 bg-[linear-gradient(90deg,rgba(223,246,237,0.78),rgba(255,255,255,0.46))] p-5 md:grid-cols-[0.72fr_1fr] sm:p-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--coral)]">Beach insight</p>
              <h3 className="mt-2 font-serif text-2xl text-[color:var(--ink)]">{selectedBeachItem.name}</h3>
              <p className="mt-2 text-sm font-semibold text-[color:var(--sea-deep)]">{selectedBeachItem.area}</p>
            </div>
            <div className="rounded-2xl border border-white/70 bg-white/64 px-4 py-3">
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Quick verdict</p>
              <p className="mt-1.5 text-sm font-medium leading-6 text-[color:var(--ink)]">{selectedBeachDetails.verdict} {beachTips[selectedBeachItem.id]}</p>
            </div>
          </div>
          <div className="grid gap-3 p-5 text-sm leading-6 text-[color:var(--muted-foreground)] sm:grid-cols-2 lg:grid-cols-4 sm:p-6">
            {([
              ['Best time', selectedBeachDetails.bestTime, Clock3],
              ['Energy', selectedBeachDetails.energy, Waves],
              ['Crowd', selectedBeachDetails.crowd, Users],
              ['Transport', selectedBeachDetails.transport, Navigation],
            ] satisfies [string, string, LucideIcon][]).map(([label, value, Icon]) => (
              <div key={label} className="rounded-2xl border border-[color:var(--border)]/75 bg-white/62 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                <span className="flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/60">
                  <Icon size={14} aria-hidden="true" />
                  {label}
                </span>
                <span className="mt-1.5 block font-bold leading-5 text-[color:var(--ink)]">{value}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-[color:var(--border)]/60 bg-[color:var(--foam)]/48 px-5 py-4 sm:px-6">
            <p className="flex flex-col gap-2 text-sm font-medium leading-6 text-[color:var(--ink)] sm:flex-row sm:items-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/72 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]">
                <ShieldCheck size={14} aria-hidden="true" />
                Mini-guide
              </span>
              <span className="text-[color:var(--muted-foreground)]">Use this drawer to decide timing first, then transport; that usually matters more than the beach name.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
