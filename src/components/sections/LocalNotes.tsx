import { AnimatePresence, motion } from 'framer-motion'
import { AlertTriangle, ArrowRight, BadgeCheck, CheckCircle2, Clock3, Compass, Footprints, MapPinned, Moon, Navigation, Pin, ShieldCheck, Users, type LucideIcon } from 'lucide-react'
import { useState } from 'react'
import { localNotes } from '../../data/localNotes'
import type { LocalNote } from '../../types'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionIntro } from '../ui/SectionIntro'
import { SectionLabel } from '../ui/SectionLabel'

type NoteMetricKey = 'timing' | 'transport' | 'crowd' | 'noise' | 'walkability' | 'planning'

type NoteMetric = {
  label: string
  value: number
  note: string
}

type NoteFieldGuide = {
  category: string
  rule: string
  means: string
  avoid: string
  bestUsedWhen: string
  related: string
  takeaway: string
  context: string
  metrics: Record<NoteMetricKey, NoteMetric>
}

const noteGuides: Record<string, NoteFieldGuide> = {
  'sunny-beach-is-not-one-place': {
    category: 'Orientation',
    rule: 'Choose by zone, not just by resort name.',
    means: 'North, center and south can feel like different trips. Beach calm, walk times and night noise all shift by zone.',
    avoid: 'Booking from a hotel name alone without checking its exact part of the resort.',
    bestUsedWhen: 'Before choosing a hotel, beach base or first evening plan.',
    related: 'Sunny Beach north, center and south',
    takeaway: 'Treat Sunny Beach like several small coastal moods, not one single resort.',
    context: 'First decision layer',
    metrics: {
      timing: { label: 'Timing', value: 62, note: 'Matters, but location matters more' },
      transport: { label: 'Transport', value: 70, note: 'Zone choice changes transfers' },
      crowd: { label: 'Crowds', value: 68, note: 'Pressure varies north to south' },
      noise: { label: 'Noise risk', value: 82, note: 'A few blocks can change the night' },
      walkability: { label: 'Walkability', value: 76, note: 'Strong if the zone matches your plans' },
      planning: { label: 'Planning', value: 92, note: 'The highest-impact early choice' },
    },
  },
  'party-zone-vs-quiet-zone': {
    category: 'Sleep',
    rule: 'A few streets decide the night soundtrack.',
    means: 'Sleep quality depends more on the block and nearby venues than the number of stars on the hotel.',
    avoid: 'Assuming a nicer hotel automatically means a quieter night.',
    bestUsedWhen: 'Before booking near central or south Sunny Beach.',
    related: 'Hotel zone, beach bars, club routes',
    takeaway: 'Check the exact block if quiet nights matter.',
    context: 'Noise filter',
    metrics: {
      timing: { label: 'Timing', value: 54, note: 'Late hours expose the difference' },
      transport: { label: 'Transport', value: 48, note: 'Less important than the block' },
      crowd: { label: 'Crowds', value: 66, note: 'Crowds often mean sound spillover' },
      noise: { label: 'Noise risk', value: 96, note: 'The core rule' },
      walkability: { label: 'Walkability', value: 58, note: 'Convenience can add noise' },
      planning: { label: 'Planning', value: 88, note: 'Best solved before arrival' },
    },
  },
  'nessebar-beautiful-but-crowded': {
    category: 'Timing',
    rule: 'Treat Nessebar as a timed visit.',
    means: 'Morning and golden hour feel more like a town; peak afternoon can feel like moving through a slow queue.',
    avoid: 'Arriving at the busiest hour and expecting a quiet old-town walk.',
    bestUsedWhen: 'When planning photos, old-town walks or dinner around Nessebar.',
    related: 'Old Nessebar, parking, golden hour',
    takeaway: 'The same streets feel very different depending on the hour.',
    context: 'Crowd timing',
    metrics: {
      timing: { label: 'Timing', value: 95, note: 'The whole visit depends on it' },
      transport: { label: 'Transport', value: 72, note: 'Roads and parking add friction' },
      crowd: { label: 'Crowds', value: 90, note: 'Peak season can feel dense' },
      noise: { label: 'Noise risk', value: 38, note: 'Crowds matter more than volume' },
      walkability: { label: 'Walkability', value: 84, note: 'Excellent when not overloaded' },
      planning: { label: 'Planning', value: 84, note: 'Worth scheduling deliberately' },
    },
  },
  'sveti-vlas-feels-different': {
    category: 'Mood',
    rule: 'Use Sveti Vlas for a mood shift.',
    means: 'The marina, slopes and hotel mix create a calmer, more polished rhythm than the loudest Sunny Beach zones.',
    avoid: 'Planning it like a loud strip night unless you already know the venue.',
    bestUsedWhen: 'For sunset, marina dinner, slower drinks or a reset from resort noise.',
    related: 'Sveti Vlas Beach, Marina Dinevi',
    takeaway: 'Treat the marina as the evening finish, not just another stop.',
    context: 'Marina rhythm',
    metrics: {
      timing: { label: 'Timing', value: 72, note: 'Late afternoon into evening works best' },
      transport: { label: 'Transport', value: 64, note: 'Return timing still matters' },
      crowd: { label: 'Crowds', value: 42, note: 'Usually more controlled' },
      noise: { label: 'Noise risk', value: 30, note: 'Quieter than the strip' },
      walkability: { label: 'Walkability', value: 66, note: 'Good around the marina' },
      planning: { label: 'Planning', value: 70, note: 'Works best as a chosen mood' },
    },
  },
  'elenite-is-quieter': {
    category: 'Pace',
    rule: 'Plan the return before you go quiet.',
    means: 'Elenite is a good reset when you want fewer decisions, but it is less flexible for spontaneous hopping.',
    avoid: 'Leaving transport vague if you want to continue elsewhere at night.',
    bestUsedWhen: 'For a slow beach day, resort pause or quieter edge of the coast.',
    related: 'Elenite, northern resort edge',
    takeaway: 'Quiet is useful, but it comes with less flexibility.',
    context: 'Slow edge',
    metrics: {
      timing: { label: 'Timing', value: 58, note: 'Better as a planned day' },
      transport: { label: 'Transport', value: 86, note: 'The main tradeoff' },
      crowd: { label: 'Crowds', value: 34, note: 'Usually lower' },
      noise: { label: 'Noise risk', value: 24, note: 'One of the calmer choices' },
      walkability: { label: 'Walkability', value: 38, note: 'More stay-put than stroll' },
      planning: { label: 'Planning', value: 82, note: 'Needs a clear return plan' },
    },
  },
  'road-to-nessebar-gets-busy': {
    category: 'Transport',
    rule: 'Add buffer time to short coastal hops.',
    means: 'Distances look small on a map, but summer traffic can reshape dinner, sunset and route timing.',
    avoid: 'Scheduling dinner or sunset too tightly after a transfer.',
    bestUsedWhen: 'Before moving between Sunny Beach, Nessebar and dinner plans.',
    related: 'Sunny Beach to Nessebar route',
    takeaway: 'Time on the coast is not only distance. It is season, hour and direction.',
    context: 'Route friction',
    metrics: {
      timing: { label: 'Timing', value: 88, note: 'Evening movement changes fast' },
      transport: { label: 'Transport', value: 94, note: 'The whole rule is transport' },
      crowd: { label: 'Crowds', value: 76, note: 'Traffic follows visitor flow' },
      noise: { label: 'Noise risk', value: 24, note: 'Not a sound issue' },
      walkability: { label: 'Walkability', value: 32, note: 'Not solved by walking' },
      planning: { label: 'Planning', value: 90, note: 'Buffer time saves the plan' },
    },
  },
}

