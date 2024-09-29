'use client'

import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import dayjs from 'dayjs'

import { BottomSheet, Calendar, Label, SubHeader } from '@/components'
import { Toggle } from '@/features'
import { useCalendarActions, useCurrentDate } from '@/store'
import type { BottomSheetType } from '@/types'

export const PeriodBottomSheet = ({ section, isShowing, onClickScrim }: BottomSheetType) => {
  const selectedDate = useCurrentDate()
  const { resetCalendar } = useCalendarActions()
  const { setValue, watch } = useFormContext()
  const watchSection = watch(section)
  const [isToggleActive, setIsToggleActive] = useState(false)

  const handleToggleAction = () => {
    setIsToggleActive((prevToggleState) => !prevToggleState)
  }

  useEffect(() => {
    setIsToggleActive(watchSection === '꾸준히 섭취')
  }, [watchSection])

  useEffect(() => {
    resetCalendar()
  }, [resetCalendar])

  const handleClickConfirm = () => {
    if (isToggleActive) setValue(section, '꾸준히 섭취')
    else setValue(section, dayjs(selectedDate).format('M월 D일'))
    onClickScrim()
  }

  return (
    <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
      <div className="w-full pb-5">
        <SubHeader.Confirm
          title="복용 기간"
          onCancel={onClickScrim}
          onConfirm={handleClickConfirm}
        />
      </div>

      <div className="size-full overflow-y-scroll pb-12 pt-5 scrollbar-hide">
        <Label icon="time-label">복용 기간을 선택해주세요.</Label>

        <div className="flex-column mt-3 gap-[6px]">
          <Calendar />
          {!isToggleActive && (
            <div className="flex-between-align mx-1 mt-[6px]">
              <p className="headline-B">반복 종료 날짜</p>
              <div className="body-M rounded-md bg-mint-2 px-3 py-[6px]">
                {dayjs(selectedDate).format('YYYY/MM/DD')}
              </div>
            </div>
          )}
        </div>

        <div className="flex-between-align mx-1 mt-8">
          <p className="headline-B">계속 먹을게요</p>
          <Toggle toggleState={isToggleActive} toggleAction={handleToggleAction} />
        </div>
      </div>
    </BottomSheet>
  )
}
