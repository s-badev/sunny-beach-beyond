import { experienceScenarios, guidePlaces } from '../data/experiences'
import { places } from '../data/places'
import type { ExperienceScenario, GuideAudience, GuidePlace, GuidePlaceType, Place, PlaceCategory } from '../types'

export type GuideIntentId =
  | 'cheap-food'
  | 'quiet-family'
  | 'party-night'
  | 'dinner-view'
  | 'water-sports'
  | 'old-nessebar'
  | 'sveti-vlas-calm'
  | 'kids-evening'
  | 'older-easy'
  | 'rainy-low-energy'

export type GuideQuickAction = {
  id: GuideIntentId
  label: string
  query: string
  description: string
}

export type GuideSearchResult = {
  place: GuidePlace
  score: number
  reason: string
  nextMove: string
  scenario?: ExperienceScenario
}

export const guideQuickActions: GuideQuickAction[] = [
  { id: 'cheap-food', label: 'Cheap food', query: 'cheap food budget restaurant', description: 'Lower-cost food anchors and simple route fuel.' },
  { id: 'quiet-family', label: 'Calm family evening', query: 'quiet family kids evening calm', description: 'Lower-friction family plans with less noise.' },
  { id: 'party-night', label: 'Party night', query: 'party night clubs bars late food', description: 'Loud evening routes with a return plan.' },
  { id: 'dinner-view', label: 'Dinner with view', query: 'romantic dinner with view marina sunset', description: 'Dinner, views and slower evening pairings.' },
  { id: 'water-sports', label: 'Water sports', query: 'water sports parasailing jet ski banana boat', description: 'Daytime sea activity and weather-aware choices.' },
  { id: 'old-nessebar', label: 'Old Nessebar', query: 'old nessebar walk sea wall history sunset', description: 'Old-town lanes, sea walls and golden-hour texture.' },
  { id: 'sveti-vlas-calm', label: 'Sveti Vlas calm', query: 'sveti vlas calm marina coffee dinner viewpoint', description: 'Marina, bay views and quieter polished stops.' },
  { id: 'kids-evening', label: 'Kids attractions', query: 'kids family attractions luna park evening', description: 'Simple amusement and family promenade ideas.' },
  { id: 'older-easy', label: 'Older visitors easy plan', query: 'older visitors easy calm coffee walk dinner', description: 'Shorter walks, calmer stops and transport-aware plans.' },
  { id: 'rainy-low-energy', label: 'Rainy / low-energy plan', query: 'rainy low energy coffee food calm budget', description: 'Soft backup plans when the big day is too much.' },
]

const typeToCategory: Record<GuidePlaceType, PlaceCategory> = {
  restaurant: 'Restaurants',
  bar: 'Bars',
  cafe: 'Cafes',
  club: 'Clubs',
  attraction: 'Viewpoints',
  'water-sport': 'Beaches',
  walk: 'Viewpoints',
  viewpoint: 'Viewpoints',
  family: 'Viewpoints',
  transport: 'Parking',
}

const fallbackPositionByArea: Record<GuidePlace['area'], Place['position']> = {
  'Sunny Beach': { x: '35%', y: '46%' },
  Nessebar: { x: '55%', y: '72%' },
  'Sveti Vlas': { x: '24%', y: '23%' },
  Elenite: { x: '14%', y: '13%' },
}

const intentScenario: Partial<Record<GuideIntentId, string>> = {
  'party-night': 'party-night',
  'dinner-view': 'romantic-dinner-view',
  'water-sports': 'water-sports-day',
  'old-nessebar': 'old-nessebar-golden-hour',
  'quiet-family': 'family-evening',
  'kids-evening': 'family-evening',
  'sveti-vlas-calm': 'calm-coffee-walk',
  'older-easy': 'older-visitors-easy-evening',
  'rainy-low-energy': 'rainy-low-energy-plan',
  'cheap-food': 'budget-beach-day',
}

