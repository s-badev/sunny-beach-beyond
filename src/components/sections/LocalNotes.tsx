import { localNotes } from '../../data/localNotes'
import { SectionLabel } from '../ui/SectionLabel'

export function LocalNotes() {
  return (
    <section id="local-notes" className="section-shell bg-[linear-gradient(180deg,rgba(242,217,170,0.36),rgba(255,255,255,0.42))]">
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
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {localNotes.map((note) => (
            <article key={note.id} className="hover-lift relative overflow-hidden rounded-[1.35rem] border border-white/70 bg-[color:var(--sand)]/62 p-6 shadow-soft">
              <div className="absolute inset-y-6 left-0 w-1 rounded-r-full bg-[color:var(--coral)]" aria-hidden="true" />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--coral)]">{note.label}</p>
              <h3 className="mt-4 font-serif text-2xl leading-tight text-[color:var(--ink)]">{note.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{note.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
