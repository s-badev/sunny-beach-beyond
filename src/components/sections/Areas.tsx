import { motion } from 'framer-motion'
import { areas } from '../../data/areas'
import { fadeUp, MotionSection, staggerContainer } from '../ui/motion'
import { SectionLabel } from '../ui/SectionLabel'

const areaVisuals: Record<string, string> = {
  'Sunny Beach': 'area-visual-sunny',
  Nessebar: 'area-visual-nessebar',
  'Sveti Vlas': 'area-visual-sveti-vlas',
  Elenite: 'area-visual-elenite',
}

const areaInsights: Record<string, { bestFor: string; avoidIf: string; tip: string }> = {
  'sunny-beach': {
    bestFor: 'first-time visitors, nightlife, easy access',
    avoidIf: 'you want silence or a village pace',
    tip: 'north, center and south behave like different trips, so check the exact hotel zone.',
  },
  nessebar: {
    bestFor: 'history, old streets, photos',
    avoidIf: 'you hate peak-season crowds',
    tip: 'go earlier or near golden hour when the old town has more room to breathe.',
  },
  'sveti-vlas': {
    bestFor: 'marina evenings, calmer stays, bay views',
    avoidIf: 'you want the loudest party strip on foot',
    tip: 'pair the beach with Marina Dinevi instead of treating it as only a hotel area.',
  },
  elenite: {
    bestFor: 'quiet resort-edge beach time',
    avoidIf: 'you need flexible late-night movement',
    tip: 'plan return transport and treat it as a slower northern-coast day.',
  },
}

type AreasProps = {
  selectedArea: string
  onSelectArea: (areaId: string) => void
}

export function Areas({ selectedArea, onSelectArea }: AreasProps) {
  const selectedAreaItem = areas.find((area) => area.id === selectedArea) ?? areas[0]
  const selectedInsight = areaInsights[selectedAreaItem.id]

  return (
    <MotionSection id="areas" className="section-shell overflow-hidden bg-[color:var(--foam)]/45">
      <div className="absolute -right-32 top-16 size-96 rounded-full bg-[color:var(--turquoise)]/18 blur-3xl" aria-hidden="true" />
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Areas</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              Four neighbourhoods, one coastline.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)]">
            The Bulgarian Black Sea changes character every few kilometres. Here are the four faces worth knowing before you go.
          </p>
        </motion.div>
        <motion.div className="mt-10 grid gap-5 md:grid-cols-2" variants={staggerContainer}>
          {areas.map((area, index) => (
            <motion.button
              key={area.id}
              type="button"
              variants={fadeUp}
              onClick={() => onSelectArea(area.id)}
              data-active={selectedArea === area.id}
              className={`interactive-card active-rail group overflow-hidden rounded-[1.45rem] border bg-white/82 text-left shadow-soft ${
                selectedArea === area.id ? 'border-[color:var(--coral)]/55 bg-white/92 ring-2 ring-[color:var(--coral)]/14' : 'border-white/70 hover:border-[color:var(--turquoise)]/45'
              }`}
            >
              <div className={`relative h-40 overflow-hidden transition-transform duration-700 group-hover:scale-[1.035] group-data-[active=true]:scale-[1.025] ${areaVisuals[area.name]}`}>
                <div className="absolute inset-0 grain opacity-30" aria-hidden="true" />
                <div className="absolute left-5 top-5 rounded-full bg-white/18 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  Area {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--coral)]">{area.mood}</p>
                <h3 className="mt-3 font-serif text-3xl text-[color:var(--ink)]">{area.name}</h3>
                <p className="mt-2 font-semibold text-[color:var(--sea-deep)]">{area.subtitle}</p>
                <p className="mt-3.5 leading-7 text-[color:var(--muted-foreground)]">{area.description}</p>
                <div className="mt-4 grid gap-2 text-sm leading-5 sm:grid-cols-2">
                  <p className="rounded-2xl border border-white/70 bg-white/56 px-3 py-2 text-[color:var(--ink)]">
                    <span className="block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--sea-deep)]/58">Best for</span>
                    <span className="mt-1 block font-semibold">{areaInsights[area.id].bestFor}</span>
                  </p>
                  <p className="rounded-2xl border border-white/70 bg-white/42 px-3 py-2 text-[color:var(--muted-foreground)]">
                    <span className="block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--coral)]/72">Avoid if</span>
                    <span className="mt-1 block font-medium">{areaInsights[area.id].avoidIf}</span>
                  </p>
                </div>
                <div className="soft-reveal mt-4">
                  <p className="rounded-2xl border border-[color:var(--border)]/70 bg-[color:var(--foam)]/72 px-4 py-3 text-sm font-medium leading-6 text-[color:var(--ink)] transition group-hover:border-[color:var(--turquoise)]/45 group-hover:bg-white/82">
                    <span className="block font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-[color:var(--coral)]">Local tip</span>
                    <span className="mt-1 block">{areaInsights[area.id].tip}</span>
                    <span className="mt-2 block text-[color:var(--muted-foreground)]">{area.practicalNote}</span>
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span key={tag} className="interactive-control translate-y-0 rounded-full border border-[color:var(--border)] bg-white/36 px-3 py-1 text-xs font-semibold text-[color:var(--sea-deep)] opacity-80 group-hover:opacity-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          key={selectedAreaItem.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mt-5 overflow-hidden rounded-[1.25rem] border-[color:var(--turquoise)]/28 shadow-soft"
        >
          <div className="grid gap-4 p-5 md:grid-cols-[0.72fr_1fr] sm:p-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--coral)]">Area read</p>
              <h3 className="mt-2 font-serif text-3xl text-[color:var(--ink)]">{selectedAreaItem.name}</h3>
              <p className="mt-2 text-sm font-semibold text-[color:var(--sea-deep)]">{selectedAreaItem.mood}</p>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/70 bg-white/62 px-4 py-3">
                <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Best for</span>
                <span className="mt-1.5 block text-sm font-bold leading-5 text-[color:var(--ink)]">{selectedInsight.bestFor}</span>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/62 px-4 py-3">
                <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Avoid if</span>
                <span className="mt-1.5 block text-sm font-bold leading-5 text-[color:var(--ink)]">{selectedInsight.avoidIf}</span>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/62 px-4 py-3">
                <span className="block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Local tip</span>
                <span className="mt-1.5 block text-sm font-bold leading-5 text-[color:var(--ink)]">{selectedInsight.tip}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  )
}
