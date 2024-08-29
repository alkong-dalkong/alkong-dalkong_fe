import { validateDateBoxColor } from '@/utils/validateTheme'

import { DateBox } from './DateBox'

const DateBoxColors = {
  active: 'bg-mint-6 text-white rounded-full',
  today: 'bg-mint-0 text-mint-6 rounded-full',
  schedule: 'bg-mint-3 rounded-full',
  sunday: 'text-mint-6',
  saturday: 'text-gray-6',
  default: '',
}

type DateBoxListProps = {
  date: Date
  schedules: string[]
  datesInMonth: number
}

export const DateBoxList = ({ date, schedules, datesInMonth }: DateBoxListProps) => {
  return (
    <>
      {Array.from({ length: datesInMonth }).map((_, idx) => {
        const dayIndex = idx + 1
        const color = validateDateBoxColor(date, schedules, dayIndex)
        return <DateBox key={dayIndex} num={dayIndex} color={DateBoxColors[color]} />
      })}
    </>
  )
}
