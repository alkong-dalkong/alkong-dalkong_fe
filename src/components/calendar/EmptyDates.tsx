'use client'

import { useContext } from 'react'

import { CalendarValueContext } from './CalendarProvider'

export default function EmptyDates() {
  const value = useContext(CalendarValueContext)

  if (!value) {
    throw new Error('CalendarValueContext is not provided')
  }

  const {
    focusDate: { year, month },
  } = value
  const firstDay = new Date(year, month, 1).getDay()

  if (!firstDay) {
    return null
  }

  return (
    <>
      {Array.from({ length: firstDay }).map((_, idx) => (
        <div key={idx} />
      ))}
    </>
  )
}
