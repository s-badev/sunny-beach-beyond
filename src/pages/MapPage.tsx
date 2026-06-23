import { MapPreview } from '../components/sections/MapPreview'
import type { Place } from '../types'

type MapPageProps = {
  selectedMapPlace: string
  selectedStops: Place[]
  onSelectMapPlace: (placeId: string) => void
  onAddStop: (place: Place) => void
  onRemoveStop: (placeId: string) => void
}

export function MapPage({ selectedMapPlace, selectedStops, onSelectMapPlace, onAddStop, onRemoveStop }: MapPageProps) {
  return (
    <MapPreview
      selectedMapPlace={selectedMapPlace}
      selectedStops={selectedStops}
      onSelectMapPlace={onSelectMapPlace}
      onAddStop={onAddStop}
      onRemoveStop={onRemoveStop}
    />
  )
}
