import React from 'react'

import { useCalendarActions, useCurrentDate, useScheduledDays } from '@/store/calendarStore'
import { validateDateBoxColor } from '@/utils/validateTheme'

type DateBoxProps = {
  indexOfDate: number
}

export const DateItem = ({ indexOfDate }: DateBoxProps) => {
  const date = useCurrentDate()
  const schedules = useScheduledDays()
  const { setSelectedDate } = useCalendarActions()

  const handleClickDate = () => {
    setSelectedDate(indexOfDate)
  }

  return (
    <button
      onClick={handleClickDate}
      className={`flex-center aspect-square text-subtitle font-medium ${validateDateBoxColor(date, indexOfDate, schedules)}`}
    >
      {indexOfDate}
    </button>
  )
}
