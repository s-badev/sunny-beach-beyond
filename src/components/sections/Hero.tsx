import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Compass, MapPinned, MousePointer2 } from 'lucide-react'
import { useState } from 'react'
import heroImage from '../../assets/sunny-beach-hero.png'

const heroCards = [
  { title: 'Beach Days', detail: 'sand / swim / shade', extra: 'pick the right strip', className: 'left-2 top-3 xl:left-4 xl:top-6 2xl:left-8 2xl:top-8' },
  { title: 'Sveti Vlas Marina', detail: 'yachts / terraces / dusk', extra: 'slow evening mood', className: 'right-2 bottom-3 xl:right-4 xl:bottom-6 2xl:right-8 2xl:bottom-8' },
]

const heroStats = [
  ['4 zones', 'one coast'],
  ['20 years', 'local rhythm'],
  ['map + routes', 'built in'],
]

const coastIndex = ['Sunny Beach', 'Nessebar', 'Sveti Vlas', 'Elenite']

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden px-4 pb-14 pt-32 text-white sm:px-8 sm:pb-20 sm:pt-28 lg:pb-24">
      <motion.img
        src={heroImage}
        alt="Sunny Beach coastline"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{ objectPosition: 'center center' }}
        animate={prefersReducedMotion ? undefined : { scale: [1.01, 1.028, 1.01] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(104deg,rgba(7,26,45,0.58)_0%,rgba(7,26,45,0.36)_35%,rgba(7,26,45,0.08)_68%,rgba(7,26,45,0.12)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-96 bg-[linear-gradient(180deg,transparent,rgba(7,26,45,0.52))]" aria-hidden="true" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_21%_46%,rgba(7,26,45,0.32),transparent_25rem),radial-gradient(circle_at_78%_24%,rgba(242,217,170,0.18),transparent_20rem)]" aria-hidden="true" />
      <div className="grain absolute inset-0 z-0 opacity-10" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 z-0 h-36 bg-[linear-gradient(180deg,rgba(7,26,45,0.32),transparent)]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <motion.div
          className="relative pt-4 drop-shadow-[0_18px_45px_rgba(0,0,0,0.36)] sm:pt-8"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-x-6 -inset-y-5 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_28%_44%,rgba(7,26,45,0.58),rgba(7,26,45,0.26)_42%,transparent_72%)] blur-xl" aria-hidden="true" />
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white/10 px-3.5 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--coral-soft)] backdrop-blur">
            <Compass size={14} aria-hidden="true" />
            Coastal Bulgaria field guide
          </p>
          <h1 className="max-w-4xl text-balance font-serif text-5xl font-semibold leading-[0.92] sm:text-7xl lg:text-7xl xl:text-8xl">
            Sunny Beach
            <span className="block text-[color:var(--sand)]">&amp; Beyond.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/80 sm:mt-7 sm:text-lg sm:leading-8">
            A cinematic local guide to beaches, nightlife, old-town walks, marina evenings and the small coastal decisions that shape a better summer.
          </p>
          <div className="mt-8 grid max-w-2xl gap-2 rounded-[1.35rem] border border-white/14 bg-white/10 p-2 backdrop-blur sm:grid-cols-3">
            {heroStats.map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-white/10 bg-[color:var(--night)]/18 px-3 py-2.5">
                <p className="font-serif text-xl leading-none text-white">{value}</p>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/58">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a href="#vibes" className="group interactive-control inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--sand),#ffe7b8)] px-6 py-3.5 text-center text-sm font-extrabold text-[#071a2d] shadow-coral ring-1 ring-white/34 transition duration-300 hover:-translate-y-1 hover:text-[#071a2d] hover:shadow-glow focus-visible:text-[#071a2d] active:text-[#071a2d] sm:w-auto">
              <span>Choose Your Vibe</span>
              <ArrowRight className="text-[#071a2d] transition group-hover:translate-x-1" size={17} aria-hidden="true" />
            </a>
            <a href="#map" className="group interactive-control inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-6 py-3.5 text-center text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/18 hover:shadow-glow sm:w-auto">
              <MapPinned className="transition group-hover:-translate-y-0.5" size={17} aria-hidden="true" />
              Open Interactive Map
            </a>
          </div>
          <a href="#vibes" className="interactive-control mt-7 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/8 px-3.5 py-2 text-sm font-semibold text-white/76 backdrop-blur hover:bg-white/12 hover:text-white sm:hidden">
            <MousePointer2 size={15} aria-hidden="true" />
            Continue the guide
          </a>
        </motion.div>

        <motion.div
          className="pointer-events-none relative hidden min-h-[24rem] overflow-visible rounded-[2rem] lg:block lg:min-h-[33rem]"
          onPointerMove={(event) => {
            if (prefersReducedMotion) return
            const rect = event.currentTarget.getBoundingClientRect()
            setTilt({
              x: ((event.clientY - rect.top) / rect.height - 0.5) * -5,
              y: ((event.clientX - rect.left) / rect.width - 0.5) * 6,
            })
          }}
          onPointerLeave={() => setTilt({ x: 0, y: 0 })}
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          <div className="absolute inset-8 rounded-[2rem] border border-white/12 bg-[color:var(--night)]/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[2px]" aria-hidden="true" />
          <div className="absolute left-1/2 top-1/2 z-20 w-[min(21rem,68%)] -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] border border-white/16 bg-white/10 p-4 shadow-soft backdrop-blur-md xl:w-[min(21rem,62%)]">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sand)]">Coast index</p>
            <div className="mt-4 grid gap-2">
              {coastIndex.map((place, index) => (
                <div key={place} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/8 px-3 py-2">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/12 font-mono text-[0.65rem] text-white/72">{index + 1}</span>
                  <span className="font-serif text-lg leading-none text-white">{place}</span>
                </div>
              ))}
            </div>
          </div>
          {heroCards.map((card) => (
            <motion.div
              key={card.title}
              tabIndex={0}
              className={`group/card glass-dark pointer-events-auto absolute z-10 max-w-[11.75rem] rounded-2xl px-3.5 py-3 text-white shadow-soft ring-1 ring-white/10 transition duration-300 hover:z-30 hover:bg-white/18 hover:shadow-glow focus-visible:z-30 focus-visible:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${card.className}`}
              animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: heroCards.indexOf(card) * 0.45 }}
              whileHover={prefersReducedMotion ? undefined : { y: -7, scale: 1.02 }}
              whileFocus={prefersReducedMotion ? undefined : { y: -7, scale: 1.02 }}
            >
              <p className="font-serif text-base sm:text-lg">{card.title}</p>
              <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-white/72 sm:text-[0.68rem]">{card.detail}</p>
              <p className="mt-1 max-h-0 overflow-hidden font-mono text-[0.58rem] uppercase tracking-[0.14em] text-white/0 transition-all duration-300 group-hover/card:max-h-5 group-hover/card:text-white/78 group-focus-visible/card:max-h-5 group-focus-visible/card:text-white/78 sm:text-[0.62rem]">
                {card.extra}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <a href="#vibes" className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 rounded-full px-3 py-2 text-white/72 transition hover:bg-white/8 hover:text-white sm:flex">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em]">Continue the guide</span>
        <span className="relative h-8 w-px overflow-hidden rounded-full bg-white/24">
          <motion.span
            className="absolute left-0 top-0 h-3 w-px rounded-full bg-white/80"
            animate={prefersReducedMotion ? undefined : { y: [0, 20, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </a>
    </section>
  )
}
