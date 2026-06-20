export type Vibe = {
  id: string
  title: string
  description: string
  iconName: string
  tags: string[]
}

export type Area = {
  id: string
  name: string
  subtitle: string
  description: string
  practicalNote: string
  tags: string[]
  mood: string
  photoKey?: LocalMediaKey
}

export type Beach = {
  id: string
  name: string
  area: AreaName
  bestFor: string
  description: string
  tags: string[]
  photoKey?: LocalMediaKey
}

export type NightlifeItem = {
  id: string
  title: string
  description: string
  bestTime: string
  tags: string[]
  photoKey?: LocalMediaKey
}

export type LocalNote = {
  id: string
  title: string
  description: string
  label: string
}

export type AreaName = 'Sunny Beach' | 'Nessebar' | 'Sveti Vlas' | 'Elenite'

export type PlaceCategory =
  | 'Beaches'
  | 'Restaurants'
  | 'Cafes'
  | 'Bars'
  | 'Clubs'
  | 'Hotels'
  | 'Parking'
  | 'Viewpoints'

export type Place = {
  id: string
  name: string
  area: AreaName
  category: PlaceCategory
  tags: string[]
  description: string
  bestFor: string
  position: {
    x: string
    y: string
  }
  googleMapsUrl: string
}

export type LocalRoute = {
  id: string
  title: string
  duration: string
  bestTime: string
  area: AreaName | 'Multiple areas'
  idealFor: string
  transportNote: string
  stops: string[]
}

export type ArchiveEntry = {
  id: string
  year: string
  title: string
  subtitle: string
  description: string
  photoKey?: LocalMediaKey
}

export type LocalMediaKey =
  | 'sunny-beach-promenade'
  | 'central-beach-day'
  | 'north-sunny-beach'
  | 'south-beach-night'
  | 'cacao-beach-area'
  | 'old-nessebar-walk'
  | 'old-nessebar-dinner'
  | 'old-nessebar-coffee'
  | 'old-nessebar-viewpoint'
  | 'sveti-vlas-marina'
  | 'sveti-vlas-marina-dinner'
  | 'sveti-vlas-coffee'
  | 'sveti-vlas-viewpoint'
  | 'elenite-bay'
  | 'elenite-dinner'
  | 'luna-park-evening'
  | 'ferris-wheel-evening'
  | 'slingshot-attraction'
  | 'mini-train-family'
  | 'family-promenade-evening'
  | 'action-aquapark-day'
  | 'water-sports-zone'
  | 'parasailing-main-beach'
  | 'jet-ski-zone'
  | 'banana-boat-rides'
  | 'beach-activity-desk'
  | 'central-food-window'
  | 'central-casual-dinner'
  | 'family-food-strip'
  | 'calm-dinner-view'
  | 'marina-cocktails'
  | 'beach-bar-warmup'
  | 'central-late-food'
  | 'quiet-coffee-strip'
  | 'central-coffee-stop'
  | 'rainy-low-energy'
  | 'archive-postcard'
  | 'archive-modern-coast'

export type MediaTone =
  | 'coastal'
  | 'food'
  | 'cafe'
  | 'nightlife'
  | 'attraction'
  | 'premium'
  | 'budget'
  | 'walk'
  | 'sea'
  | 'sand'
  | 'marina'
  | 'old-town'
  | 'night'
  | 'family'
  | 'water'
  | 'calm'

export type LocalMediaAsset = {
  alt: string
  credit?: string
  src?: string
  tone?: MediaTone
  caption?: string
}

export type GuidePlaceType =
  | 'restaurant'
  | 'bar'
  | 'cafe'
  | 'club'
  | 'attraction'
  | 'water-sport'
  | 'walk'
  | 'viewpoint'
  | 'family'
  | 'transport'

export type GuideAudience =
  | 'young'
  | 'families'
  | 'couples'
  | 'older-visitors'
  | 'party'
  | 'calm'
  | 'budget'
  | 'premium'

export type GuideBudget = 'low' | 'medium' | 'high'

export type GuideNoise = 'quiet' | 'medium' | 'loud'

export type GuideBestTime = 'morning' | 'day' | 'sunset' | 'evening' | 'late-night'

export type GuideFitLevel = 'low' | 'medium' | 'high'

export type GuidePriceFeel = 'budget' | 'mid-range' | 'premium'

export type GuidePlace = {
  id: string
  name: string
  area: AreaName
  type: GuidePlaceType
  audience: GuideAudience[]
  budget: GuideBudget
  noise: GuideNoise
  bestTime: GuideBestTime
  bestFor: string
  avoidIf: string
  description: string
  localTip: string
  transportNote: string
  goodNextMove: string
  photoReady?: boolean
  photoKey?: LocalMediaKey
  priceFeel?: GuidePriceFeel
  familyFit?: GuideFitLevel
  partyLevel?: GuideFitLevel
  viewValue?: GuideFitLevel
  walkability?: GuideFitLevel
  seasonality?: string
  sourceNote?: string
  nearby?: string[]
  routePairing?: string
}

export type ExperienceFilterId =
  | 'all'
  | 'party'
  | 'families'
  | 'couples'
  | 'older-visitors'
  | 'budget'
  | 'premium'
  | 'calm'
  | 'daytime'
  | 'evening'
  | 'water-sports'
  | 'attractions'
  | 'food-drinks'

export type ExperienceScenario = {
  id: string
  title: string
  bestArea: AreaName | 'Multiple areas'
  bestTime: string
  budgetFeel: string
  noiseLevel: string
  recommendedTypes: GuidePlaceType[]
  routeFlow: string[]
  avoidIf: string
  primaryFilter: ExperienceFilterId
  featuredPlaceId: string
  idealAudience?: string
  routePairing?: string
}
