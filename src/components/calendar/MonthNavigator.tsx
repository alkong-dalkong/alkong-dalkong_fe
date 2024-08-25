import React from 'react'

import { useCalendarActions, useCalendarMonth, useCalendarYear } from '@/store/useCalendarStore'

export const MonthNavigator = React.memo(() => {
  const { prevMonth, nextMonth } = useCalendarActions()
  const year = useCalendarYear()
  const month = useCalendarMonth()

  return (
    <>
      <button onClick={prevMonth}>{'<'}</button>
      <div className="text-subtitle font-bold">
        {year}년 {month + 1}월
      </div>
      <button onClick={nextMonth}>{'>'}</button>
    </>
  )
})

MonthNavigator.displayName = 'MonthNavigator'
