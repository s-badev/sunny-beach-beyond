import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  Clock3,
  Coffee,
  Compass,
  Footprints,
  MapPinned,
  Martini,
  Moon,
  Navigation,
  Route,
  Search,
  Sparkles,
  Sun,
  Utensils,
  Users,
  Waves,
  type LucideIcon,
} from 'lucide-react'
import { experienceScenarios, guidePlaces } from '../../data/experiences'
import type { ExperienceFilterId, ExperienceScenario, GuideBestTime, GuideBudget, GuideFitLevel, GuideNoise, GuidePlace, GuidePlaceType, GuidePriceFeel, MediaTone } from '../../types'
import { fadeUp, staggerContainer } from '../ui/motion'
import { PhotoFrame } from '../ui/PhotoFrame'
import { SectionIntro } from '../ui/SectionIntro'
import { SectionLabel } from '../ui/SectionLabel'

type FilterOption = {
  id: ExperienceFilterId
  label: string
  description: string
  icon: LucideIcon
}

type PlaceGroup = {
  id: string
  label: string
  description: string
  places: GuidePlace[]
}

const filterOptions: FilterOption[] = [
  { id: 'all', label: 'All', description: 'Everything in the guide layer', icon: Compass },
  { id: 'party', label: 'Party', description: 'Loud nights and social routes', icon: Moon },
  { id: 'families', label: 'Families', description: 'Kid-friendly and simple logistics', icon: Users },
  { id: 'couples', label: 'Couples', description: 'Views, dinner and slower evenings', icon: Sparkles },
  { id: 'older-visitors', label: 'Older visitors', description: 'Calmer, lower-friction choices', icon: Footprints },
  { id: 'budget', label: 'Budget', description: 'Lower-cost or practical choices', icon: CheckCircle2 },
  { id: 'premium', label: 'Premium', description: 'Marina polish and elevated evenings', icon: BadgeCheck },
  { id: 'calm', label: 'Calm', description: 'Quiet, slower and less central', icon: Coffee },
  { id: 'daytime', label: 'Daytime', description: 'Morning, beach and day activity plans', icon: Sun },
  { id: 'evening', label: 'Evening', description: 'Sunset, dinner and night routes', icon: Clock3 },
  { id: 'water-sports', label: 'Water sports', description: 'Sea activity and beach action', icon: Waves },
  { id: 'attractions', label: 'Attractions', description: 'Amusements, rides and activity anchors', icon: Sparkles },
  { id: 'food-drinks', label: 'Food & drinks', description: 'Restaurants, cafes, bars and late food', icon: Utensils },
]

const typeLabels: Record<GuidePlaceType, string> = {
  restaurant: 'Restaurant',
  bar: 'Bar',
  cafe: 'Cafe',
  club: 'Club',
  attraction: 'Attraction',
  'water-sport': 'Water sport',
  walk: 'Walk',
  viewpoint: 'Viewpoint',
  family: 'Family',
  transport: 'Transport',
}

const typeIcons: Record<GuidePlaceType, LucideIcon> = {
  restaurant: Utensils,
  bar: Martini,
  cafe: Coffee,
  club: Moon,
  attraction: Sparkles,
  'water-sport': Waves,
  walk: Footprints,
  viewpoint: Camera,
  family: Users,
  transport: Navigation,
}

const noiseLabels: Record<GuideNoise, string> = {
  quiet: 'Quiet',
  medium: 'Medium noise',
  loud: 'Loud',
}

const bestTimeLabels: Record<GuideBestTime, string> = {
  morning: 'Morning',
  day: 'Day',
  sunset: 'Sunset',
  evening: 'Evening',
  'late-night': 'Late night',
}

const priceFeelLabels: Record<GuidePriceFeel, string> = {
  budget: 'Budget',
  'mid-range': 'Mid-range',
  premium: 'Premium',
}

const fitLevelLabels: Record<GuideFitLevel, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
}

const budgetTone: Record<GuideBudget, string> = {
  low: 'border-[color:var(--turquoise)]/22 bg-[color:var(--foam)] text-[color:var(--sea-deep)]',
  medium: 'border-[color:var(--border)] bg-white/72 text-[color:var(--sea-deep)]',
  high: 'border-[color:var(--coral)]/20 bg-[color:var(--coral-soft)]/38 text-[color:var(--ink)]',
}

const noiseTone: Record<GuideNoise, string> = {
  quiet: 'border-[color:var(--turquoise)]/22 bg-[color:var(--foam)] text-[color:var(--sea-deep)]',
  medium: 'border-[color:var(--sand)]/70 bg-[color:var(--sand)]/34 text-[color:var(--ink)]',
  loud: 'border-[color:var(--coral)]/22 bg-[color:var(--coral-soft)]/36 text-[color:var(--ink)]',
}

