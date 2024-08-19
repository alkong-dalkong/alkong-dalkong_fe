'use client'

import CalendarProvider from './CalendarProvider'
import DateList from './DateList'
import EmptyDates from './EmptyDates'
import MonthNavigator from './MonthNavigator'
import WeekList from './WeekList'

const scheduleDates = ['2024-08-19', '2024-08-20', '2024-08-21']
export default function Calendar() {
  return (
    <CalendarProvider scheduleDates={scheduleDates}>
      <div className="flex-column flex w-full justify-between gap-[12px]">
        <div className="flex shrink gap-3">
          <MonthNavigator />
        </div>
        <div className="flex-column flex-1 gap-[8px]">
          <div className="flex shrink justify-around gap-2">
            <WeekList />
          </div>
          <div className="grid grid-cols-7 gap-2">
            <EmptyDates />
            <DateList />
          </div>
        </div>
      </div>
    </CalendarProvider>
  )
}
