'use client'

import { useContext } from 'react'

import { CalendarValueContext } from './CalendarProvider'
import DateBox from './DateBox'

export default function DateList() {
  const value = useContext(CalendarValueContext)

  if (!value) {
    throw new Error('CalendarValueContext is not provided')
  }
  const {
    focusDate: { year, month },
  } = value
  const lastDate = new Date(year, month + 1, 0).getDate()

  return (
    <>
      {Array.from({ length: lastDate }).map((_, idx) => (
        <DateBox key={idx} date={new Date(year, month, idx + 1)} />
      ))}
    </>
  )
}
