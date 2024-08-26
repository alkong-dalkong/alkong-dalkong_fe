import React, { useContext, useMemo } from 'react'
import { useStore } from 'zustand'

import { CalendarContext } from '@/store/calendarStore'
import { validateDateBoxColor } from '@/utils/validateTheme'

import { DateBox } from './DateBox'

const DateBoxColors = {
  active: 'bg-mint-6 text-white rounded-full',
  today: 'bg-mint-0 text-mint-6 rounded-full',
  schedule: 'bg-mint-3 rounded-full',
  sunday: 'text-mint-6',
  saturday: 'text-gray-6',
  default: '',
}

export const DateBoxList = () => {
  const store = useContext(CalendarContext)
  if (!store) throw new Error('Missing CalendarContext.Provider in the tree')
  const date = useStore(store, (s) => s.date)
  const schedules = useStore(store, (s) => s.schedules)

  const parseSchedules = useMemo(
    () => schedules?.map((schedule) => schedule.split(' ')[0]),
    [schedules],
  )

  return (
    <>
      {Array.from({ length: new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() }).map(
        (_, idx) => {
          const dayIndex = idx + 1
          const color = validateDateBoxColor(date, parseSchedules || [], dayIndex)
          return <DateBox key={dayIndex} num={dayIndex} color={DateBoxColors[color]} />
        },
      )}
    </>
  )
}
