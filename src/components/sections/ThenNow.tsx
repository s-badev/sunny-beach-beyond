import { AnimatePresence, motion } from 'framer-motion'
import { Archive, BadgeCheck, Camera, Clock3, Layers, MapPinned, Stamp } from 'lucide-react'
import { useState } from 'react'
import { archiveDisclaimer, archiveEntries } from '../../data/archive'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionIntro } from '../ui/SectionIntro'
import { SectionLabel } from '../ui/SectionLabel'

type ArchiveMode = 'then' | 'now'

type ArchiveStory = {
  lens: string
  changed: string
  note: string
  stamp: string
  mood: string
}

const archiveStories: Record<string, ArchiveStory> = {
  'resort-begins-1958': {
    lens: 'The resort begins as a planned seaside system, shaped by broad sand, state hotels, and organized summer holidays.',
    changed: 'Empty coastal space becomes a designed holiday machine: beach, hotel, promenade and summer routine.',
    note: 'This is the foundation layer. Later Sunny Beach may look chaotic, but it starts with a clear plan.',
    stamp: 'Foundation',
    mood: 'Planned resort',
  },
  'postcards-state-holidays': {
    lens: 'Postcards turn Sunny Beach into a familiar holiday image - not only a place, but a memory format.',
    changed: 'The resort becomes recognizable through repeated summer rituals, family photos and printed coastal scenes.',
    note: 'This is where the coast becomes emotional infrastructure: something people remember before they revisit.',
    stamp: 'Postcard era',
    mood: 'Holiday memory',
  },
  'construction-boom-nightlife': {
    lens: 'After 2000, private hotels, venues and nightlife reshape the scale and rhythm of the coast.',
    changed: 'The resort grows denser, louder and more fragmented, with new zones competing for the same summer night.',
    note: 'The coast does not simply grow. It splits into different ways of spending the same summer.',
    stamp: 'Expansion',
    mood: 'New density',
  },
  'today-sunny-beach-and-beyond': {
    lens: 'Today the area reads as several summer maps at once: party zones, family hotels, old Nessebar, marina evenings and quieter edges.',
    changed: 'Sunny Beach becomes one part of a wider coastal system, not the whole story.',
    note: 'The modern guide has to read rhythms, not just locations: noise, transport, timing, views and slower edges.',
    stamp: 'Layered coast',
    mood: 'Several maps',
  },
}

const modeCopy: Record<ArchiveMode, { eyebrow: string; title: string; body: string; period: string }> = {
  then: {
    eyebrow: '1970s / Then',
    title: 'Faded postcards, broad sand, slower summers.',
    body: 'Read the coast as a planned holiday resort, where hotels, beaches and postcard memories gave Sunny Beach one clear image.',
    period: 'Postcard lens',
  },
  now: {
    eyebrow: 'Today / Now',
    title: 'Neon nights, marina light, old streets and full beaches.',
    body: 'Read the coast as a layered summer map, where nightlife, old Nessebar, marina evenings and quieter edges overlap.',
    period: 'Living map',
  },
}

const archiveBadgeLabels: Record<string, string> = {
  'resort-begins-1958': '1958',
  'postcards-state-holidays': '1970s-80s',
  'construction-boom-nightlife': 'After 2000',
  'today-sunny-beach-and-beyond': 'Today',
}