const placeGroupOrder: Array<Omit<PlaceGroup, 'places'> & { types: GuidePlaceType[] }> = [
  {
    id: 'food-drinks',
    label: 'Food, dinner & coffee',
    description: 'Restaurants, cafes, calm food stops and practical meal decisions.',
    types: ['restaurant', 'cafe'],
  },
  {
    id: 'nightlife',
    label: 'Bars & nightlife',
    description: 'Beach-bar warmups, south-side party logic and calmer drink choices.',
    types: ['bar', 'club'],
  },
  {
    id: 'attractions',
    label: 'Attractions & family moves',
    description: 'Amusement lights, family anchors and easy resort movement.',
    types: ['attraction', 'family', 'transport'],
  },
  {
    id: 'water-sports',
    label: 'Water sports',
    description: 'Daytime sea activity and beach action.',
    types: ['water-sport'],
  },
  {
    id: 'walks-views',
    label: 'Walks & views',
    description: 'Golden-hour routes, marina walks and calmer scenic choices.',
    types: ['walk', 'viewpoint'],
  },
]

function matchesFilter(place: GuidePlace, filterId: ExperienceFilterId) {
  if (filterId === 'all') return true
  if (filterId === 'party') return place.audience.includes('party') || place.type === 'club' || place.noise === 'loud'
  if (filterId === 'families') return place.audience.includes('families') || place.type === 'family'
  if (filterId === 'couples') return place.audience.includes('couples')
  if (filterId === 'older-visitors') return place.audience.includes('older-visitors')
  if (filterId === 'budget') return place.audience.includes('budget') || place.budget === 'low'
  if (filterId === 'premium') return place.audience.includes('premium') || place.budget === 'high'
  if (filterId === 'calm') return place.audience.includes('calm') || place.noise === 'quiet'
  if (filterId === 'daytime') return place.bestTime === 'morning' || place.bestTime === 'day'
  if (filterId === 'evening') return place.bestTime === 'sunset' || place.bestTime === 'evening' || place.bestTime === 'late-night'
  if (filterId === 'water-sports') return place.type === 'water-sport'
  if (filterId === 'attractions') return place.type === 'attraction' || place.type === 'family'
  if (filterId === 'food-drinks') return place.type === 'restaurant' || place.type === 'bar' || place.type === 'cafe' || place.type === 'club'

  return true
}

function groupPlaces(places: GuidePlace[]): PlaceGroup[] {
  return placeGroupOrder
    .map((group) => ({
      id: group.id,
      label: group.label,
      description: group.description,
      places: places.filter((place) => group.types.includes(place.type)),
    }))
    .filter((group) => group.places.length > 0)
}

function frameToneForPlace(place: GuidePlace): MediaTone {
  if (place.priceFeel === 'premium' || place.area === 'Sveti Vlas') return 'premium'
  if (place.priceFeel === 'budget' || place.budget === 'low') return 'budget'
  if (place.type === 'restaurant') return 'food'
  if (place.type === 'cafe') return 'cafe'
  if (place.type === 'bar' || place.type === 'club') return 'nightlife'
  if (place.type === 'attraction' || place.type === 'family' || place.type === 'transport') return 'attraction'
  if (place.type === 'water-sport') return 'water'
  if (place.type === 'walk' || place.type === 'viewpoint') return 'walk'

  return 'coastal'
}

function editorialLabelForPlace(place: GuidePlace) {
  if (place.priceFeel === 'premium' || place.area === 'Sveti Vlas') return 'Premium route'
  if (place.priceFeel === 'budget' || place.budget === 'low') return 'Smart pick'
  if (place.type === 'restaurant') return 'Food stop'
  if (place.type === 'cafe') return 'Coffee pause'
  if (place.type === 'bar') return 'Evening mood'
  if (place.type === 'club') return 'Night route'
  if (place.type === 'attraction') return 'Local attraction'
  if (place.type === 'family' || place.type === 'transport') return 'Family stop'
  if (place.type === 'water-sport') return 'Water activity'
  if (place.type === 'walk' || place.type === 'viewpoint') return 'View route'

  return 'Coastal guide'
}

function compactRouteLabel(place: GuidePlace) {
  if (place.type === 'water-sport') return 'Use with beach route'
  if (place.area === 'Sveti Vlas') return 'Use with marina route'
  if (place.area === 'Nessebar') return 'Use with old-town route'
  if (place.area === 'Elenite') return 'Use with quiet bay route'
  if (place.type === 'bar' || place.type === 'club') return 'Use with nightlife route'
  if (place.type === 'family' || place.type === 'attraction' || place.type === 'transport') return 'Use with family route'

  return 'Use with Local Routes'
}

