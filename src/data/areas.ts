import type { Area } from '../types'

export const areas: Area[] = [
  {
    id: 'sunny-beach',
    name: 'Sunny Beach',
    subtitle: 'The main resort strip',
    description: 'Sunny Beach is the practical resort strip: broad sand, quick food, beach logistics, loud nights, and very different moods from north to south.',
    practicalNote: 'Check the exact hotel zone before judging walk times, beach access, or nightlife noise.',
    tags: ['resort strip', 'nightlife access', 'easy logistics'],
    mood: 'Busy, flexible, seasonal',
    photoKey: 'sunny-beach-promenade',
  },
  {
    id: 'nessebar',
    name: 'Nessebar',
    subtitle: 'Old streets and sea edges',
    description: 'Nessebar brings stone lanes, sea walls, church ruins, harbor views, and some of the heaviest foot traffic once the season peaks.',
    practicalNote: 'Go early or near golden hour if you want texture, photos, and breathing room in the old town.',
    tags: ['old town', 'sea walls', 'walking'],
    mood: 'Textured, scenic, crowded in season',
    photoKey: 'old-nessebar-walk',
  },
  {
    id: 'sveti-vlas',
    name: 'Sveti Vlas',
    subtitle: 'Marina views and calmer evenings',
    description: 'Sveti Vlas feels cleaner and more sea-facing, with Marina Dinevi, calmer evenings, polished terraces, and open bay views.',
    practicalNote: 'It looks close on the map, but return timing still matters if dinner turns into a longer evening.',
    tags: ['marina', 'bay views', 'evening walks'],
    mood: 'Polished, quieter, sea-facing',
    photoKey: 'sveti-vlas-marina',
  },
  {
    id: 'elenite',
    name: 'Elenite',
    subtitle: 'The quieter northern edge',
    description: 'Elenite sits at the northern edge, better for slower resort rhythm, tucked-away beach time, and days planned around staying put.',
    practicalNote: 'Plan transport before you go; it is quieter partly because movement is less flexible.',
    tags: ['quiet edge', 'bay', 'planned day'],
    mood: 'Quiet, tucked-away, planned',
    photoKey: 'elenite-bay',
  },
]
