import { archiveDisclaimer, archiveEntries } from '../../data/archive'
import { SectionLabel } from '../ui/SectionLabel'

export function ThenNow() {
  return (
    <section id="archive" className="section-shell overflow-hidden bg-[linear-gradient(180deg,rgba(242,217,170,0.46),rgba(7,26,45,0.08))]">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionLabel>Archive</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              Postcards from a coastline that keeps changing.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">
            Discover how Sunny Beach evolved - from quiet seaside hotels and faded postcards to today&apos;s busy summer capital of the Black Sea.
          </p>
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          <div className="archive-then relative min-h-96 overflow-hidden rounded-[1.65rem] border border-white/30 p-6 shadow-soft">
            <div className="grain absolute inset-0 opacity-34" aria-hidden="true" />
            <div className="absolute left-8 top-20 h-44 w-32 -rotate-6 rounded-xl border border-white/28 bg-white/14 p-3 shadow-soft" aria-hidden="true">
              <div className="h-full rounded-lg bg-[linear-gradient(145deg,rgba(255,248,226,0.62),rgba(114,88,61,0.58))]" />
            </div>
            <span className="relative rounded-full border border-white/18 bg-white/24 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              1970s / Then
            </span>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="max-w-lg font-serif text-4xl leading-tight text-white">Faded postcards, broad sand, slower summers.</p>
            </div>
          </div>
          <div className="archive-now relative min-h-96 overflow-hidden rounded-[1.65rem] border border-white/34 p-6 shadow-glow">
            <div className="grain absolute inset-0 opacity-16" aria-hidden="true" />
            <div className="absolute -right-14 bottom-12 h-44 w-72 rounded-[50%] bg-[color:var(--sand)]/86 shadow-soft" aria-hidden="true" />
            <div className="absolute right-16 top-24 size-3 rounded-full bg-white shadow-glow" aria-hidden="true" />
            <div className="absolute right-28 top-36 size-3 rounded-full bg-[color:var(--coral)] shadow-coral" aria-hidden="true" />
            <span className="relative rounded-full border border-white/16 bg-white/22 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              Today / Now
            </span>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="max-w-lg font-serif text-4xl leading-tight text-white">Neon nights, marina lights, old streets and full beaches.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {archiveEntries.map((entry) => (
            <article key={entry.id} className="glass hover-lift rounded-[1.25rem] p-5 shadow-soft">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--coral)]">{entry.year}</p>
              <h3 className="mt-3 font-serif text-2xl text-[color:var(--ink)]">{entry.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--muted-foreground)]">{entry.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-[color:var(--muted-foreground)]">{archiveDisclaimer}</p>
      </div>
    </section>
  )
}