function groupGuidance(groupId: string) {
  if (groupId === 'food-drinks') return 'Choose by noise first, then view, then return transport.'
  if (groupId === 'nightlife') return 'Decide the end of the night before choosing the first drink.'
  if (groupId === 'attractions') return 'Keep movement simple: one anchor, one food stop, one return plan.'
  if (groupId === 'water-sports') return 'Daytime only: check conditions locally before committing.'
  if (groupId === 'walks-views') return 'Use walks and viewpoints before dinner, when transfers can stay simple.'

  return 'Use the cards as planning prompts, then refine the route.'
}

function FilterButton({ option, isSelected, count, onSelect }: { option: FilterOption; isSelected: boolean; count: number; onSelect: () => void }) {
  const Icon = option.icon

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onSelect}
      className={`interactive-control inline-flex min-h-11 items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-bold ${
        isSelected
          ? 'border-[color:var(--sea-deep)] bg-[color:var(--sea-deep)] text-white shadow-glow'
          : 'border-[color:var(--border)]/76 bg-white/70 text-[color:var(--sea-deep)] hover:border-[color:var(--turquoise)] hover:bg-white'
      }`}
    >
      <Icon size={15} aria-hidden="true" />
      <span>{option.label}</span>
      <span className={`rounded-full px-2 py-0.5 font-mono text-[0.62rem] ${isSelected ? 'bg-white/18 text-white/78' : 'bg-[color:var(--foam)] text-[color:var(--sea-deep)]/68'}`}>
        {count}
      </span>
    </button>
  )
}

function PlaceCard({ place, isSelected, isFeatured, onSelect }: { place: GuidePlace; isSelected: boolean; isFeatured?: boolean; onSelect: () => void }) {
  const TypeIcon = typeIcons[place.type]

  return (
    <motion.button
      type="button"
      variants={fadeUp}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      onClick={onSelect}
      data-active={isSelected}
      aria-pressed={isSelected}
      aria-label={`Select ${place.name}`}
      className={`interactive-card active-rail group min-w-0 overflow-hidden rounded-[1.35rem] border p-0 text-left shadow-soft ${isFeatured ? 'md:col-span-2' : ''} ${
        isSelected ? 'border-[color:var(--coral)]/78 bg-white/92 ring-2 ring-[color:var(--coral)]/26 shadow-coral' : 'border-white/72 bg-white/64 hover:bg-white/78'
      }`}
    >
      <PhotoFrame
        mediaKey={place.photoKey}
        tone={frameToneForPlace(place)}
        title={place.name}
        subtitle={`${typeLabels[place.type]} / ${bestTimeLabels[place.bestTime]}`}
        areaLabel={place.area}
        categoryLabel={isSelected ? 'Selected pick' : typeLabels[place.type]}
        editorialLabel={editorialLabelForPlace(place)}
        icon={isSelected ? BadgeCheck : TypeIcon}
        selected={isSelected}
        heightClassName={isFeatured ? 'min-h-[13.5rem]' : 'min-h-[11.5rem]'}
        className="rounded-b-none border-0 border-b border-white/64"
      />

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {isSelected && <span className="rounded-full bg-[color:var(--coral)] px-3 py-1.5 text-[0.68rem] font-bold leading-none text-white shadow-coral">Selected</span>}
          <span className={`rounded-full border px-3 py-1.5 text-[0.68rem] font-bold leading-none ${budgetTone[place.budget]}`}>{priceFeelLabels[place.priceFeel ?? 'mid-range']}</span>
          <span className={`rounded-full border px-3 py-1.5 text-[0.68rem] font-bold leading-none ${noiseTone[place.noise]}`}>{noiseLabels[place.noise]}</span>
          <span className="rounded-full border border-[color:var(--border)] bg-white/72 px-3 py-1.5 text-[0.68rem] font-bold leading-none text-[color:var(--sea-deep)]">{bestTimeLabels[place.bestTime]}</span>
        </div>
        <p className="mt-4 font-serif text-[1.35rem] leading-tight text-[color:var(--ink)]">{place.bestFor}</p>
        <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{place.description}</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <div className="rounded-[0.95rem] bg-[color:var(--foam)]/66 px-3 py-2">
            <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--sea-deep)]/62">Family</p>
            <p className="mt-1 text-sm font-bold text-[color:var(--ink)]">{fitLevelLabels[place.familyFit ?? 'medium']}</p>
          </div>
          <div className="rounded-[0.95rem] bg-white/66 px-3 py-2">
            <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--sea-deep)]/62">Route</p>
            <p className="mt-1 text-sm font-bold leading-5 text-[color:var(--ink)]">{compactRouteLabel(place)}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {place.audience.slice(0, 4).map((audience) => (
            <span key={audience} className="rounded-full border border-white/80 bg-white/62 px-2.5 py-1 text-[0.72rem] font-semibold text-[color:var(--sea-deep)]">
              {audience.replace('-', ' ')}
            </span>
          ))}
        </div>
        <div className="guide-action-row mt-4">
          <span className="min-w-0 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-[color:var(--sea-deep)]/68">
            {isSelected ? 'Recommendation active' : 'Open guide detail'}
          </span>
          <ArrowRight size={14} className="shrink-0 text-[color:var(--coral)]" aria-hidden="true" />
        </div>
      </div>
    </motion.button>
  )
}

