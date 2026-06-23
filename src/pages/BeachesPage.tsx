import { Beaches } from '../components/sections/Beaches'

type BeachesPageProps = {
  selectedBeach: string
  onSelectBeach: (beachId: string) => void
}

export function BeachesPage({ selectedBeach, onSelectBeach }: BeachesPageProps) {
  return <Beaches selectedBeach={selectedBeach} onSelectBeach={onSelectBeach} />
}
