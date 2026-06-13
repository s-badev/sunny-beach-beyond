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
