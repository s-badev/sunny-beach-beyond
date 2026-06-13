import { motion } from 'framer-motion'
import { Waves } from 'lucide-react'
import { useState } from 'react'
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

export function Beaches() {
  const [selectedBeachId, setSelectedBeachId] = useState(beaches[0].id)
  const selectedBeach = beaches.find((beach) => beach.id === selectedBeachId) ?? beaches[0]

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
          {beaches.map((beach, index) => (
            <motion.button
              key={beach.id}
              type="button"
              variants={fadeUp}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelectedBeachId(beach.id)}
              className={`glass group flex min-h-full flex-col rounded-[1.35rem] p-5 text-left shadow-soft transition sm:p-6 ${
                selectedBeachId === beach.id ? 'border-[color:var(--turquoise)]/60 ring-2 ring-[color:var(--turquoise)]/16' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--coral)]">
                    Beach / {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-serif text-[1.7rem] leading-tight text-[color:var(--ink)]">{beach.name}</h3>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/70 bg-[color:var(--foam)] text-[color:var(--sea-deep)] transition group-hover:-translate-y-1 group-hover:bg-[color:var(--turquoise)] group-hover:text-white">
                  <Waves size={19} aria-hidden="true" />
                </span>
              </div>
              <p className="mt-4 w-fit rounded-full bg-[color:var(--sea-deep)] px-3 py-1.5 text-[0.72rem] font-bold leading-none text-white transition group-hover:bg-[color:var(--coral)]">
                Best for / {beach.bestFor}
              </p>
              <p className="mt-4 flex-1 leading-7 text-[color:var(--muted-foreground)]">{beach.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5 opacity-80 transition group-hover:opacity-100">
                {beach.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/80 bg-white/58 px-2.5 py-1 text-[0.72rem] font-semibold text-[color:var(--sea-deep)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </motion.div>
        <motion.div key={selectedBeach.id} className="mt-5 rounded-[1.2rem] border border-[color:var(--border)] bg-white/66 px-5 py-4 shadow-soft" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--coral)]">Local beach tip</p>
          <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
            <span className="font-bold text-[color:var(--ink)]">{selectedBeach.name}:</span> {beachTips[selectedBeach.id]}
          </p>
        </motion.div>
      </div>
    </MotionSection>
  )
}
