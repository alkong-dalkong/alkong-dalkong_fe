'use client'

import { useEffect } from 'react'
import dayjs from 'dayjs'
import { domMax, LazyMotion } from 'framer-motion'

import { BottomSheet, SubHeader, WeightSlider } from '@/components'
import { useCreateHealth, useEditHealth } from '@/hooks'
import { useSelectedWeight, useSelectedWeightActions } from '@/store'
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
  const { setInitialWeight } = useSelectedWeightActions()
  const { mutate: editWeight } = useEditHealth()
  const { mutate: createWeight } = useCreateHealth()

  useEffect(() => {
    if (weight) {
      setInitialWeight(weight.weight.toString())
    }
  }, [])

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
    toggleShowing()
  }

  return (
    <LazyMotion features={domMax}>
      <BottomSheet isShort onClickScrim={toggleShowing} isShowing={isShowing}>
        <div className="w-full">
          <SubHeader.Confirm
            title="체중 입력"
            onCancel={toggleShowing}
            onConfirm={handleConfirm}
          ></SubHeader.Confirm>
        </div>
        <div className="flex-center size-full">
          <WeightSlider />
        </div>
      </BottomSheet>
    </LazyMotion>
  )
}
