import { LocalRoutes } from '../components/sections/LocalRoutes'
import type { Place } from '../types'

type RoutesPageProps = {
  selectedRoute: string
  selectedStops: Place[]
  onSelectRoute: (routeId: string) => void
}

export function RoutesPage({ selectedRoute, selectedStops, onSelectRoute }: RoutesPageProps) {
  return <LocalRoutes selectedRoute={selectedRoute} selectedStops={selectedStops} onSelectRoute={onSelectRoute} />
}
