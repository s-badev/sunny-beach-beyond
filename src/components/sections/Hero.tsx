export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="grain absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(120deg,var(--foam),transparent_55%,var(--sand))] opacity-70" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--coral)]">
            Coastal Bulgaria field guide
          </p>
          <h1 className="max-w-4xl text-balance font-serif text-5xl font-semibold leading-[0.98] text-[color:var(--ink)] sm:text-6xl lg:text-7xl">
            Sunny Beach & Beyond
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[color:var(--muted-foreground)]">
            A modern one-page guide to Sunny Beach, Nessebar, Sveti Vlas and Elenite, shaped by years of coastal notes.
          </p>
        </div>

        <div className="glass animate-float rounded-3xl p-6 shadow-soft">
          <div className="aspect-[4/3] rounded-2xl bg-[linear-gradient(145deg,var(--sea-deep),var(--turquoise)_48%,var(--sand))]" />
          <p className="mt-5 text-sm leading-6 text-[color:var(--muted-foreground)]">
            Placeholder for a visual map/archive hero treatment.
          </p>
        </div>
      </div>
    </section>
  )
}
