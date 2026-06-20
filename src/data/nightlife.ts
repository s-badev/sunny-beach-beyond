import type { NightlifeItem } from '../types'

export const nightlife: NightlifeItem[] = [
  {
    id: 'beach-bars',
    title: 'Beach Bars',
    description: 'Casual drinks near the sand, usually easier early in the evening before the loudest part of the night starts.',
    bestTime: 'Sunset to late evening',
    tags: ['sand', 'drinks', 'music'],
    photoKey: 'beach-bar-warmup',
  },
  {
    id: 'night-clubs',
    title: 'Night Clubs',
    description: 'The high-volume side of Sunny Beach, mostly clustered around the busier resort and beach-party zones.',
    bestTime: 'After midnight',
    tags: ['clubs', 'dancing', 'late night'],
    photoKey: 'cacao-beach-area',
  },
  {
    id: 'pool-parties',
    title: 'Pool Parties',
    description: 'Day-to-evening party events that suit groups who want the resort atmosphere without waiting for club hours.',
    bestTime: 'Afternoon to early evening',
    tags: ['day party', 'groups', 'summer'],
    photoKey: 'south-beach-night',
  },
  {
    id: 'live-music',
    title: 'Live Music',
    description: 'More relaxed evenings around bars, restaurants, and hotel zones, with less pressure than the main clubs.',
    bestTime: 'Evening',
    tags: ['music', 'bars', 'restaurants'],
    photoKey: 'calm-dinner-view',
  },
  {
    id: 'late-night-food',
    title: 'Late Night Food',
    description: 'Useful after the beach bars or clubs, especially around the main pedestrian routes and resort center.',
    bestTime: 'Late night',
    tags: ['snacks', 'takeaway', 'after clubs'],
    photoKey: 'central-late-food',
  },
  {
    id: 'chill-cocktail-bars',
    title: 'Chill Cocktail Bars',
    description: 'Better for slower evenings, conversation, and views, especially around Sveti Vlas or quieter hotel areas.',
    bestTime: 'Sunset to evening',
    tags: ['cocktails', 'views', 'quieter'],
    photoKey: 'marina-cocktails',
  },
]
