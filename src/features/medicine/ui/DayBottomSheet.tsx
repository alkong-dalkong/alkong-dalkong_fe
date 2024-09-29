'use client'

import { useFormContext } from 'react-hook-form'

import { BottomSheet, Label, SubHeader } from '@/components'
import { EVERYDAY } from '@/constants'
import { convertDayArrayToString, useToggleDaySelection } from '@/features'
import type { BottomSheetType } from '@/types'

type DayListProps = {
  selectedDays: string[]
  toggleAction: (day: string) => void
}

const DayList = ({ selectedDays, toggleAction }: DayListProps) => {
  return (
    <div className="flex-between mt-4">
      {EVERYDAY.map((day) => {
        const buttonStyle = selectedDays.includes(day) ? 'bg-mint-6 text-white' : 'bg-gray-2'

        return (
          <button
            key={day}
            className={`rounded-full p-3 ${buttonStyle}`}
            onClick={() => toggleAction(day)}
          >
            {day}
          </button>
        )
      })}
    </div>
  )
}

export const DayBottomSheet = ({ section, isShowing, onClickScrim }: BottomSheetType) => {
  const { setValue } = useFormContext()
  const { selectedDays, toggleDaySelection } = useToggleDaySelection(section)

  const handleClickConfirm = () => {
    const convertedDaysString = convertDayArrayToString(selectedDays)
    setValue(section, convertedDaysString)
    onClickScrim()
  }

  return (
    <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
      <div className="w-full pb-5">
        <SubHeader.Confirm
          title="복용 요일"
          onCancel={onClickScrim}
          onConfirm={handleClickConfirm}
        />
      </div>

      <div className="size-full overflow-y-scroll pb-12 pt-5 scrollbar-hide">
        <Label icon="time-label">복용 요일을 선택해주세요.</Label>
        <DayList selectedDays={selectedDays} toggleAction={toggleDaySelection} />
      </div>
    </BottomSheet>
  )
}
