import React, { useMemo } from 'react'

import { useCalendarStore } from '@/store/useCalendarStore'
import { validateDateBoxColor } from '@/utils/calendar/validateTheme'

import { DateBox } from './DateBox'

const DateBoxColors = {
  active: 'bg-mint-6 text-white rounded-full',
  today: 'bg-mint-0 text-mint-6 rounded-full',
  schedule: 'bg-mint-3 rounded-full',
  sunday: 'text-mint-6',
  saturday: 'text-gray-6',
  default: '',
}

type DateBoxListProps = {
  onClick: () => void
}

export const DateBoxList = ({ onClick }: DateBoxListProps) => {
  const { year, month, date, schedules } = useCalendarStore()

  const daysInMonth = useMemo(() => new Date(year, month + 1, 0).getDate(), [year, month])

  return (
    <>
      {Array.from({ length: daysInMonth }).map((_, idx) => {
        const dayIndex = idx + 1
        const color = validateDateBoxColor({ year, month, date, schedules, idx: dayIndex })
        return (
          <DateBox key={dayIndex} date={dayIndex} color={DateBoxColors[color]} onClick={onClick} />
        )
      })}
    </>
  )
}
