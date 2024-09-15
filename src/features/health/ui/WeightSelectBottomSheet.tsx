'use client'

import dayjs from 'dayjs'
import { domMax, LazyMotion } from 'framer-motion'

import { BottomSheet, SubHeader, WeightSlider } from '@/components'
import { useCreateHealth, useEditHealth } from '@/hooks'
import { useSelectedWeight } from '@/store'
import type { WeightType } from '@/types'

type WeightSelectBottomSheetProps = {
  weight: WeightType | undefined
  physicalId: number
  isShowing: boolean
  toggleShowing: VoidFunction
}

export const WeightSelectBottomSheet = ({
  weight,
  physicalId,
  isShowing,
  toggleShowing,
}: WeightSelectBottomSheetProps) => {
  const userWeight = useSelectedWeight()
  const { mutate: editWeight } = useEditHealth()
  const { mutate: createWeight } = useCreateHealth()

  const handleConfirm = () => {
    if (weight) {
      editWeight({
        weightId: weight.weightId,
        request: {
          weight: Number(userWeight),
          createdAt: dayjs().format('YYYY-MM-DD'),
        },
      })
    } else {
      createWeight({
        physicalId,
        weight: Number(userWeight),
        createdAt: dayjs().format('YYYY-MM-DD'),
      })
    }
  }

  return (
    <LazyMotion features={domMax}>
      <BottomSheet isShort onClickScrim={toggleShowing} isShowing={isShowing}>
        <div className="mb-3 w-full">
          <SubHeader.Confirm
            title="체중 입력"
            onCancel={toggleShowing}
            onConfirm={handleConfirm}
          ></SubHeader.Confirm>
        </div>
        <WeightSlider />
      </BottomSheet>
    </LazyMotion>
  )
}
