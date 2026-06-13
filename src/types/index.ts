export type Vibe = {
  title: string
  description: string
}

export type Area = {
  name: string
  tone: string
  note: string
}

export type Beach = {
  name: string
  character: string
}

export type NightlifeSpot = {
  name: string
  mood: string
}

export type LocalNote = {
  title: string
  body: string
}

export type Place = {
  name: string
  area: string
  kind: 'beach' | 'viewpoint' | 'old-town' | 'route-stop' | 'nightlife'
}

export type LocalRoute = {
  name: string
  summary: string
}

export type ArchiveEntry = {
  title: string
  period: string
  note: string
}
