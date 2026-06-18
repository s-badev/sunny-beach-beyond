import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPinned } from 'lucide-react'
import { useState } from 'react'
import heroImage from '../../assets/sunny-beach-hero.png'

const heroCards = [
  { title: 'Beach Days', detail: '26 C / clear', extra: 'soft sand / clear water', className: 'left-4 top-8 sm:left-10 sm:top-10' },
  { title: 'Party Nights', detail: 'right by the strip', extra: 'bars / clubs / late food', className: 'right-4 top-24 sm:right-12 sm:top-28' },
  { title: 'Old Nessebar', detail: 'UNESCO site', extra: 'old town / sunset walk', className: 'bottom-20 left-4 sm:bottom-24 sm:left-12' },
  { title: 'Sveti Vlas Marina', detail: 'yachts at dusk', extra: 'marina / evening views', className: 'bottom-8 right-4 sm:right-14' },
]

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
      <div className="absolute inset-0 z-0 bg-[linear-gradient(100deg,rgba(7,26,45,0.5)_0%,rgba(7,26,45,0.29)_34%,rgba(7,26,45,0.06)_66%,rgba(7,26,45,0.08)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-80 bg-[linear-gradient(180deg,transparent,rgba(7,26,45,0.45))]" aria-hidden="true" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_23%_52%,rgba(7,26,45,0.24),transparent_24rem)]" aria-hidden="true" />
      <div className="grain absolute inset-0 z-0 opacity-10" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="relative pt-4 drop-shadow-[0_18px_45px_rgba(0,0,0,0.34)] sm:pt-8">
          <div className="absolute -inset-x-6 -inset-y-5 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_28%_44%,rgba(7,26,45,0.52),rgba(7,26,45,0.24)_42%,transparent_72%)] blur-xl" aria-hidden="true" />
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--coral-soft)]">
            A coastal Bulgaria field guide
          </p>
          <h1 className="max-w-4xl text-balance font-serif text-5xl font-semibold leading-[0.92] sm:text-7xl lg:text-7xl xl:text-8xl">
            Sunny Beach
            <span className="block text-[color:var(--sand)]">&amp; Beyond.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/78 sm:mt-7 sm:text-lg sm:leading-8">
            Explore beaches, nightlife, history, local spots and hidden corners around Sunny Beach, Nessebar, Sveti Vlas and Elenite - shaped by 20 years of summers, walks, nights out and changes along the coast.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a href="#vibes" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--sand)] px-6 py-3 text-center text-sm font-bold text-[color:var(--ink)] shadow-coral transition duration-300 hover:-translate-y-1 hover:bg-[#ffe2aa] hover:shadow-glow sm:w-auto">
              Choose Your Vibe
              <ArrowRight className="transition group-hover:translate-x-1" size={17} aria-hidden="true" />
            </a>
            <a href="#map" className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-6 py-3 text-center text-sm font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/36 hover:bg-white/18 hover:shadow-glow sm:w-auto">
              <MapPinned className="transition group-hover:-translate-y-0.5" size={17} aria-hidden="true" />
              Open Interactive Map
            </a>
          </div>
        </div>

        <motion.div
          className="pointer-events-none relative hidden min-h-[24rem] overflow-visible rounded-[2rem] sm:block lg:min-h-[33rem]"
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
          {heroCards.map((card) => (
            <motion.div
              key={card.title}
              tabIndex={0}
              className={`group/card glass-dark pointer-events-auto absolute z-20 rounded-2xl px-3 py-2.5 text-white shadow-soft ring-1 ring-white/10 transition duration-300 hover:bg-white/18 hover:shadow-glow focus-visible:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:px-3.5 sm:py-3 ${card.className}`}
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
      <a href="#vibes" className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/72 transition hover:text-white sm:flex">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em]">Scroll</span>
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
