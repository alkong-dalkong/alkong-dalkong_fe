'use client'

import Label from '@/components/label/Label'
import { useToggle } from '@/hooks'

import { WeightSelectBottomSheet } from './WeightSelectBottomSheet'

const WeightSection = () => {
  const [isShowing, toggleShowing] = useToggle(false)

  return (
    <section className="mb-8 w-full">
      <Label icon="emergency-label">오늘의 체중</Label>
      <div className="mt-2 flex h-[56px] gap-[7px]">
        <div className="subtitle-M flex flex-1 items-center rounded-xl bg-mint-0 pl-6">54.8kg</div>
        <button
          onClick={toggleShowing}
          className="flex-center h-full w-[100px] rounded-xl bg-mint-4 text-white"
        >
          수정
        </button>
      </div>
      <WeightSelectBottomSheet isShowing={isShowing} toggleShowing={toggleShowing} />
    </section>
  )
}

export default WeightSection
