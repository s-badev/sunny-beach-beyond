import { motion } from 'framer-motion'
import { localNotes } from '../../data/localNotes'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionLabel } from '../ui/SectionLabel'

export function LocalNotes() {
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
            <motion.article
              key={note.id}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[1.35rem] border border-white/72 bg-[linear-gradient(145deg,rgba(242,217,170,0.78),rgba(255,255,255,0.58))] p-5 shadow-soft sm:p-6"
            >
              <div className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-[color:var(--coral)]/90 transition group-hover:bg-[color:var(--coral)]" aria-hidden="true" />
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--coral)] transition group-hover:tracking-[0.24em]">{note.label}</p>
                <span className="rounded-full bg-white/58 px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)] opacity-0 transition group-hover:opacity-100">
                  Field note
                </span>
              </div>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-[color:var(--ink)]">{note.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{note.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  )
}
