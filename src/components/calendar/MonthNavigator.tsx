import React from 'react'

import { useCalendarStore } from '@/store/useCalendarStore'

export const MonthNavigator = React.memo(() => {
  const year = useCalendarStore((state) => state.year)
  const month = useCalendarStore((state) => state.month)
  const prevMonth = useCalendarStore((state) => state.prevMonth)
  const nextMonth = useCalendarStore((state) => state.nextMonth)

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
