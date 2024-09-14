'use client'

import { domMax, LazyMotion } from 'framer-motion'

import { BottomSheet, SubHeader } from '@/components'
import { useCreateHealth, useEditHealth } from '@/hooks'

import { useDay } from './hooks/useDay'
import { WeightSelect } from './WeightSelect'

type WeightSelectBottomSheetProps = {
  existWeight: boolean
  isShowing: boolean
  toggleShowing: VoidFunction
}

export const WeightSelectBottomSheet = ({
  existWeight,
  isShowing,
  toggleShowing,
}: WeightSelectBottomSheetProps) => {
  const { today, ...handler } = useDay()
  const { mutate: editWeight } = useEditHealth()
  const { mutate: createWeight } = useCreateHealth()

  const handleConfirm = () => {
    if (existWeight) {
      editWeight()
    } else {
      createWeight()
    }
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
        <WeightSelect today={today} {...handler} />
      </BottomSheet>
    </LazyMotion>
  )
}
