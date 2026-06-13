import { localNotes } from '../../data/localNotes'
import { SectionLabel } from '../ui/SectionLabel'

export function LocalNotes() {
  return (
    <section id="notes" className="section-shell bg-[linear-gradient(180deg,rgba(242,217,170,0.36),rgba(255,255,255,0.42))]">
      <div className="section-inner">
        <div className="max-w-3xl">
          <SectionLabel>Local Notes</SectionLabel>
          <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
            Local notes from years around the coast.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[color:var(--muted-foreground)]">
            Small observations matter. The best experience depends on where you stay, when you move and what kind of summer you want.
          </p>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {localNotes.map((note) => (
            <article key={note.id} className="hover-lift relative overflow-hidden rounded-[1.35rem] border border-white/72 bg-[linear-gradient(145deg,rgba(242,217,170,0.78),rgba(255,255,255,0.58))] p-5 shadow-soft sm:p-6">
              <div className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-[color:var(--coral)]/90" aria-hidden="true" />
              <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--coral)]">{note.label}</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-[color:var(--ink)]">{note.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{note.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
