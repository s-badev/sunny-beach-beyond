import { Areas } from '../components/sections/Areas'

type AreasPageProps = {
  selectedArea: string
  onSelectArea: (areaId: string) => void
}

export function AreasPage({ selectedArea, onSelectArea }: AreasPageProps) {
  return <Areas selectedArea={selectedArea} onSelectArea={onSelectArea} />
}
