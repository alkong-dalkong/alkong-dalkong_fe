'use client'

import Label from '@/components/label/Label'
import { useToggle } from '@/hooks'
import type { WeightType } from '@/types'

import { WeightSelectBottomSheet } from './WeightSelectBottomSheet'

export const WeightSection = ({ weight: weightProps }: { weight: WeightType | undefined }) => {
  const [isShowing, toggleShowing] = useToggle(false)
  const { weight } = weightProps ?? { weight: null }

  return (
    <section className="mb-8 w-full">
      <Label icon="emergency-label">오늘의 체중</Label>
      <div className="mt-2 flex h-[56px] gap-[7px]">
        {weight ? (
          <div className="subtitle-M flex flex-1 items-center rounded-xl bg-mint-0 pl-6">
            {weight}kg
          </div>
        ) : (
          <div className="subtitle-M flex flex-1 items-center rounded-xl bg-mint-0 pl-6 text-gray-6">
            아직 기록이 없어요.
          </div>
        )}
        <button
          onClick={toggleShowing}
          className="flex-center h-full w-[100px] rounded-xl bg-mint-4 text-white"
        >
          {weight ? '수정' : '추가'}
        </button>
      </div>
      <WeightSelectBottomSheet isShowing={isShowing} toggleShowing={toggleShowing} />
    </section>
  )
}
