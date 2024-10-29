'use client'

import { useEffect } from 'react'
import dayjs from 'dayjs'
import { domMax, LazyMotion } from 'framer-motion'

import { BottomSheet, Icon, SubHeader, WeightSlider } from '@/components'
import { useSelectedWeightActions } from '@/store'

import { useWeightSelectConfirm } from '../service/useWeightSelectConfirm'
import { useWeight } from '../store/healthStore'

type WeightSelectBottomSheetProps = {
  isShowing: boolean
  toggleShowing: VoidFunction
}

export const WeightSelectBottomSheet = ({
  isShowing,
  toggleShowing,
}: WeightSelectBottomSheetProps) => {
  const weight = useWeight()
  const handleConfirm = useWeightSelectConfirm(toggleShowing)
  const { setInitialWeight } = useSelectedWeightActions()
  const today = dayjs().format('M월 D일 dddd')

  useEffect(() => {
    if (weight) {
      setInitialWeight(weight.toFixed(1).padStart(4, '0'))
    }
  }, [])

  return (
    <LazyMotion features={domMax}>
      <BottomSheet isShort onClickScrim={toggleShowing} isShowing={isShowing}>
        <div className="w-full">
          <SubHeader.Confirm title="체중 입력" onCancel={toggleShowing} onConfirm={handleConfirm} />
        </div>
        <div className="mt-10 size-full">
          <div className="mb-3 flex w-full gap-2">
            <Icon name="calendar-label" />
            <div className="flex-center subtitle-B whitespace-pre">
              {`체중을 입력해 주세요.\n오늘은 ${today}이에요.`}
            </div>
          </div>
          <WeightSlider />
        </div>
      </BottomSheet>
    </LazyMotion>
  )
}