function DetailPanel({ place }: { place: GuidePlace }) {
  const TypeIcon = typeIcons[place.type]

  return (
    <AnimatePresence mode="wait">
      <motion.aside
        key={place.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.24 }}
        className="panel-sheen min-w-0 rounded-[1.55rem] border border-[color:var(--turquoise)]/24 bg-white/82 p-4 shadow-soft sm:p-5"
      >
        <PhotoFrame
          mediaKey={place.photoKey}
          tone={frameToneForPlace(place)}
          title={place.name}
          subtitle={`${typeLabels[place.type]} / ${bestTimeLabels[place.bestTime]}`}
          areaLabel={place.area}
          categoryLabel="Selected guide"
          editorialLabel={editorialLabelForPlace(place)}
          icon={TypeIcon}
          selected
          heightClassName="min-h-[16rem]"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            priceFeelLabels[place.priceFeel ?? 'mid-range'],
            noiseLabels[place.noise],
            bestTimeLabels[place.bestTime],
            `${fitLevelLabels[place.familyFit ?? 'medium']} family`,
            `${fitLevelLabels[place.viewValue ?? 'medium']} view`,
          ].map((item) => (
            <span key={item} className="rounded-full border border-[color:var(--border)]/72 bg-white/72 px-3 py-1.5 text-[0.7rem] font-bold text-[color:var(--sea-deep)]">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 rounded-[1.25rem] border border-[color:var(--turquoise)]/22 bg-[color:var(--foam)]/66 p-4">
          <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]">
            <Compass size={14} aria-hidden="true" />
            Local read
          </p>
          <p className="mt-2 font-serif text-xl leading-tight text-[color:var(--ink)]">{place.bestFor}</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--sea-deep)]">{place.localTip}</p>
        </div>

        <div className="mt-3 grid gap-3">
          <div className="route-connection-card rounded-[1.2rem] border border-[color:var(--border)]/72 bg-white/76 p-4">
            <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">
              <Route size={14} aria-hidden="true" />
              Next move
            </p>
            <p className="mt-2 text-sm font-bold leading-6 text-[color:var(--ink)]">{place.goodNextMove}</p>
            <p className="mt-2 text-xs leading-5 text-[color:var(--muted-foreground)]">{place.transportNote}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {(place.nearby ?? [place.area]).map((item) => (
                <span key={item} className="rounded-full border border-[color:var(--border)] bg-white/72 px-2.5 py-1 text-[0.72rem] font-semibold text-[color:var(--sea-deep)]">
                  {item}
                </span>
              ))}
            </div>
            <a href="#routes" className="interactive-control mt-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--turquoise)]/28 bg-white/72 px-3 py-1.5 text-xs font-bold text-[color:var(--sea-deep)] hover:bg-[color:var(--foam)]">
              Open route pairings
              <ArrowRight size={13} aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-[1.2rem] border border-[color:var(--coral)]/18 bg-[color:var(--coral-soft)]/24 p-4">
            <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
              <AlertTriangle size={14} aria-hidden="true" />
              Skip if
            </p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--ink)]">{place.avoidIf}</p>
          </div>

          <div className="rounded-[1.2rem] border border-[color:var(--border)]/70 bg-[color:var(--background)]/64 p-4">
            <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">
              <Sun size={14} aria-hidden="true" />
              Seasonal note
            </p>
            <p className="mt-2 text-xs font-semibold leading-5 text-[color:var(--ink)]">{place.seasonality}</p>
            <p className="mt-2 border-t border-[color:var(--border)]/70 pt-2 text-xs leading-5 text-[color:var(--muted-foreground)]">{place.sourceNote}</p>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  )
}

function RailModule({ title, icon: Icon, children }: { title: string; icon: LucideIcon; children: ReactNode }) {
  return (
    <div className="route-connection-card rounded-[1.25rem] border border-[color:var(--border)]/72 bg-white/76 p-4 shadow-soft">
      <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">
        <Icon size={14} aria-hidden="true" />
        {title}
      </p>
      {children}
    </div>
  )
}