const synonymText: Record<string, string> = {
  cheap: 'budget low simple practical food',
  food: 'restaurant cafe dinner lunch late food',
  kids: 'families family attraction luna park mini train children',
  quiet: 'quiet calm low noise older visitors',
  romantic: 'couples sunset marina view dinner',
  view: 'viewpoint bay marina old town sunset',
  party: 'party club bar nightlife loud late',
  water: 'water sport parasailing jet ski beach activity',
  sports: 'water sport parasailing jet ski banana boat',
  old: 'nessebar history walk sea wall archive',
  rainy: 'low energy coffee food calm backup',
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

function tokensForQuery(query: string) {
  const base = normalize(query)
  const expanded = base
    .split(' ')
    .map((token) => `${token} ${synonymText[token] ?? ''}`)
    .join(' ')

  return normalize(`${base} ${expanded}`).split(' ').filter(Boolean)
}

function searchableText(place: GuidePlace) {
  return normalize(
    [
      place.name,
      place.area,
      place.type,
      place.audience.join(' '),
      place.budget,
      place.noise,
      place.bestTime,
      place.bestFor,
      place.avoidIf,
      place.description,
      place.localTip,
      place.goodNextMove,
      place.transportNote,
      place.routePairing,
      place.nearby?.join(' '),
      place.priceFeel,
      place.familyFit,
      place.partyLevel,
      place.viewValue,
      place.walkability,
    ]
      .filter(Boolean)
      .join(' '),
  )
}

function scenarioForPlace(place: GuidePlace, query: string) {
  const normalizedQuery = normalize(query)

  return experienceScenarios.find((scenario) => {
    if (scenario.featuredPlaceId === place.id) return true
    const scenarioText = normalize([scenario.title, scenario.bestArea, scenario.routePairing, scenario.idealAudience, scenario.routeFlow.join(' ')].join(' '))
    return normalizedQuery.split(' ').some((token) => token.length > 3 && scenarioText.includes(token))
  })
}

function reasonForPlace(place: GuidePlace) {
  const audience = place.audience.slice(0, 3).map((item) => item.replace('-', ' ')).join(', ')
  return `${place.area} / ${place.type.replace('-', ' ')} / good for ${audience}`
}

export function getGuidePlaceById(placeId: string) {
  return guidePlaces.find((place) => place.id === placeId)
}

export function getScenarioById(scenarioId: string) {
  return experienceScenarios.find((scenario) => scenario.id === scenarioId)
}

export function searchGuideItems(query: string, limit = 6): GuideSearchResult[] {
  const tokens = tokensForQuery(query || 'calm dinner beach')

  return guidePlaces
    .map((place) => {
      const text = searchableText(place)
      const normalizedQuery = normalize(query)
      const directNameHit = normalizedQuery.length > 1 && normalize(place.name).includes(normalizedQuery)
      const tokenScore = tokens.reduce((score, token) => {
        if (token.length < 2) return score
        if (text.includes(token)) return score + (token.length > 4 ? 9 : 5)
        return score
      }, directNameHit ? 40 : 0)
      const scenario = scenarioForPlace(place, query)
      const scenarioBoost = scenario ? 14 : 0

      return {
        place,
        score: tokenScore + scenarioBoost,
        reason: reasonForPlace(place),
        nextMove: place.goodNextMove,
        scenario,
      }
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.place.name.localeCompare(b.place.name))
    .slice(0, limit)
}

export function getPlacesByIntent(intentId: GuideIntentId, limit = 6) {
  const action = guideQuickActions.find((item) => item.id === intentId) ?? guideQuickActions[0]
  const scenario = intentScenario[intentId] ? getScenarioById(intentScenario[intentId]!) : undefined
  const results = searchGuideItems(`${action.query} ${scenario?.title ?? ''}`, limit)

  if (!scenario) return results

  return results
    .map((result) => ({
      ...result,
      score: result.place.id === scenario.featuredPlaceId ? result.score + 25 : result.score,
      scenario: result.scenario ?? scenario,
    }))
    .sort((a, b) => b.score - a.score)
}

export function guidePlaceToRoutePlace(place: GuidePlace): Place {
  const anchor = places.find((mapPlace) => mapPlace.area === place.area && normalize(place.name).includes(normalize(mapPlace.name)))
  const sameArea = places.find((mapPlace) => mapPlace.area === place.area && mapPlace.category === typeToCategory[place.type])
  const fallback = anchor ?? sameArea

  return {
    id: `guide-${place.id}`,
    name: place.name,
    area: place.area,
    category: typeToCategory[place.type],
    tags: place.audience.map((audience: GuideAudience) => audience.replace('-', ' ')),
    description: place.description,
    bestFor: place.bestFor,
    position: fallback?.position ?? fallbackPositionByArea[place.area],
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.area} Bulgaria`)}`,
  }
}
