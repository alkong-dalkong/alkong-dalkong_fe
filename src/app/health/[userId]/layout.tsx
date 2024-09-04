'use client'

import { BottomNav } from '@/components'
import { MainHeader } from '@/components/header/MainHeader'

const HealthLayout = ({
  graph,
  report,
  weight,
}: {
  graph: React.ReactNode
  report: React.ReactNode
  weight: React.ReactNode
}) => {
  return (
    <div className="flex h-full flex-col">
      <MainHeader.Setting title={`가나다님의\n최근 체중 변화`} />

      <div className="flex-column flex-1 items-center overflow-y-auto px-5 pb-[107px] pt-8 scrollbar-hide">
        {graph}
        {weight}
        {report}
      </div>

      <BottomNav />
    </div>
  )
}

export default HealthLayout
