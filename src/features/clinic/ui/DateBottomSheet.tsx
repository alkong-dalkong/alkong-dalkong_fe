'use client'
import { useEffect } from 'react'
import dayjs from 'dayjs'

import { BottomSheet, Calendar, Label, SubHeader, TimeSlider } from '@/components'
import { useFormattedVisitDate } from '@/features'
import { useCalendarActions, useCurrentDate } from '@/store'
import type { ClinicBottomSheetType } from '@/types'

const DateBottomSheetHeader = ({
  section,
  onClickScrim,
}: Omit<ClinicBottomSheetType, 'isShowing'>) => {
  const handleClickComplete = useFormattedVisitDate(section, onClickScrim)

  return (
    <div className="-mx-2 w-full pb-5">
      <SubHeader.Confirm
        title="방문 날짜"
        onCancel={onClickScrim}
        onConfirm={handleClickComplete}
      />
    </div>
  )
}

const DateOfVisit = () => {
  const selectedDate = useCurrentDate()

  return (
    <div className="flex-between-align mx-1 mt-[6px]">
      <p className="headline-B">방문 예정 날짜</p>
      <div className="body-M rounded-md bg-mint-2 px-3 py-[6px]">
        {dayjs(selectedDate).format('YYYY/MM/DD')}
      </div>
    </div>
  )
}

export const DateBottomSheet = ({ section, isShowing, onClickScrim }: ClinicBottomSheetType) => {
  const { resetCalendar } = useCalendarActions()

  useEffect(() => {
    resetCalendar()
  }, [resetCalendar])

  return (
    <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
      <DateBottomSheetHeader section={section} onClickScrim={onClickScrim} />

      <div className="size-full overflow-y-scroll pb-12 pt-5 scrollbar-hide">
        <section>
          <Label icon="calendar-label">방문 날짜를 선택해 주세요.</Label>

          <div className="mx-2 mt-4">
            <Calendar />
            <DateOfVisit />
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
