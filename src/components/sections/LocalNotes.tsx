import { localNotes } from '../../data/localNotes'
import { SectionLabel } from '../ui/SectionLabel'

export function LocalNotes() {
  return (
    <section id="local-notes" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Local Notes</SectionLabel>
        <h2 className="max-w-3xl font-serif text-4xl font-semibold text-[color:var(--ink)]">
          Small observations make the guide personal.
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-[color:var(--muted-foreground)]">
          This area will hold concise local guidance gathered from repeated visits and familiar paths.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {localNotes.map((note) => (
            <article key={note.title} className="rounded-2xl bg-[color:var(--sand)]/55 p-6 shadow-soft">
              <h3 className="font-serif text-2xl text-[color:var(--ink)]">{note.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{note.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
