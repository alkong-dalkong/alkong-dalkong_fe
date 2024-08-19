'use client'

import { useContext } from 'react'

import { CalendarValueContext } from './CalendarProvider'

export default function EmptyDates() {
  const value = useContext(CalendarValueContext)

  if (!value) {
    throw new Error('CalendarValueContext is not provided')
  }

  const { focusDate } = value
  const firstDay = new Date(focusDate.getFullYear(), focusDate.getMonth(), 1).getDay()

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
