import { domMax, LazyMotion } from 'framer-motion'

import { BottomSheet, SubHeader } from '@/components'

import { WeightSelect } from './WeightSelect'

type WeightSelectBottomSheetProps = {
  isShowing: boolean
  toggleShowing: VoidFunction
}

export const WeightSelectBottomSheet = ({
  isShowing,
  toggleShowing,
}: WeightSelectBottomSheetProps) => {
  return (
    <LazyMotion features={domMax}>
      <BottomSheet isShort onClickScrim={toggleShowing} isShowing={isShowing}>
        <div className="w-full">
          <SubHeader.Confirm
            title="체중 입력"
            onCancel={toggleShowing}
            onConfirm={() => console.log('hello')}
          ></SubHeader.Confirm>
        </div>
        <WeightSelect />
      </BottomSheet>
    </LazyMotion>
  )
}
