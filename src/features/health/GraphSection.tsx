'use client'

import { Icon } from '@/components'
import Label from '@/components/label/Label'
import { GRAPHTYPE } from '@/constants'
import { useGraph } from '@/hooks'
import type { WeightInfoType } from '@/types'

export const GraphSection = ({
  info,
  type,
  toggle,
}: {
  info: WeightInfoType
  type: boolean
  toggle: VoidFunction
}) => {
  const { data, increase, decrease } = useGraph(info)
  console.log(data)

  return (
    <section className="mb-10 w-full">
      {/** Label과 Toggle Button 렌더링 */}
      <div className="flex items-center gap-4">
        <Label icon="check-label">체중 그래프</Label>
        <button
          className="body-M flex-center gap-2 rounded-full bg-gray-2 px-3 pb-[6px] pt-1 text-gray-7"
          onClick={toggle}
        >
          <span>{GRAPHTYPE[`${type}`].ko}</span>
          <span className="mt-[2px]">
            <Icon name="arrow-down" />
          </span>
        </button>
      </div>

      {/** 그래프 네비게이터 렌더링 */}
      <div className="mb-4 mt-[21px] flex items-center justify-between">
        <button className="flex cursor-pointer items-center gap-2" onClick={increase}>
          <Icon name="arrow-left" color="#0E8763" />
          <div className="subtitle-B text-gray-7">이전</div>
        </button>
        <button className="flex cursor-pointer items-center gap-2" onClick={decrease}>
          <div className="subtitle-B text-gray-7">다음</div>
          <Icon name="arrow-right" color="#0E8763" />
        </button>
      </div>

      {/** 그래프 렌더링 */}
      <div className="h-[243px] w-full"></div>
    </section>
  )
}
