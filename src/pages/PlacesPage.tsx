import { PlacesExperiences } from '../components/sections/PlacesExperiences'
import type { GuidePlace } from '../types'

type PlacesPageProps = {
  onOpenPlaceDetail: (place: GuidePlace) => void
}

export function PlacesPage({ onOpenPlaceDetail }: PlacesPageProps) {
  return <PlacesExperiences onOpenPlaceDetail={onOpenPlaceDetail} />
}
