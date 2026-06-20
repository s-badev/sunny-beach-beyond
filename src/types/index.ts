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
}

export type Beach = {
  id: string
  name: string
  area: AreaName
  bestFor: string
  description: string
  tags: string[]
}

export type NightlifeItem = {
  id: string
  title: string
  description: string
  bestTime: string
  tags: string[]
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
}