function ScenarioShortcut({
  scenario,
  isSelected,
  onSelect,
}: {
  scenario: ExperienceScenario
  isSelected: boolean
  onSelect: () => void
}) {
  return (
    <motion.button
      type="button"
      variants={fadeUp}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
      onClick={onSelect}
      aria-pressed={isSelected}
      data-active={isSelected}
      className={`interactive-card active-rail min-w-[15.5rem] rounded-[1.15rem] border p-3 text-left shadow-soft sm:min-w-0 ${
        isSelected ? 'border-[color:var(--turquoise)]/58 bg-white/86 ring-2 ring-[color:var(--turquoise)]/16' : 'border-white/70 bg-white/62 hover:bg-white/78'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.15em] text-[color:var(--coral)]">Scenario</p>
          <h3 className="mt-1.5 font-serif text-xl leading-tight text-[color:var(--ink)]">{scenario.title}</h3>
        </div>
        <span className={`grid size-8 shrink-0 place-items-center rounded-full border ${isSelected ? 'border-[color:var(--turquoise)] bg-[color:var(--turquoise)] text-[color:var(--night)]' : 'border-white bg-white/66 text-[color:var(--sea-deep)]'}`}>
          {isSelected ? <BadgeCheck size={15} aria-hidden="true" /> : <Route size={15} aria-hidden="true" />}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <span className="rounded-full border border-[color:var(--border)] bg-white/72 px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)]">{scenario.bestArea}</span>
        <span className="rounded-full border border-[color:var(--border)] bg-white/72 px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)]">{scenario.bestTime}</span>
        <span className="rounded-full border border-[color:var(--border)] bg-white/72 px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)]">{scenario.noiseLevel}</span>
        {scenario.recommendedTypes.slice(0, 2).map((type) => (
          <span key={type} className="rounded-full border border-white/80 bg-white/62 px-2.5 py-1 text-[0.72rem] font-semibold text-[color:var(--sea-deep)]">
            {typeLabels[type]}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm font-semibold leading-5 text-[color:var(--sea-deep)]">{scenario.routePairing}</p>
      <p className="mt-2 rounded-[0.95rem] border border-[color:var(--border)]/70 bg-white/58 px-3 py-2 text-xs font-medium leading-5 text-[color:var(--muted-foreground)]">
        {scenario.routeFlow.slice(0, 2).join(' / ')}
      </p>
      <p className="mt-2 rounded-[0.95rem] border border-[color:var(--coral)]/16 bg-[color:var(--coral-soft)]/22 px-3 py-2 text-xs font-semibold leading-5 text-[color:var(--ink)]">
        Skip if {scenario.avoidIf}
      </p>
    </motion.button>
  )
}

function ScenarioHelperCard({
  title,
  eyebrow,
  icon: Icon,
  variant,
  metadata,
  actionLabel,
  onSelect,
  children,
}: {
  title: string
  eyebrow: string
  icon: LucideIcon
  variant: 'active' | 'note'
  metadata: string[]
  actionLabel: string
  onSelect: () => void
  children: ReactNode
}) {
  const isActive = variant === 'active'

  return (
    <motion.button
      type="button"
      variants={fadeUp}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
      onClick={onSelect}
      data-active={isActive}
      className={`interactive-card active-rail route-connection-card min-w-[15.5rem] rounded-[1.15rem] border p-3 text-left shadow-soft sm:min-w-0 ${
        isActive
          ? 'border-[color:var(--turquoise)]/68 bg-white/88 ring-2 ring-[color:var(--turquoise)]/18'
          : 'border-white/72 bg-white/68 hover:border-[color:var(--turquoise)]/46 hover:bg-white/82'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className={`inline-flex items-center gap-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.15em] ${isActive ? 'text-[color:var(--coral)]' : 'text-[color:var(--sea-deep)]/62'}`}>
            <Icon size={14} aria-hidden="true" />
            {eyebrow}
          </p>
          <h3 className="mt-1.5 font-serif text-xl leading-tight text-[color:var(--ink)]">{title}</h3>
        </div>
        <span className={`grid size-8 shrink-0 place-items-center rounded-full border ${isActive ? 'border-[color:var(--turquoise)] bg-[color:var(--turquoise)] text-[color:var(--night)]' : 'border-white bg-white/68 text-[color:var(--sea-deep)]'}`}>
          {isActive ? <BadgeCheck size={15} aria-hidden="true" /> : <Compass size={15} aria-hidden="true" />}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {metadata.map((item) => (
          <span key={item} className="rounded-full border border-[color:var(--border)] bg-white/72 px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)]">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-3 text-sm font-semibold leading-5 text-[color:var(--sea-deep)]">{children}</div>

      <div className="guide-action-row mt-3">
        <span className="min-w-0 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-[color:var(--sea-deep)]/68">{actionLabel}</span>
        <ArrowRight size={14} className="shrink-0 text-[color:var(--coral)]" aria-hidden="true" />
      </div>
    </motion.button>
  )
}

function PlannerRail({
  selectedPlace,
  selectedScenarioId,
  onSelectScenario,
}: {
  selectedPlace: GuidePlace
  selectedScenarioId: string
  onSelectScenario: (scenario: ExperienceScenario) => void
}) {
  const activeScenario = experienceScenarios.find((scenario) => scenario.id === selectedScenarioId) ?? experienceScenarios[0]

  return (
    <aside className="grid min-w-0 gap-3 xl:sticky xl:top-28 xl:self-start">
      <DetailPanel place={selectedPlace} />

      <RailModule title="Use this with" icon={MapPinned}>
        <p className="mt-3 font-serif text-xl leading-tight text-[color:var(--ink)]">{selectedPlace.routePairing ?? compactRouteLabel(selectedPlace)}</p>
        <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--sea-deep)]">{selectedPlace.goodNextMove}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {(selectedPlace.nearby ?? [selectedPlace.area]).map((item) => (
            <span key={item} className="rounded-full border border-[color:var(--border)] bg-white/72 px-2.5 py-1 text-[0.72rem] font-semibold text-[color:var(--sea-deep)]">
              {item}
            </span>
          ))}
        </div>
      </RailModule>

      <RailModule title="Active mini-plan" icon={Route}>
        <div className="mt-3 rounded-[1rem] border border-[color:var(--turquoise)]/24 bg-[color:var(--foam)]/62 p-3">
          <p className="font-serif text-xl leading-tight text-[color:var(--ink)]">{activeScenario.title}</p>
          <p className="mt-1 text-sm font-semibold leading-6 text-[color:var(--sea-deep)]">{activeScenario.idealAudience}</p>
        </div>
        <ol className="mt-3 grid gap-2">
          {activeScenario.routeFlow.map((step, index) => (
            <li key={step} className="grid grid-cols-[1.65rem_1fr] gap-2 rounded-[0.9rem] bg-white/58 px-3 py-2 text-sm leading-5 text-[color:var(--muted-foreground)]">
              <span className="grid size-6 place-items-center rounded-full bg-[color:var(--sea-deep)] font-mono text-[0.65rem] font-bold text-white">{index + 1}</span>
              <span className="font-semibold text-[color:var(--ink)]">{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 rounded-[0.9rem] border border-[color:var(--coral)]/18 bg-[color:var(--coral-soft)]/24 px-3 py-2 text-xs font-semibold leading-5 text-[color:var(--ink)]">
          Avoid if {activeScenario.avoidIf}
        </p>
      </RailModule>

      <RailModule title="Scenario shortcuts" icon={Sparkles}>
        <div className="mt-3 grid gap-2">
          {experienceScenarios.slice(0, 6).map((scenario) => (
            <button
              key={scenario.id}
              type="button"
              onClick={() => onSelectScenario(scenario)}
              aria-pressed={selectedScenarioId === scenario.id}
              className={`interactive-control flex items-center justify-between gap-3 rounded-[1rem] border px-3 py-2 text-left ${
                selectedScenarioId === scenario.id
                  ? 'border-[color:var(--turquoise)] bg-[color:var(--foam)] text-[color:var(--sea-deep)]'
                  : 'border-[color:var(--border)]/70 bg-white/62 text-[color:var(--ink)] hover:bg-white'
              }`}
            >
              <span className="min-w-0">
                <span className="block text-sm font-bold leading-5">{scenario.title}</span>
                <span className="mt-0.5 block text-[0.68rem] font-semibold uppercase leading-4 tracking-[0.1em] text-[color:var(--muted-foreground)]">
                  {scenario.bestArea} / {scenario.budgetFeel} / {scenario.noiseLevel}
                </span>
              </span>
              {selectedScenarioId === scenario.id ? <BadgeCheck size={15} aria-hidden="true" /> : <ArrowRight size={14} aria-hidden="true" />}
            </button>
          ))}
        </div>
      </RailModule>

      <RailModule title="Quick decision rules" icon={Compass}>
        <div className="mt-3 grid gap-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
          <p>
            <span className="font-bold text-[color:var(--ink)]">Pick by noise first:</span> quiet, medium or loud changes the whole evening.
          </p>
          <p>
            <span className="font-bold text-[color:var(--ink)]">Then check transport:</span> short map distances can still be slow in season.
          </p>
          <p>
            <span className="font-bold text-[color:var(--ink)]">Build a route:</span> combine one food stop, one walk or activity, and one return plan.
          </p>
        </div>
      </RailModule>
    </aside>
  )
}

type PlacesExperiencesProps = {
  onOpenPlaceDetail?: (place: GuidePlace) => void
}

export function PlacesExperiences({ onOpenPlaceDetail }: PlacesExperiencesProps) {
  const [selectedFilter, setSelectedFilter] = useState<ExperienceFilterId>('all')
  const [selectedPlaceId, setSelectedPlaceId] = useState(guidePlaces[0].id)
  const [selectedScenarioId, setSelectedScenarioId] = useState(experienceScenarios[0].id)

  const filterCounts = useMemo(
    () =>
      filterOptions.reduce<Record<ExperienceFilterId, number>>((counts, option) => {
        counts[option.id] = guidePlaces.filter((place) => matchesFilter(place, option.id)).length
        return counts
      }, {} as Record<ExperienceFilterId, number>),
    [],
  )

  const filteredPlaces = useMemo(() => guidePlaces.filter((place) => matchesFilter(place, selectedFilter)), [selectedFilter])
  const groupedPlaces = useMemo(() => groupPlaces(filteredPlaces), [filteredPlaces])
  const selectedPlace = filteredPlaces.find((place) => place.id === selectedPlaceId) ?? filteredPlaces[0] ?? guidePlaces[0]
  const selectedFilterOption = filterOptions.find((option) => option.id === selectedFilter) ?? filterOptions[0]
  const activeScenario = experienceScenarios.find((scenario) => scenario.id === selectedScenarioId) ?? experienceScenarios[0]

  useEffect(() => {
    if (filteredPlaces.length > 0 && !filteredPlaces.some((place) => place.id === selectedPlaceId)) {
      setSelectedPlaceId(filteredPlaces[0].id)
    }
  }, [filteredPlaces, selectedPlaceId])

  function chooseFilter(filterId: ExperienceFilterId) {
    setSelectedFilter(filterId)
  }

  function chooseScenario(scenario: ExperienceScenario) {
    setSelectedScenarioId(scenario.id)
    setSelectedFilter(scenario.primaryFilter)
    setSelectedPlaceId(scenario.featuredPlaceId)
  }

  return (
    <section id="places" className="section-shell overflow-x-clip">
      <div className="section-inner">
        <motion.div className="grid gap-8 lg:grid-cols-[0.74fr_1fr] lg:items-end" variants={fadeUp}>
          <div>
            <SectionLabel>Places &amp; Experiences</SectionLabel>
            <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              Find the right place for the day you actually want.
            </h2>
          </div>
          <SectionIntro label="Experience finder">
            Browse real guide-style places and coastal experiences by audience, budget, noise, time of day and activity type, then open a practical detail panel before shaping a route.
          </SectionIntro>
        </motion.div>

        <motion.div className="mt-8 grid gap-4" variants={fadeUp}>
          <div>
            <div className="grid gap-4 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:items-start">
              <div className="route-connection-card rounded-[1.35rem] border border-[color:var(--border)]/72 bg-white/76 p-4 shadow-soft">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">
                      <Search size={14} aria-hidden="true" />
                      Current finder
                    </p>
                    <p className="mt-2 font-serif text-2xl leading-tight text-[color:var(--ink)]">{selectedFilterOption.label}</p>
                  </div>
                  <span className="rounded-full bg-[color:var(--sea-deep)] px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-white">
                    {filteredPlaces.length} matches
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-[color:var(--muted-foreground)]">{selectedFilterOption.description}</p>
                <div className="mt-3 rounded-[1rem] border border-[color:var(--coral)]/16 bg-[color:var(--coral-soft)]/24 px-3 py-2 text-xs leading-5 text-[color:var(--ink)]">
                  Starter content uses stable local anchors and editorial guidance. Verify live details locally in season.
                </div>
              </div>

              <div className="flex flex-wrap gap-2" aria-label="Experience filters">
                {filterOptions.map((option) => (
                  <FilterButton
                    key={option.id}
                    option={option}
                    count={filterCounts[option.id]}
                    isSelected={selectedFilter === option.id}
                    onSelect={() => chooseFilter(option.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">Scenario shortcuts</p>
                <h3 className="mt-1 font-serif text-2xl leading-tight text-[color:var(--ink)] sm:text-3xl">Pick a plan shape, then refine the place.</h3>
              </div>
              <span className="rounded-full border border-[color:var(--border)] bg-white/70 px-3 py-1.5 text-[0.72rem] font-bold text-[color:var(--sea-deep)]">
                {experienceScenarios.length} planner modes
              </span>
            </div>

            <motion.div
              className="-mx-1 mt-4 flex gap-3 overflow-x-auto px-1 pb-1 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden"
              variants={staggerContainer}
            >
              {experienceScenarios.map((scenario) => (
                <ScenarioShortcut key={scenario.id} scenario={scenario} isSelected={selectedScenarioId === scenario.id} onSelect={() => chooseScenario(scenario)} />
              ))}
              <ScenarioHelperCard
                title={activeScenario.title}
                eyebrow="Selected plan"
                icon={Route}
                variant="active"
                metadata={[activeScenario.bestArea, activeScenario.bestTime, activeScenario.noiseLevel]}
                actionLabel="Use this plan"
                onSelect={() => chooseScenario(activeScenario)}
              >
                <p>{activeScenario.routePairing}</p>
                <p className="mt-2 rounded-[0.9rem] border border-[color:var(--border)]/70 bg-white/58 px-3 py-2 text-xs leading-5 text-[color:var(--muted-foreground)]">
                  Start with {activeScenario.routeFlow[0].toLowerCase()}, then keep the route close enough to finish without a rushed transfer.
                </p>
              </ScenarioHelperCard>
              <ScenarioHelperCard
                title="Planner note"
                eyebrow="Guide rule"
                icon={Compass}
                variant="note"
                metadata={['Noise first', 'Route second', 'Local check']}
                actionLabel="Show all places"
                onSelect={() => chooseFilter('all')}
              >
                <p>Pick the group energy first, then trade off noise, budget and return friction.</p>
                <p className="mt-2 rounded-[0.9rem] border border-[color:var(--coral)]/16 bg-[color:var(--coral-soft)]/22 px-3 py-2 text-xs leading-5 text-[color:var(--ink)]">
                  Tip: avoid stacking far stops just because they look close.
                </p>
              </ScenarioHelperCard>
            </motion.div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_25rem] xl:items-start">
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3" aria-live="polite">
                <div>
                  <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">Visible guide cards</p>
                  <p className="mt-1 text-sm font-semibold text-[color:var(--muted-foreground)]">
                    {filteredPlaces.length > 0 ? `${filteredPlaces.length} useful ${filteredPlaces.length === 1 ? 'match' : 'matches'} for ${selectedFilterOption.label.toLowerCase()}.` : 'No matches for this filter.'}
                  </p>
                </div>
                <span className="rounded-full border border-[color:var(--border)] bg-white/70 px-3 py-1.5 text-[0.72rem] font-bold text-[color:var(--sea-deep)]">
                  Selected: {selectedPlace.name}
                </span>
              </div>

              {filteredPlaces.length > 0 ? (
                <div className="grid gap-5">
                  {groupedPlaces.map((group) => (
                    <section key={group.id} className="rounded-[1.35rem]">
                      <div className="mb-4 rounded-[1.15rem] border border-white/72 bg-white/58 p-3 sm:p-4">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">Guide chapter</p>
                            <h3 className="mt-1 font-serif text-2xl leading-tight text-[color:var(--ink)]">{group.label}</h3>
                            <p className="mt-1 text-sm font-semibold leading-6 text-[color:var(--sea-deep)]">{groupGuidance(group.id)}</p>
                            <p className="mt-1 text-sm font-medium leading-6 text-[color:var(--muted-foreground)]">{group.description}</p>
                          </div>
                          <span className="rounded-full border border-[color:var(--border)] bg-white/72 px-3 py-1.5 text-[0.72rem] font-bold text-[color:var(--sea-deep)]">
                            {group.places.length} {group.places.length === 1 ? 'place' : 'places'}
                          </span>
                        </div>
                      </div>

                      <motion.div className="grid gap-3 md:grid-cols-2" variants={staggerContainer}>
                        {group.places.map((place, index) => (
                          <PlaceCard
                            key={place.id}
                            place={place}
                            isFeatured={index === 0}
                            isSelected={selectedPlace.id === place.id}
                            onSelect={() => {
                              setSelectedPlaceId(place.id)
                              onOpenPlaceDetail?.(place)
                            }}
                          />
                        ))}
                      </motion.div>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="rounded-[1.25rem] border border-dashed border-[color:var(--border)] bg-white/66 p-6 shadow-soft">
                  <p className="font-serif text-2xl text-[color:var(--ink)]">No matches in this starter layer.</p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">Reset to all places or use a broader audience filter.</p>
                  <button
                    type="button"
                    onClick={() => chooseFilter('all')}
                    className="interactive-control mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--sea-deep)] px-4 py-2 text-sm font-bold text-white hover:bg-[color:var(--sea)]"
                  >
                    <Compass size={14} aria-hidden="true" />
                    Show all places
                  </button>
                </div>
              )}
            </div>

            <PlannerRail selectedPlace={selectedPlace} selectedScenarioId={selectedScenarioId} onSelectScenario={chooseScenario} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
