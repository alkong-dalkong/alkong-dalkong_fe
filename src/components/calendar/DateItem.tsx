import React from 'react'

import { useCalendarActions, useCurrentDate, useScheduledDays } from '@/store/calendarStore'
import { checkCalendarDateStyle } from '@/utils'

type DateItemProps = {
  indexOfDate: number
}

export const DateItem = ({ indexOfDate }: DateItemProps) => {
  const date = useCurrentDate()
  const schedules = useScheduledDays()
  const { setSelectedDate } = useCalendarActions()

  const handleClickDate = () => {
    setSelectedDate(indexOfDate)
  }

  return (
    <button
      onClick={handleClickDate}
      className={`flex-center aspect-square text-subtitle font-medium ${checkCalendarDateStyle(date, indexOfDate, schedules)}`}
    >
      {indexOfDate}
    </button>
  )
}
