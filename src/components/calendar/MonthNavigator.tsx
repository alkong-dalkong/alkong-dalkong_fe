import React, { useContext } from 'react'
import { useStore } from 'zustand'

import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icons/Arrow'
import { CalendarContext } from '@/store/calendarStore'

export const MonthNavigator = () => {
  const store = useContext(CalendarContext)
  if (!store) throw new Error('Missing CalendarContext.Provider in the tree')
  const date = useStore(store, (s) => s.date)
  const { prevMonth, nextMonth } = useStore(store, (s) => s.actions)

  return (
    <>
      <button onClick={prevMonth}>
        <ArrowLeftIcon size={28} />
      </button>
      <div className="subtitle-B">
        {date.getFullYear()}년 {date.getMonth() + 1}월
      </div>
      <button onClick={nextMonth}>
        <ArrowRightIcon size={28} />
      </button>
    </>
  )
}
