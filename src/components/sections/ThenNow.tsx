import { AnimatePresence, motion } from 'framer-motion'
import { Archive, BadgeCheck, Camera, Clock3, Layers, MapPinned, Stamp } from 'lucide-react'
import { useState } from 'react'
import archiveImage from '../../assets/section-backgrounds/sunny-beach-archive.png'
import { archiveEntries } from '../../data/archive'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionBackground } from '../ui/SectionBackground'
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
    <MotionSection id="archive" className="section-shell archive-page overflow-hidden">
      <SectionBackground
        image={archiveImage}
        position="center 46%"
        imageClassName="opacity-34 sepia-[0.26] saturate-[0.72] contrast-[0.94]"
        overlay="bg-[linear-gradient(180deg,rgba(255,248,232,0.86)_0%,rgba(255,251,241,0.74)_44%,rgba(244,235,213,0.82)_100%),linear-gradient(108deg,rgba(255,248,226,0.72),rgba(255,255,255,0.18)_50%,rgba(216,176,111,0.16)),radial-gradient(circle_at_18%_24%,rgba(114,88,61,0.14),transparent_18rem)]"
      />
      <div className="grain absolute inset-0 opacity-18" aria-hidden="true" />
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

        <motion.div className="mt-8 overflow-hidden rounded-[0.85rem] border border-[color:var(--sand-deep)]/24 bg-[color:var(--paper-soft)]/88 shadow-[0_18px_48px_rgba(73,52,31,0.08)]" variants={fadeUp}>
          <div className="grid gap-0 xl:grid-cols-[minmax(0,0.95fr)_minmax(22rem,1.05fr)]">
            <div className="min-w-0 border-b border-[color:var(--sand-deep)]/20 bg-[rgba(255,248,232,0.58)] p-4 xl:border-b-0 xl:border-r">
              <div className="flex w-fit rounded-[0.55rem] border border-[color:var(--sand-deep)]/24 bg-[color:var(--paper-soft)]/86 p-1">
                {(['then', 'now'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => chooseArchiveMode(mode)}
                    aria-pressed={archiveMode === mode}
                    className={`interactive-control rounded-[0.4rem] px-4 py-2 text-sm font-bold ${
                      archiveMode === mode ? 'bg-[color:var(--sea-deep)] text-white' : 'text-[color:var(--muted-foreground)] hover:bg-white/72 hover:text-[color:var(--ink)]'
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
                      className={`interactive-card archive-museum-artifact group min-h-[17rem] rounded-[0.8rem] border p-4 text-left ${
                        mode === 'then' ? 'archive-museum-then' : 'archive-museum-now'
                      } ${isActive ? 'ring-2 ring-[color:var(--coral)]/20' : 'opacity-88 hover:opacity-100'}`}
                    >
                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div className="flex items-start justify-between gap-3">
                          <span className="rounded-[0.35rem] border border-white/68 bg-white/88 px-3 py-1 font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]">
                            {copy.eyebrow}
                          </span>
                          <span className="grid size-9 shrink-0 place-items-center rounded-[0.45rem] border border-white/28 bg-white/18 text-white">
                            {isActive ? <BadgeCheck size={17} aria-hidden="true" /> : <Archive size={17} aria-hidden="true" />}
                          </span>
                        </div>
                        <div>
                          <span className="rounded-[0.35rem] border border-white/70 bg-white/86 px-3 py-1 font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[color:var(--ink)]">
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
                  className="archive-dossier-card relative overflow-hidden rounded-[0.75rem] border border-[color:var(--sand-deep)]/24 bg-[rgba(255,251,241,0.92)] p-4 shadow-[0_14px_34px_rgba(73,52,31,0.08)] sm:p-5"
                >
                  <div className="absolute right-5 top-5 hidden rotate-3 rounded-[0.35rem] border border-[color:var(--sand-deep)]/34 px-3 py-2 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sand-deep)]/72 sm:block" aria-hidden="true">
                    {selectedStory.stamp}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pr-0 sm:pr-28">
                    <span className="inline-flex items-center gap-2 rounded-[0.4rem] border border-[color:var(--sand-deep)]/24 bg-white/88 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]">
                      <Clock3 size={13} aria-hidden="true" />
                      {selectedArchive.year}
                    </span>
                    <span className="rounded-[0.4rem] border border-[color:var(--sand-deep)]/24 bg-[color:var(--paper)]/86 px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[color:var(--ink)]">
                      {archiveMode === 'then' ? 'Then lens' : 'Now lens'}
                    </span>
                  </div>

                  <h3 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl">{selectedArchive.title}</h3>
                  <p className="mt-2 max-w-2xl text-base font-semibold leading-7 text-[color:var(--sea-deep)]">{selectedArchive.subtitle}</p>
                  <p className="mt-3 max-w-3xl leading-7 text-[color:var(--muted-foreground)]">{selectedArchive.description}</p>

                  <div className="mt-5 grid gap-3 lg:grid-cols-3">
                    <div className="rounded-[0.55rem] border border-[color:var(--sea-deep)]/12 bg-[color:var(--foam)]/36 px-4 py-3">
                      <span className="flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/62">
                        <Camera size={14} aria-hidden="true" />
                        {archiveMode === 'then' ? 'Then lens' : 'Now lens'}
                      </span>
                      <p className="mt-1.5 text-sm font-medium leading-6 text-[color:var(--ink)]">{selectedStory.lens}</p>
                    </div>
                    <div className="rounded-[0.55rem] border border-[color:var(--sand-deep)]/22 bg-white/58 px-4 py-3">
                      <span className="flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/62">
                        <Layers size={14} aria-hidden="true" />
                        What changed
                      </span>
                      <p className="mt-1.5 text-sm font-medium leading-6 text-[color:var(--ink)]">{selectedStory.changed}</p>
                    </div>
                    <div className="rounded-[0.55rem] border border-[color:var(--coral)]/18 bg-[color:var(--coral-soft)]/20 px-4 py-3">
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

        <motion.div className="mt-5 flex flex-wrap items-center justify-end gap-3" variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-[0.45rem] border border-[color:var(--sand-deep)]/24 bg-[color:var(--paper-soft)]/88 px-3 py-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]">
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
                className={`interactive-card active-rail archive-timeline-card group relative min-w-0 overflow-hidden rounded-[0.7rem] border p-5 pl-6 text-left ${
                  isActive ? 'border-[color:var(--sea-deep)]/38 bg-[color:var(--paper-soft)]/94 ring-1 ring-[color:var(--sea-deep)]/12' : 'border-[color:var(--sand-deep)]/20 bg-[color:var(--paper-soft)]/72 hover:border-[color:var(--sand-deep)]/38 hover:bg-[color:var(--paper-soft)]/90'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-[0.35rem] border border-[color:var(--sand-deep)]/28 bg-white/86 px-3 py-1 font-mono text-[0.68rem] font-bold leading-none text-[color:var(--sea-deep)] transition group-hover:border-[color:var(--sea-deep)]/34">
                    {archiveBadgeLabels[entry.id]}
                  </span>
                  <span className="rounded-[0.35rem] border border-[color:var(--sand-deep)]/24 bg-[color:var(--sand)]/58 px-3 py-1 font-mono text-[0.64rem] font-bold leading-none text-[color:var(--ink)]">
                    {story.stamp}
                  </span>
                </div>
                <h3 className="mt-3 pr-8 font-serif text-2xl leading-tight text-[color:var(--ink)]">{entry.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--sea-deep)]">{entry.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{entry.description}</p>
                <p className="mt-4 rounded-[0.5rem] border border-[color:var(--sand-deep)]/18 bg-white/48 px-3 py-2 text-sm font-medium leading-6 text-[color:var(--ink)]">
                  {story.changed}
                </p>
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </MotionSection>
  )
}
