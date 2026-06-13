import { ArrowRight, MapPinned, Waves } from 'lucide-react'

const heroCards = [
  { title: 'Beach Days', detail: '26 C / clear', className: 'left-5 top-8' },
  { title: 'Party Nights', detail: 'open till 6am', className: 'right-5 top-20' },
  { title: 'Old Nessebar', detail: 'UNESCO site', className: 'bottom-24 left-7' },
  { title: 'Sveti Vlas Marina', detail: 'yachts at dusk', className: 'bottom-8 right-7' },
]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 text-white sm:px-8 lg:pb-24 lg:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,26,45,0.94),rgba(6,59,91,0.76)_42%,rgba(32,199,189,0.34)),radial-gradient(circle_at_82%_22%,rgba(240,111,97,0.32),transparent_18rem)]" />
      <div className="coastline-card absolute inset-y-8 right-0 hidden w-[54vw] rounded-l-[3rem] opacity-70 blur-[1px] lg:block" aria-hidden="true" />
      <div className="grain absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="pt-8">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--coral-soft)]">
            A coastal Bulgaria field guide
          </p>
          <h1 className="max-w-4xl text-balance font-serif text-6xl font-semibold leading-[0.9] sm:text-7xl lg:text-8xl">
            Sunny Beach
            <span className="block text-[color:var(--sand)]">&amp; Beyond.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/76">
            Explore beaches, nightlife, history, local spots and hidden corners around Sunny Beach, Nessebar, Sveti Vlas and Elenite - shaped by 20 years of summers, walks, nights out and changes along the coast.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#vibes" className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--sand)] px-6 py-3 text-sm font-bold text-[color:var(--ink)] shadow-coral transition hover:-translate-y-0.5">
              Choose Your Vibe
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#map-preview" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/22 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16">
              <MapPinned size={17} aria-hidden="true" />
              Open Interactive Map
            </a>
          </div>
        </div>

        <div className="coastline-card animate-float-slow shadow-glow">
          <div className="absolute left-8 top-8 z-10 flex items-center gap-2 rounded-full bg-white/18 px-4 py-2 text-sm font-semibold backdrop-blur">
            <Waves size={17} aria-hidden="true" />
            Burgas Bay field notes
          </div>
          <div className="absolute inset-x-8 bottom-40 z-10 h-px bg-white/30" />
          <div className="absolute bottom-40 left-[29%] z-10 size-3 rounded-full bg-[color:var(--coral)] shadow-coral" />
          <div className="absolute bottom-52 left-[45%] z-10 size-3 rounded-full bg-[color:var(--sand)] shadow-glow" />
          <div className="absolute bottom-64 left-[62%] z-10 size-3 rounded-full bg-white shadow-glow" />
          <div className="absolute right-10 top-1/2 z-10 h-36 w-28 rotate-6 rounded-2xl border border-white/30 bg-white/18 p-3 shadow-soft backdrop-blur">
            <div className="h-full rounded-xl bg-[linear-gradient(145deg,#f2d9aa,#087996)] opacity-80" />
          </div>
          <div className="absolute left-12 top-1/2 z-10 h-32 w-24 -rotate-6 rounded-2xl border border-white/30 bg-white/16 p-3 shadow-soft backdrop-blur">
            <div className="h-full rounded-xl bg-[linear-gradient(145deg,#d9b26d,#071a2d)] opacity-80" />
          </div>
          {heroCards.map((card) => (
            <div key={card.title} className={`glass-dark absolute z-20 rounded-2xl px-4 py-3 text-white shadow-soft ${card.className}`}>
              <p className="font-serif text-lg">{card.title}</p>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/70">{card.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
