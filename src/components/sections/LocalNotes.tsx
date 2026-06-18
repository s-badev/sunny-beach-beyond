import { motion } from 'framer-motion'
import { AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { localNotes } from '../../data/localNotes'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionLabel } from '../ui/SectionLabel'

const noteConsequences: Record<string, { rule: string; means: string; avoid: string }> = {
  'sunny-beach-is-not-one-place': {
    rule: 'Choose by zone, not just by resort name.',
    means: 'North, center and south change the daily rhythm: beach calm, walking distance, and late-night noise all shift.',
    avoid: 'Booking only from a hotel name without checking its exact part of the resort.',
  },
  'party-zone-vs-quiet-zone': {
    rule: 'A few streets decide the night soundtrack.',
    means: 'Sleep quality depends more on the block and nearby venues than the number of stars on the hotel.',
    avoid: 'Assuming a nicer hotel automatically means a quieter night.',
  },
  'nessebar-beautiful-but-crowded': {
    rule: 'Treat Nessebar as a timed visit.',
    means: 'Morning and golden hour feel more like a town; peak afternoon can feel like moving through a queue.',
    avoid: 'Arriving at the busiest hour and expecting a slow, empty old-town walk.',
  },
  'sveti-vlas-feels-different': {
    rule: 'Use Sveti Vlas for a mood shift.',
    means: 'It works best as a calmer marina or dinner plan, not just another Sunny Beach stop.',
    avoid: 'Planning it like a loud strip night unless you already know the venue.',
  },
  'elenite-is-quieter': {
    rule: 'Plan the return before you go quiet.',
    means: 'Elenite is a good reset when you want fewer decisions, but it is less flexible for spontaneous hopping.',
    avoid: 'Leaving transport vague if you want to continue elsewhere at night.',
  },
  'road-to-nessebar-gets-busy': {
    rule: 'Add buffer time to short coastal hops.',
    means: 'Distances look small on a map, but summer traffic can reshape the evening plan.',
    avoid: 'Scheduling dinner or sunset too tightly after a transfer.',
  },
}

export function LocalNotes() {
  const [selectedNoteId, setSelectedNoteId] = useState(localNotes[0].id)
  const selectedNote = localNotes.find((note) => note.id === selectedNoteId) ?? localNotes[0]
  const selectedConsequence = noteConsequences[selectedNote.id]

  return (
    <MotionSection id="notes" className="section-shell bg-[linear-gradient(180deg,rgba(242,217,170,0.36),rgba(255,255,255,0.42))]">
      <div className="section-inner">
        <motion.div className="max-w-3xl" variants={fadeUp}>
          <SectionLabel>Local Notes</SectionLabel>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
            Local notes from years around the coast.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[color:var(--muted-foreground)]">
            Small observations matter. The best experience depends on where you stay, when you move and what kind of summer you want.
          </p>
        </motion.div>
        <motion.div className="mt-9 grid gap-4 md:grid-cols-3" variants={staggerContainer}>
          {localNotes.map((note) => (
            <motion.button
              key={note.id}
              type="button"
              variants={fadeUp}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelectedNoteId(note.id)}
              onMouseEnter={() => setSelectedNoteId(note.id)}
              data-active={selectedNoteId === note.id}
              className={`interactive-card active-rail group relative overflow-hidden rounded-[1.35rem] border bg-[linear-gradient(145deg,rgba(242,217,170,0.78),rgba(255,255,255,0.58))] p-5 pl-6 text-left shadow-soft sm:p-6 ${
                selectedNoteId === note.id ? 'border-[color:var(--coral)]/45 bg-white/80 ring-2 ring-[color:var(--coral)]/14' : 'border-white/72'
              }`}
            >
              <div className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-[color:var(--coral)]/90 transition group-hover:bg-[color:var(--coral)]" aria-hidden="true" />
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--coral)] transition group-hover:text-[color:var(--sea-deep)]">{note.label}</p>
                <span className="rounded-full bg-white/58 px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)] opacity-0 transition group-hover:opacity-100 group-data-[active=true]:opacity-100">
                  {selectedNoteId === note.id ? 'Selected' : 'Local rule'}
                </span>
              </div>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-[color:var(--ink)]">{note.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{note.description}</p>
              <div className="soft-reveal mt-4">
                <p className="rounded-2xl border border-white/72 bg-white/54 px-3 py-2 text-sm font-medium leading-6 text-[color:var(--ink)]">
                  <span className="block font-mono text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--coral)]">What it means</span>
                  <span className="mt-1 block">{noteConsequences[note.id].means}</span>
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          key={selectedNote.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="panel-sheen mt-5 overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/72 shadow-soft"
        >
          <div className="grid gap-4 p-5 md:grid-cols-[0.72fr_1.28fr] sm:p-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--coral)]">Selected local note</p>
              <h3 className="mt-2 font-serif text-3xl leading-tight text-[color:var(--ink)]">{selectedNote.title}</h3>
              <p className="mt-2 text-sm font-semibold text-[color:var(--sea-deep)]">{selectedNote.label}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[color:var(--border)]/75 bg-[color:var(--foam)]/58 px-4 py-3">
                <span className="flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/62">
                  <CheckCircle2 size={14} aria-hidden="true" />
                  Local rule
                </span>
                <span className="mt-1.5 block text-sm font-bold leading-5 text-[color:var(--ink)]">{selectedConsequence.rule}</span>
              </div>
              <div className="rounded-2xl border border-[color:var(--border)]/75 bg-white/62 px-4 py-3">
                <span className="flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/62">
                  <ArrowRight size={14} aria-hidden="true" />
                  What it means
                </span>
                <span className="mt-1.5 block text-sm font-bold leading-5 text-[color:var(--ink)]">{selectedConsequence.means}</span>
              </div>
              <div className="rounded-2xl border border-[color:var(--coral)]/18 bg-[color:var(--coral-soft)]/30 px-4 py-3">
                <span className="flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--coral)]">
                  <AlertTriangle size={14} aria-hidden="true" />
                  Avoid this mistake
                </span>
                <span className="mt-1.5 block text-sm font-bold leading-5 text-[color:var(--ink)]">{selectedConsequence.avoid}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
