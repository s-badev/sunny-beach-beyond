import { motion } from 'framer-motion'
import { Clock, Martini, Music, Utensils, Waves } from 'lucide-react'
import { nightlife } from '../../data/nightlife'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionLabel } from '../ui/SectionLabel'

const nightlifeIcons = [Waves, Music, Martini, Music, Utensils, Martini]

export function Nightlife() {
  return (
    <MotionSection id="nightlife" className="section-shell overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(32,199,189,0.2),transparent_24rem),linear-gradient(150deg,#071a2d,#04111f_64%,#082c46)] text-white">
      <div className="grain absolute inset-0 opacity-12" aria-hidden="true" />
      <div className="nightlife-glow absolute left-1/4 top-16 size-72 rounded-full bg-[color:var(--coral)]/12 blur-3xl" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]" variants={staggerContainer}>
          <motion.div variants={fadeUp}>
            <SectionLabel>Nightlife</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              The coast doesn&apos;t sleep until you do.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/68">
              From low-lit cocktail terraces to loud open-air clubs, the summer night changes fast from Sunny Beach to Sveti Vlas and Nessebar.
            </p>
          </motion.div>
          <motion.div className="grid gap-4 sm:grid-cols-2" variants={staggerContainer}>
            {nightlife.map((item, index) => {
              const Icon = nightlifeIcons[index] ?? Music

              return (
                <motion.article
                  key={item.id}
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="glass-dark group rounded-[1.35rem] p-5 shadow-soft transition hover:border-[color:var(--coral)]/45 hover:shadow-glow sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-full bg-[color:var(--coral)]/16 text-[color:var(--coral-soft)] transition group-hover:-translate-y-1 group-hover:bg-[color:var(--coral)]/28">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-white/9 px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.13em] text-white/72">
                      <Clock size={13} aria-hidden="true" />
                      {item.bestTime}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2 leading-7 text-white/72">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[0.72rem] font-semibold text-white/76">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
