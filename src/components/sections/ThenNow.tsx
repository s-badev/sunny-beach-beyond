import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { archiveDisclaimer, archiveEntries } from '../../data/archive'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionLabel } from '../ui/SectionLabel'

const archiveChanges: Record<string, string> = {
  'resort-begins-1958': 'A planned seaside resort begins to replace empty sand with a summer system.',
  'postcards-state-holidays': 'Sunny Beach becomes a postcard image and a familiar holiday memory.',
  'construction-boom-nightlife': 'Private hotels, new venues, and nightlife reshape the scale of the coast.',
  'today-sunny-beach-and-beyond': 'The guide now has to read several coastlines at once, not one simple resort.',
}

const archiveLensNotes: Record<'then' | 'now', string> = {
  then: 'Then lens: read the coast as a planned holiday resort, where broad sand, state hotels, and postcards shaped the story.',
  now: 'Now lens: read the coast as a layered summer map, where nightlife, marinas, old towns, and quieter edges compete for attention.',
}

export function ThenNow() {
  const [archiveMode, setArchiveMode] = useState<'then' | 'now'>('then')
  const [selectedArchiveId, setSelectedArchiveId] = useState(archiveEntries[0].id)
  const selectedArchive = archiveEntries.find((entry) => entry.id === selectedArchiveId) ?? archiveEntries[0]

  function chooseArchiveMode(mode: 'then' | 'now') {
    setArchiveMode(mode)
    setSelectedArchiveId(mode === 'then' ? archiveEntries[0].id : archiveEntries[archiveEntries.length - 1].id)
  }

  return (
    <MotionSection id="archive" className="section-shell overflow-hidden bg-[linear-gradient(180deg,rgba(242,217,170,0.46),rgba(7,26,45,0.08))]">
      <div className="section-inner">
        <motion.div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Archive</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              Postcards from a coastline that keeps changing.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">
            Discover how Sunny Beach evolved - from quiet seaside hotels and faded postcards to today&apos;s busy summer capital of the Black Sea.
          </p>
        </motion.div>
        <motion.div className="mt-7 flex w-fit rounded-full border border-[color:var(--border)] bg-white/62 p-1 shadow-soft" variants={fadeUp}>
          {(['then', 'now'] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => chooseArchiveMode(mode)}
              className={`interactive-control rounded-full px-4 py-2 text-sm font-bold ${
                archiveMode === mode ? 'bg-[color:var(--sea-deep)] text-white shadow-glow' : 'text-[color:var(--muted-foreground)] hover:bg-white/70 hover:text-[color:var(--ink)]'
              }`}
            >
              {mode === 'then' ? 'Then' : 'Now'}
            </button>
          ))}
        </motion.div>
        <motion.div className="mt-6 grid gap-5 lg:grid-cols-2" variants={staggerContainer}>
          <motion.button
            type="button"
            onClick={() => chooseArchiveMode('then')}
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            data-active={archiveMode === 'then'}
            className={`interactive-card archive-then group relative min-h-80 overflow-hidden rounded-[1.65rem] border border-white/30 p-6 text-left shadow-soft transition sm:min-h-96 ${archiveMode === 'then' ? 'ring-2 ring-[color:var(--coral)]/30' : 'opacity-85'}`}
          >
            <div className="grain absolute inset-0 opacity-34" aria-hidden="true" />
            <div className="absolute left-8 top-20 h-44 w-32 -rotate-6 rounded-xl border border-white/28 bg-white/14 p-3 shadow-soft" aria-hidden="true">
              <div className="h-full rounded-lg bg-[linear-gradient(145deg,rgba(255,248,226,0.62),rgba(114,88,61,0.58))]" />
            </div>
            <span className="relative rounded-full border border-white/18 bg-white/24 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              1970s / Then
            </span>
            <div className="absolute bottom-8 left-8 right-8">
              <span className="mb-3 inline-block rounded-full bg-white/18 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/86 opacity-0 backdrop-blur transition group-hover:opacity-100 group-data-[active=true]:opacity-100">
                {archiveMode === 'then' ? 'Selected lens' : 'Switch lens'}
              </span>
              <p className="max-w-lg font-serif text-3xl leading-tight text-white sm:text-4xl">Faded postcards, broad sand, slower summers.</p>
            </div>
          </motion.button>
          <motion.button
            type="button"
            onClick={() => chooseArchiveMode('now')}
            variants={fadeUp}
            whileHover={{ scale: 1.01 }}
            data-active={archiveMode === 'now'}
            className={`interactive-card archive-now group relative min-h-80 overflow-hidden rounded-[1.65rem] border border-white/34 p-6 text-left shadow-glow transition sm:min-h-96 ${archiveMode === 'now' ? 'ring-2 ring-[color:var(--turquoise)]/35' : 'opacity-85'}`}
          >
            <div className="grain absolute inset-0 opacity-16" aria-hidden="true" />
            <div className="absolute -right-14 bottom-12 h-44 w-72 rounded-[50%] bg-[color:var(--sand)]/86 shadow-soft" aria-hidden="true" />
            <div className="absolute right-16 top-24 size-3 rounded-full bg-white shadow-glow" aria-hidden="true" />
            <div className="absolute right-28 top-36 size-3 rounded-full bg-[color:var(--coral)] shadow-coral" aria-hidden="true" />
            <span className="relative rounded-full border border-white/16 bg-white/22 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              Today / Now
            </span>
            <div className="absolute bottom-8 left-8 right-8">
              <span className="mb-3 inline-block rounded-full bg-white/18 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/86 opacity-0 backdrop-blur transition group-hover:opacity-100 group-data-[active=true]:opacity-100">
                {archiveMode === 'now' ? 'Selected lens' : 'Switch lens'}
              </span>
              <p className="max-w-lg font-serif text-3xl leading-tight text-white sm:text-4xl">Neon nights, marina lights, old streets and full beaches.</p>
            </div>
          </motion.button>
        </motion.div>
        <motion.div className="mt-9" variants={fadeUp}>
          <div className="panel-sheen glass overflow-hidden rounded-[1.45rem] border-[color:var(--sand-deep)]/24 shadow-soft">
            <div className="archive-paper relative p-5 sm:p-7 lg:p-8">
              <div className="absolute bottom-6 left-6 top-6 hidden w-px bg-[color:var(--sand-deep)]/18 sm:block" aria-hidden="true" />
              <div className="absolute left-[1.15rem] top-8 hidden size-3 rounded-full bg-[color:var(--coral)] shadow-coral sm:block" aria-hidden="true" />
              <div className="mb-5 flex flex-wrap items-center gap-2 pl-0 sm:pl-5">
                <span className="rounded-full border border-[color:var(--sand-deep)]/25 bg-white/46 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sand-deep)]/80">
                  Selected entry
                </span>
                <span className="rounded-full bg-[color:var(--coral)]/10 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
                  {archiveMode === 'then' ? 'Then lens' : 'Now lens'}
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${archiveMode}-${selectedArchive.id}`}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.24 }}
                  className="grid gap-6 sm:pl-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.1fr)] lg:items-start"
                >
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--coral)]">{selectedArchive.year}</p>
                    <h3 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl">{selectedArchive.title}</h3>
                    <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-[color:var(--sea-deep)]">{selectedArchive.subtitle}</p>
                    <p className="mt-4 max-w-3xl leading-7 text-[color:var(--muted-foreground)]">{selectedArchive.description}</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    <div className="rounded-2xl border border-[color:var(--sea-deep)]/10 bg-[color:var(--foam)]/50 px-4 py-3 text-sm font-medium leading-6 text-[color:var(--ink)]">
                      <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/58">
                        {archiveMode === 'then' ? 'Then lens' : 'Now lens'}
                      </span>
                      <span className="mt-1.5 block">{archiveLensNotes[archiveMode]}</span>
                    </div>
                    <div className="rounded-2xl border border-[color:var(--sand-deep)]/20 bg-white/54 px-4 py-3 text-sm font-medium leading-6 text-[color:var(--ink)]">
                      <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/58">What changed</span>
                      <span className="mt-1.5 block">{archiveChanges[selectedArchive.id]}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-[color:var(--muted-foreground)]">
            Use the timeline cards as a quick lens: each date marks a different version of the same coastline, from planned resort to layered summer map.
          </p>
        </motion.div>
        <motion.div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer}>
          {archiveEntries.map((entry) => (
            <motion.button
              key={entry.id}
              type="button"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelectedArchiveId(entry.id)}
              onMouseEnter={() => setSelectedArchiveId(entry.id)}
              data-active={selectedArchiveId === entry.id}
              className={`interactive-card active-rail archive-timeline-card group relative overflow-hidden rounded-[1.25rem] border p-5 pl-6 text-left shadow-soft ${
                selectedArchiveId === entry.id ? 'border-[color:var(--coral)]/45 bg-white/80 ring-2 ring-[color:var(--coral)]/14' : 'border-white/62 bg-white/56 hover:border-[color:var(--sand-deep)]/35'
              }`}
            >
              <span className="absolute right-4 top-4 rounded-full border border-[color:var(--sand-deep)]/22 px-2.5 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sand-deep)]/70">
                Archive
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--coral)] transition group-hover:text-[color:var(--sea-deep)]">{entry.year}</p>
              <h3 className="mt-3 pr-8 font-serif text-2xl text-[color:var(--ink)]">{entry.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--sea-deep)]">{entry.subtitle}</p>
              <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{entry.description}</p>
              <p className="mt-4 rounded-2xl border border-[color:var(--border)]/70 bg-white/58 px-3 py-2 text-sm font-medium leading-6 text-[color:var(--ink)] opacity-80 transition group-hover:bg-white/78 group-hover:opacity-100">
                {archiveChanges[entry.id]}
              </p>
            </motion.button>
          ))}
        </motion.div>
        <motion.p variants={fadeUp} className="mt-5 max-w-3xl text-xs leading-5 text-[color:var(--muted-foreground)]/82">
          {archiveDisclaimer}
        </motion.p>
      </div>
    </MotionSection>
  )
}
