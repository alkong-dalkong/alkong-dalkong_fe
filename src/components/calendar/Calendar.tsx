'use client'

import CalendarProvider from './CalendarProvider'

export interface ICalendarProps {
  dateState: Date
  onClick: (date: Date) => void
  scheduleDates: string[]
}

export default function Calendar(props: ICalendarProps) {
  return (
    <CalendarProvider {...props}>
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
  )
}
