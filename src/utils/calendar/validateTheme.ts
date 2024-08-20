import { parseDate2String } from '@/utils/calendar/parseDate2String'

interface IThemeParams {
  date: Date
  dateState: Date
  today: Date
  scheduleDates: string[]
}

export default function validateDateBoxTheme({
  date,
  today,
  dateState,
  scheduleDates,
}: IThemeParams): 'active' | 'today' | 'schedule' | 'sunday' | 'saturday' | 'default' {
  const dateString = parseDate2String(date)

  if (dateString === parseDate2String(dateState)) {
    return 'active'
  } else {
    if (dateString === parseDate2String(today)) {
      return 'today'
    } else if (scheduleDates.includes(dateString)) {
      return 'schedule'
    } else {
      const day = date.getDay()
      if (day === 0) {
        return 'sunday'
      } else if (day === 6) {
        return 'saturday'
      }
    }
  }

  return 'default'
}
