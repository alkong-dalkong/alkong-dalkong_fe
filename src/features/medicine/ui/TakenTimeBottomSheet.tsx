'use client'

import { useFormContext } from 'react-hook-form'
import dayjs from 'dayjs'

import { BottomSheet, Label, SubHeader, TimeSlider } from '@/components'
import { useSelectedTime } from '@/store'
import type { BottomSheetType } from '@/types'

type TakenTimeBottomSheetProps = BottomSheetType & { index: number }

export const TakenTimeBottomSheet = ({
  index,
  section,
  isShowing,
  onClickScrim,
}: TakenTimeBottomSheetProps) => {
  const { getValues, setValue } = useFormContext()
  const selectedTime = useSelectedTime()

  const handleClickComplete = () => {
    const takenTimeArr = getValues(section)
    takenTimeArr[index] = dayjs(selectedTime, 'HH:mm:ss').format('HH:mm')
    const sorttedArr = [...takenTimeArr].sort((a, b) => a.localeCompare(b))

    setValue(section, sorttedArr)
    onClickScrim()
  }

  return (
    <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
      <div className="w-full pb-5">
        <SubHeader.Confirm
          title="복용 시간"
          onCancel={onClickScrim}
          onConfirm={handleClickComplete}
        />
      </div>

      <div className="size-full overflow-y-scroll pb-12 pt-5 scrollbar-hide">
        <Label icon="time-label">복용 시간을 선택해주세요.</Label>
        <TimeSlider />
      </div>
    </BottomSheet>
  )
}
