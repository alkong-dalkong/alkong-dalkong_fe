import { useEffect } from 'react'

import { createCalendarStore } from '@/store/calendarStore'
import { CalendarContext } from '@/store/calendarStore'

import { DateList } from './DateList'
import { MonthNavigator } from './MonthNavigator'
import { WeekList } from './WeekList'

type CalendarProps = {
  date: Date
  setDate: (date: Date) => void
  schedules: string[]
}

export const Calendar = ({ date, setDate, schedules }: CalendarProps) => {
  const store = createCalendarStore({ date, setDate, schedules })

  useEffect(() => {
    store.setState({ date, schedules })
  }, [date, schedules, store])

  return (
    <CalendarContext.Provider value={store}>
      <div className="flex-column flex w-full justify-between gap-[12px]">
        <div className="ml-[4px] flex w-[174px] justify-between gap-[6px]">
          <MonthNavigator />
        </div>
        <div className="flex-column flex-1 gap-[8px]">
          <div className="flex shrink justify-around gap-2">
            <WeekList />
          </div>
          <div className="grid grid-cols-7 gap-2">
            <DateList />
          </div>
        </div>
      </div>
    </CalendarContext.Provider>
  )
}
