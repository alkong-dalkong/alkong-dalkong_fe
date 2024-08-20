'use client'

import { useContext } from 'react'

import validateDateBoxTheme from '@/utils/calendar/validateTheme'

import { CalendarValueContext } from './CalendarProvider'
import DateBox from './DateBox'

export default function DateList() {
  const value = useContext(CalendarValueContext)

  if (!value) {
    throw new Error('CalendarValueContext is not provided')
  }
  const {
    dateState,
    scheduleDates,
    today,
    focusDate: { year, month },
  } = value
  const lastDate = new Date(year, month + 1, 0).getDate()

  return (
    <>
      {Array.from({ length: lastDate }).map((_, idx) => {
        const date = new Date(year, month, idx + 1)
        const theme = validateDateBoxTheme({ date, today, dateState, scheduleDates })
        return <DateBox key={idx} theme={theme} date={new Date(year, month, idx + 1)} />
      })}
    </>
  )
}
