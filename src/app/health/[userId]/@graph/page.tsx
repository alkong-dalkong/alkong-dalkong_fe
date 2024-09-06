import { Icon } from '@/components'
import Label from '@/components/label/Label'

import { WeightChart } from './WeightChart'

const GraphSection = () => {
  return (
    <section className="mb-10 w-full">
      <div className="flex w-full items-center gap-4">
        <Label icon="check-label">체중 그래프</Label>
        <div>주간</div>
      </div>

      <div className="mb-4 mt-[21px] flex items-center justify-between">
        <div className="flex cursor-pointer items-center gap-2">
          <Icon name="arrow-left" color="#0E8763" />
          <div className="subtitle-B text-gray-7">이전</div>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <div className="subtitle-B text-gray-7">다음</div>
          <Icon name="arrow-right" color="#0E8763" />
        </div>
      </div>

      <div className="h-[243px] w-full">
        <WeightChart />
      </div>
    </section>
  )
}

export default GraphSection
