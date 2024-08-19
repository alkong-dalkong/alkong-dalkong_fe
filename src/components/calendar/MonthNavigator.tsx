'use client'

import { useContext } from 'react'

import { CalendarActionsContext, CalendarValueContext } from './CalendarProvider'

export default function MonthNavigator() {
  const actions = useContext(CalendarActionsContext)
  const value = useContext(CalendarValueContext)

  if (!actions || !value) {
    throw new Error('CalendarActionsContext or CalendarValueContext is not provided')
  }

  const { prevMonth, nextMonth } = actions

  return (
    <>
      <button onClick={prevMonth}>{'<'}</button>
      <div className="text-subtitle font-bold">
        {value.focusDate.getFullYear()}년 {value.focusDate.getMonth() + 1}월
      </div>
      <button onClick={nextMonth}>{'>'}</button>
    </>
  )
}
