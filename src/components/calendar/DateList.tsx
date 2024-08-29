import { useContext, useMemo } from 'react'
import { useStore } from 'zustand'

import { CalendarContext } from '@/store/calendarStore'

import { DateBoxList } from './DateBoxList'
import { EmptyDateBoxList } from './EmptyDateBoxList'

export const DateList = () => {
  const store = useContext(CalendarContext)
  if (!store) throw new Error('Missing CalendarContext.Provider in the tree')
  const { getDatesInMonth, getEmptyDate } = useStore(store, (s) => s.actions)
  const date = useStore(store, (s) => s.date)
  const schedules = useStore(store, (s) => s.schedules)

  const parseSchedules = useMemo(
    () => schedules?.map((schedule) => schedule.split(' ')[0]),
    [schedules],
  )

  return (
    <>
      <EmptyDateBoxList emptyDate={getEmptyDate()} />
      <DateBoxList date={date} schedules={parseSchedules || []} datesInMonth={getDatesInMonth()} />
    </>
  )
}
