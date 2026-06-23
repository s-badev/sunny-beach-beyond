import { Nightlife } from '../components/sections/Nightlife'

type NightlifePageProps = {
  selectedNightlife: string
  onSelectNightlife: (nightlifeId: string) => void
}

export function NightlifePage({ selectedNightlife, onSelectNightlife }: NightlifePageProps) {
  return <Nightlife selectedNightlife={selectedNightlife} onSelectNightlife={onSelectNightlife} />
}
