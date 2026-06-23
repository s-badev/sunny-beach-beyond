import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Compass, MapPinned, MousePointer2 } from 'lucide-react'
import heroImage from '../../assets/sunny-beach-hero.png'

const heroStats = [
  ['4 zones', 'one coast'],
  ['20 years', 'local rhythm'],
  ['map + routes', 'built in'],
]

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

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

      <div className="relative mx-auto flex min-h-[calc(100svh-12rem)] w-full min-w-0 max-w-7xl items-center sm:min-h-[calc(100svh-10rem)]">
        <motion.div
          className="relative w-full min-w-0 max-w-4xl pt-4 drop-shadow-[0_18px_45px_rgba(0,0,0,0.36)] sm:pt-8"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-x-6 -inset-y-5 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_28%_44%,rgba(7,26,45,0.58),rgba(7,26,45,0.26)_42%,transparent_72%)] blur-xl" aria-hidden="true" />
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white/10 px-3.5 py-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--coral-soft)] backdrop-blur">
            <Compass size={14} aria-hidden="true" />
            Coastal Bulgaria field guide
          </p>
          <h1 className="max-w-full text-balance font-serif text-[2.65rem] font-semibold leading-[0.92] sm:text-7xl lg:text-7xl xl:text-8xl">
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
            <a href="#vibes" className="group interactive-control inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/24 bg-[color:var(--sea-deep)] px-6 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_18px_42px_rgba(3,17,31,0.36)] ring-1 ring-white/12 transition duration-300 hover:-translate-y-1 hover:border-white/32 hover:bg-[color:var(--sea)] hover:text-white hover:shadow-[0_22px_52px_rgba(3,17,31,0.42)] focus-visible:text-white active:text-white sm:w-auto">
              <span>Choose Your Vibe</span>
              <ArrowRight className="text-white transition group-hover:translate-x-1" size={17} aria-hidden="true" />
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
