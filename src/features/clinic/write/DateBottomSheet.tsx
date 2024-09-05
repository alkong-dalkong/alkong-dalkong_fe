'use client'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import dayjs from 'dayjs'

import { BottomSheet, Calendar, Label, SubHeader, TimeSlider } from '@/components'
import { useCalendarActions, useCurrentDate } from '@/store/calendarStore'
import { useSelectedTime } from '@/store/timeStore'
import type { ClinicBottomSheetType } from '@/types'

export const DateBottomSheet = ({ section, isShowing, onClickScrim }: ClinicBottomSheetType) => {
  const { setValue } = useFormContext()
  const { resetCalendar } = useCalendarActions()
  const selectedDate = useCurrentDate()
  const selectedTime = useSelectedTime()

  const handleClickComplete = () => {
    const date = `${selectedDate} ${selectedTime}`
    const formattedDate = dayjs(date).format('YYYY년 M월 D일 dddd A HH:mm')
    setValue(section, formattedDate)
    onClickScrim()
  }

  useEffect(() => {
    resetCalendar()
  }, [])

  return (
    <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
      <div className="w-full pb-5">
        <SubHeader.Confirm
          title="방문 날짜"
          onCancel={onClickScrim}
          onConfirm={handleClickComplete}
        />
      </div>

      <div className="size-full overflow-y-scroll pb-12 pt-5 scrollbar-hide">
        <section>
          <Label icon="calendar-label">방문 날짜를 선택해 주세요.</Label>

          <div className="mt-4">
            <div className="mx-2">
              <Calendar />
            </div>
            <div className="flex-between-align mx-1 mt-[6px]">
              <p className="headline-B">방문 예정 날짜</p>
              <div className="body-M rounded-md bg-mint-2 px-3 py-[6px]">
                {dayjs(selectedDate).format('YYYY/MM/DD')}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <Label icon="time-label">방문 시간을 선택해 주세요.</Label>
          <div className="mt-4">
            <TimeSlider />
          </div>
        </section>
      </div>
    </BottomSheet>
  )
}