type NoteCardProps = {
  note: LocalNote
  isSelected: boolean
  onSelect: () => void
}

function MetricBar({ metric }: { metric: NoteMetric }) {
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

function InsightTile({ icon: Icon, label, value, tone = 'neutral' }: { icon: LucideIcon; label: string; value: string; tone?: 'neutral' | 'warning' | 'foam' }) {
  const toneClass =
    tone === 'warning'
      ? 'border-[color:var(--coral)]/18 bg-[color:var(--coral-soft)]/30'
      : tone === 'foam'
        ? 'border-[color:var(--border)]/72 bg-[color:var(--foam)]/58'
        : 'border-[color:var(--border)]/72 bg-white/68'

  return (
    <div className={`rounded-[1.1rem] border px-4 py-3 ${toneClass}`}>
      <span className={`flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] ${tone === 'warning' ? 'text-[color:var(--coral)]' : 'text-[color:var(--sea-deep)]/62'}`}>
        <Icon size={14} aria-hidden="true" />
        {label}
      </span>
      <p className="mt-1.5 text-sm font-bold leading-6 text-[color:var(--ink)]">{value}</p>
    </div>
  )
}

function NoteCard({ note, isSelected, onSelect }: NoteCardProps) {
  const guide = noteGuides[note.id]

  return (
    <motion.button
      type="button"
      variants={fadeUp}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      onClick={onSelect}
      data-active={isSelected}
      aria-pressed={isSelected}
      aria-label={`Select local note ${note.title}`}
      className={`interactive-card active-rail field-note-card group min-w-0 overflow-hidden rounded-[1.25rem] border p-0 text-left shadow-soft ${
        isSelected ? 'border-[color:var(--coral)]/48 bg-white/86 ring-2 ring-[color:var(--coral)]/14' : 'border-white/72 bg-white/62 hover:bg-white/78'
      }`}
    >
      <div className="field-note-strip border-b border-white/64 p-4">
        <div className="relative z-10 flex items-start justify-between gap-3">
          <span className="rounded-full bg-white/72 px-3 py-1 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)] shadow-sm">
            {guide.category}
          </span>
          <span className={`grid size-10 shrink-0 place-items-center rounded-full border border-white/72 transition ${
            isSelected ? 'bg-[color:var(--coral)] text-white shadow-coral' : 'bg-white/62 text-[color:var(--sea-deep)] group-hover:bg-[color:var(--turquoise)] group-hover:text-[color:var(--night)]'
          }`}>
            {isSelected ? <BadgeCheck size={18} aria-hidden="true" /> : <Pin size={18} aria-hidden="true" />}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[color:var(--sea-deep)] px-3 py-1.5 text-[0.68rem] font-bold leading-none text-white">{guide.context}</span>
          <span className="rounded-full border border-[color:var(--border)] bg-white/72 px-3 py-1.5 text-[0.68rem] font-bold leading-none text-[color:var(--sea-deep)]">{note.label}</span>
        </div>
        <h3 className="mt-4 font-serif text-2xl leading-tight text-[color:var(--ink)]">{note.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{note.description}</p>
        <div className="mt-4 rounded-[1rem] border border-[color:var(--border)]/70 bg-[color:var(--background)]/62 px-3 py-2.5">
          <p className="font-mono text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-[color:var(--sea-deep)]/62">Rule</p>
          <p className="mt-1.5 text-sm font-bold leading-6 text-[color:var(--ink)]">{guide.rule}</p>
        </div>
      </div>
    </motion.button>
  )
}

export function LocalNotes() {
  const [selectedNoteId, setSelectedNoteId] = useState(localNotes[0].id)
  const selectedNote = localNotes.find((note) => note.id === selectedNoteId) ?? localNotes[0]
  const selectedGuide = noteGuides[selectedNote.id]
  const selectedMetrics = selectedGuide.metrics

  return (
    <MotionSection id="notes" className="section-shell overflow-hidden bg-[linear-gradient(180deg,#fff8e8_0%,#f6fbf8_52%,#eaf6f2_100%)]">
      <div className="grain absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.76fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Local Notes</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              Insider field notes for small decisions that matter.
            </h2>
          </div>
          <SectionIntro label="Insider field notes">
            Practical local rules for choosing where to stay, when to move, how to read crowds, and which coastal tradeoffs to solve before they become annoying.
          </SectionIntro>
        </motion.div>

        <motion.div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/72 bg-white/58 shadow-[0_32px_90px_rgba(9,58,82,0.13)] backdrop-blur" variants={fadeUp}>
          <div className="grid gap-0 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
            <AnimatePresence mode="wait">
              <motion.article
                key={selectedNote.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.24 }}
                className="field-guide-paper min-w-0 border-b border-[color:var(--border)]/70 p-4 sm:p-5 xl:border-b-0 xl:border-r"
              >
                <div className="relative overflow-hidden rounded-[1.35rem] border border-[color:var(--sand-deep)]/20 bg-white/72 p-4 shadow-soft sm:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--coral)]/10 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
                      <MapPinned size={13} aria-hidden="true" />
                      {selectedGuide.category}
                    </span>
                    <span className="rounded-full border border-[color:var(--border)] bg-white/68 px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/68">
                      {selectedGuide.context}
                    </span>
                  </div>

                  <h3 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-[color:var(--ink)] sm:text-4xl">{selectedGuide.rule}</h3>
                  <p className="mt-3 max-w-3xl text-base font-semibold leading-7 text-[color:var(--sea-deep)]">{selectedNote.title}</p>
                  <p className="mt-3 max-w-3xl leading-7 text-[color:var(--muted-foreground)]">{selectedGuide.means}</p>

                  <div className="mt-5 grid gap-3 lg:grid-cols-3">
                    <InsightTile icon={CheckCircle2} label="What it means" value={selectedGuide.means} tone="foam" />
                    <InsightTile icon={AlertTriangle} label="Avoid this mistake" value={selectedGuide.avoid} tone="warning" />
                    <InsightTile icon={ShieldCheck} label="Local takeaway" value={selectedGuide.takeaway} />
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <InsightTile icon={Clock3} label="Best used when" value={selectedGuide.bestUsedWhen} />
                    <InsightTile icon={Compass} label="Related area or route" value={selectedGuide.related} />
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <aside className="min-w-0 bg-[linear-gradient(180deg,rgba(223,246,237,0.58),rgba(255,255,255,0.62))] p-4 sm:p-5">
              <div className="rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/80 p-4 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Decision layer</p>
                  <span className="rounded-full bg-[color:var(--foam)] px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)]">Local usefulness</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <MetricBar metric={selectedMetrics.timing} />
                  <MetricBar metric={selectedMetrics.transport} />
                  <MetricBar metric={selectedMetrics.crowd} />
                  <MetricBar metric={selectedMetrics.noise} />
                </div>
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/80 p-4 shadow-soft">
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Field read</p>
                <div className="mt-3 grid gap-2">
                  {([
                    [Footprints, 'Walkability', selectedMetrics.walkability.note],
                    [Navigation, 'Planning importance', selectedMetrics.planning.note],
                    [Users, 'Crowd impact', selectedMetrics.crowd.note],
                    [Moon, 'Night risk', selectedMetrics.noise.note],
                  ] satisfies [LucideIcon, string, string][]).map(([Icon, label, value]) => (
                    <div key={label} className="flex gap-3 rounded-[1rem] bg-[color:var(--background)]/62 px-3 py-2">
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-white text-[color:var(--sea-deep)] shadow-sm">
                        <Icon size={14} aria-hidden="true" />
                      </span>
                      <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
                        <span className="font-bold text-[color:var(--ink)]">{label}:</span> {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-3 rounded-[1.25rem] border border-[color:var(--coral)]/18 bg-[color:var(--coral-soft)]/26 p-4 text-sm leading-6 text-[color:var(--ink)] shadow-soft">
                <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
                  <ArrowRight size={14} aria-hidden="true" />
                  Practical use
                </span>
                <p className="mt-2 font-medium">{selectedGuide.bestUsedWhen}</p>
              </div>
            </aside>
          </div>
        </motion.div>

        <motion.div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3" variants={staggerContainer}>
          {localNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              isSelected={selectedNoteId === note.id}
              onSelect={() => setSelectedNoteId(note.id)}
            />
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}
