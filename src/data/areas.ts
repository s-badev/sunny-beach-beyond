import type { Area } from '../types'

export const areas: Area[] = [
  {
    id: 'sunny-beach',
    name: 'Sunny Beach',
    subtitle: 'The main resort strip',
    description: 'Sunny Beach is wide, busy, and very different from one end to the other. It is useful as a base, but it needs a little sorting by mood.',
    practicalNote: 'Check where your hotel sits on the strip before judging walk times or nightlife noise.',
    tags: ['beach', 'nightlife', 'promenade'],
    mood: 'Big, bright, practical, seasonal',
  },
  {
    id: 'nessebar',
    name: 'Nessebar',
    subtitle: 'Old streets and sea edges',
    description: 'Nessebar is the historic counterpoint to the resort strip, with compact lanes, churches, harbor views, and heavy summer foot traffic.',
    practicalNote: 'Go earlier or later in the day if you want the old town to feel less crowded.',
    tags: ['old town', 'history', 'walking'],
    mood: 'Textured, scenic, crowded in season',
  },
  {
    id: 'sveti-vlas',
    name: 'Sveti Vlas',
    subtitle: 'Marina views and calmer evenings',
    description: 'Sveti Vlas feels more residential and polished, with marina walks, bay views, and a quieter pace than central Sunny Beach.',
    practicalNote: 'It is close on the map, but transport timing still matters in peak season.',
    tags: ['marina', 'views', 'dinner'],
    mood: 'Calmer, cleaner-edged, sea-facing',
  },
  {
    id: 'elenite',
    name: 'Elenite',
    subtitle: 'The quieter northern edge',
    description: 'Elenite sits beyond Sveti Vlas and works best for slower beach time, resort stays, and a break from the busiest summer corridors.',
    practicalNote: 'Plan return transport instead of assuming it will feel as connected as Sunny Beach.',
    tags: ['quiet', 'bay', 'resort edge'],
    mood: 'Slow, tucked-away, less flexible',
  },
]
