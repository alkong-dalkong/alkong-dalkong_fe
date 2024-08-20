'use client'

import { useState } from 'react'

import CalendarProvider from '@/components/calendar/CalendarProvider'

export default function Home() {
  const scheduleDates = ['2024-08-19', '2024-08-20', '2024-08-21']
  const [dateState, setDateState] = useState<Date>(new Date())
  const handleClick = (date: Date): void => {
    setDateState(date)
  }

  return (
    <div>
      <p>HOME</p>
      <div className="mx-auto my-0 h-[368px] w-[343px]">
        <CalendarProvider dateState={dateState} onClick={handleClick} scheduleDates={scheduleDates}>
          <div className="flex-column flex w-full justify-between gap-[12px]">
            <div className="flex shrink gap-3">
              <CalendarProvider.MonthNavigator />
            </div>
            <div className="flex-column flex-1 gap-[8px]">
              <div className="flex shrink justify-around gap-2">
                <CalendarProvider.WeekList />
              </div>
              <div className="grid grid-cols-7 gap-2">
                <CalendarProvider.EmptyDates />
                <CalendarProvider.DateList />
              </div>
            </div>
          </div>
        </CalendarProvider>
      </div>
    </div>
  )
}