export function ThenNow() {
  const [archiveMode, setArchiveMode] = useState<ArchiveMode>('then')
  const [selectedArchiveId, setSelectedArchiveId] = useState(archiveEntries[0].id)
  const selectedArchive = archiveEntries.find((entry) => entry.id === selectedArchiveId) ?? archiveEntries[0]
  const selectedStory = archiveStories[selectedArchive.id]

  function chooseArchiveMode(mode: ArchiveMode) {
    setArchiveMode(mode)
    setSelectedArchiveId(mode === 'then' ? archiveEntries[0].id : archiveEntries[archiveEntries.length - 1].id)
  }

  return (
    <MotionSection id="archive" className="section-shell overflow-hidden bg-[linear-gradient(180deg,#fff8e8_0%,#f3fbf8_48%,#eaf6f2_100%)]">
      <div className="grain absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Archive</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              A digital postcard museum for a changing coast.
            </h2>
          </div>
          <SectionIntro label="Archive lens">
            Trace Sunny Beach from planned resort and postcard memory to today&apos;s layered map of party zones, old streets, marina evenings and quieter edges.
          </SectionIntro>
        </motion.div>

        <motion.div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/72 bg-white/58 shadow-[0_32px_90px_rgba(9,58,82,0.13)] backdrop-blur" variants={fadeUp}>
          <div className="grid gap-0 xl:grid-cols-[minmax(0,0.95fr)_minmax(22rem,1.05fr)]">
            <div className="min-w-0 border-b border-[color:var(--border)]/70 bg-white/48 p-4 xl:border-b-0 xl:border-r">
              <div className="flex w-fit rounded-full border border-[color:var(--border)] bg-white/68 p-1 shadow-soft">
                {(['then', 'now'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => chooseArchiveMode(mode)}
                    aria-pressed={archiveMode === mode}
                    className={`interactive-control rounded-full px-4 py-2 text-sm font-bold ${
                      archiveMode === mode ? 'bg-[color:var(--sea-deep)] text-white shadow-glow' : 'text-[color:var(--muted-foreground)] hover:bg-white hover:text-[color:var(--ink)]'
                    }`}
                  >
                    {mode === 'then' ? 'Then' : 'Now'}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {(['then', 'now'] as const).map((mode) => {
                  const isActive = archiveMode === mode
                  const copy = modeCopy[mode]

                  return (
                    <motion.button
                      key={mode}
                      type="button"
                      onClick={() => chooseArchiveMode(mode)}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.99 }}
                      data-active={isActive}
                      aria-pressed={isActive}
                      className={`interactive-card archive-museum-artifact group min-h-[17rem] rounded-[1.35rem] border p-4 text-left shadow-soft ${
                        mode === 'then' ? 'archive-museum-then' : 'archive-museum-now'
                      } ${isActive ? 'ring-2 ring-[color:var(--coral)]/20' : 'opacity-88 hover:opacity-100'}`}
                    >
                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div className="flex items-start justify-between gap-3">
                          <span className="rounded-full border border-white/20 bg-white/22 px-3 py-1 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                            {copy.eyebrow}
                          </span>
                          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/28 bg-white/18 text-white backdrop-blur">
                            {isActive ? <BadgeCheck size={17} aria-hidden="true" /> : <Archive size={17} aria-hidden="true" />}
                          </span>
                        </div>
                        <div>
                          <span className="rounded-full bg-white/18 px-3 py-1 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white/86 backdrop-blur">
                            {copy.period}
                          </span>
                          <p className="mt-3 font-serif text-2xl leading-tight text-white sm:text-[1.65rem]">{copy.title}</p>
                          <p className="mt-2 text-sm font-medium leading-6 text-white/74">{copy.body}</p>
                        </div>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>

            <div className="archive-paper min-w-0 p-4 sm:p-5">
              <AnimatePresence mode="wait">
                <motion.article
                  key={`${archiveMode}-${selectedArchive.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.24 }}
                  className="relative overflow-hidden rounded-[1.35rem] border border-[color:var(--sand-deep)]/20 bg-white/68 p-4 shadow-soft sm:p-5"
                >
                  <div className="absolute right-5 top-5 hidden rotate-6 rounded-[0.85rem] border border-[color:var(--sand-deep)]/28 px-3 py-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sand-deep)]/72 sm:block" aria-hidden="true">
                    {selectedStory.stamp}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pr-0 sm:pr-28">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--coral)]/10 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
                      <Clock3 size={13} aria-hidden="true" />
                      {selectedArchive.year}
                    </span>
                    <span className="rounded-full border border-[color:var(--sand-deep)]/22 bg-white/58 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sand-deep)]/78">
                      {archiveMode === 'then' ? 'Then lens' : 'Now lens'}
                    </span>
                  </div>

                  <h3 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl">{selectedArchive.title}</h3>
                  <p className="mt-2 max-w-2xl text-base font-semibold leading-7 text-[color:var(--sea-deep)]">{selectedArchive.subtitle}</p>
                  <p className="mt-3 max-w-3xl leading-7 text-[color:var(--muted-foreground)]">{selectedArchive.description}</p>

                  <div className="mt-5 grid gap-3 lg:grid-cols-3">
                    <div className="rounded-[1.1rem] border border-[color:var(--sea-deep)]/10 bg-[color:var(--foam)]/54 px-4 py-3">
                      <span className="flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/62">
                        <Camera size={14} aria-hidden="true" />
                        {archiveMode === 'then' ? 'Then lens' : 'Now lens'}
                      </span>
                      <p className="mt-1.5 text-sm font-medium leading-6 text-[color:var(--ink)]">{selectedStory.lens}</p>
                    </div>
                    <div className="rounded-[1.1rem] border border-[color:var(--sand-deep)]/20 bg-white/64 px-4 py-3">
                      <span className="flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/62">
                        <Layers size={14} aria-hidden="true" />
                        What changed
                      </span>
                      <p className="mt-1.5 text-sm font-medium leading-6 text-[color:var(--ink)]">{selectedStory.changed}</p>
                    </div>
                    <div className="rounded-[1.1rem] border border-[color:var(--coral)]/16 bg-[color:var(--coral-soft)]/26 px-4 py-3">
                      <span className="flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--coral)]">
                        <Stamp size={14} aria-hidden="true" />
                        Museum note
                      </span>
                      <p className="mt-1.5 text-sm font-medium leading-6 text-[color:var(--ink)]">{selectedStory.note}</p>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-5 flex flex-wrap items-center justify-between gap-3" variants={fadeUp}>
          <p className="max-w-3xl text-sm leading-6 text-[color:var(--muted-foreground)]">
            Select a postcard object below. Each period marks a different version of the same coastline, from planned resort to layered summer map.
          </p>
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/62 px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/68">
            <MapPinned size={14} aria-hidden="true" />
            {selectedStory.mood}
          </span>
        </motion.div>

        <motion.div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" variants={staggerContainer}>
          {archiveEntries.map((entry) => {
            const isActive = selectedArchiveId === entry.id
            const story = archiveStories[entry.id]

            return (
              <motion.button
                key={entry.id}
                type="button"
                variants={fadeUp}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setSelectedArchiveId(entry.id)}
                data-active={isActive}
                aria-pressed={isActive}
                aria-label={`Select archive entry ${entry.title}`}
                className={`interactive-card active-rail archive-timeline-card group relative min-w-0 overflow-hidden rounded-[1.25rem] border p-5 pl-6 text-left shadow-soft ${
                  isActive ? 'border-[color:var(--coral)]/48 bg-white/82 ring-2 ring-[color:var(--coral)]/14' : 'border-white/62 bg-white/58 hover:border-[color:var(--sand-deep)]/35 hover:bg-white/70'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[color:var(--coral)]/10 px-3 py-1 font-mono text-[0.68rem] font-semibold leading-none text-[color:var(--coral)] transition group-hover:text-[color:var(--sea-deep)]">
                    {archiveBadgeLabels[entry.id]}
                  </span>
                  <span className="rounded-full border border-[color:var(--sand-deep)]/22 bg-white/50 px-3 py-1 font-mono text-[0.64rem] font-semibold leading-none text-[color:var(--sand-deep)]/78">
                    {story.stamp}
                  </span>
                </div>
                <h3 className="mt-3 pr-8 font-serif text-2xl leading-tight text-[color:var(--ink)]">{entry.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--sea-deep)]">{entry.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{entry.description}</p>
                <p className="mt-4 rounded-[1rem] border border-[color:var(--border)]/70 bg-white/58 px-3 py-2 text-sm font-medium leading-6 text-[color:var(--ink)]">
                  {story.changed}
                </p>
              </motion.button>
            )
          })}
        </motion.div>

        <motion.p variants={fadeUp} className="mt-5 max-w-3xl text-xs leading-5 text-[color:var(--muted-foreground)]/82">
          {archiveDisclaimer}
        </motion.p>
      </div>
    </MotionSection>
  )
}
