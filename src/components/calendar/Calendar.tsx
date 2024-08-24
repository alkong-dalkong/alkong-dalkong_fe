import { useCalendar } from '@/hooks/useCalendar'

import { DateList } from './DateList'
import { MonthNavigator } from './MonthNavigator'
import { WeekList } from './WeekList'

type CalendarProps = {
  onClick: () => void
  schedules?: number[]
}

export const Calendar = ({ onClick, schedules }: CalendarProps) => {
  useCalendar(schedules)

  return (
    <div className="flex-column flex w-full justify-between gap-[12px]">
      <div className="flex shrink gap-3">
        <MonthNavigator />
      </div>
      <div className="flex-column flex-1 gap-[8px]">
        <div className="flex shrink justify-around gap-2">
          <WeekList />
        </div>
        <div className="grid grid-cols-7 gap-2">
          <DateList onClick={onClick} />
        </div>
      </div>
    </div>
  )
}
