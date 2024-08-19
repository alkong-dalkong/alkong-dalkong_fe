import { useContext } from 'react'

import { CalendarValueContext } from '@/components/calendar/components/CalendarProvider'
import { parseDate2String } from '@/utils/calendar/parseDate2String'

export default function useValidateTheme(dateParam: Date): string {
  const value = useContext(CalendarValueContext)

  if (!value) {
    throw new Error('CalendarValueContext is not provided')
  }

  const { dateState, today, scheduleDates } = value
  const dateString = parseDate2String(dateParam)

  if (dateString === parseDate2String(dateState)) {
    return 'bg-mint-6 text-white rounded-full'
  } else {
    if (dateString === parseDate2String(today)) {
      return 'bg-mint-0 text-mint-6 rounded-full'
    } else if (scheduleDates.includes(dateString)) {
      return 'bg-mint-3 rounded-full'
    } else {
      const day = dateParam.getDay()
      if (day === 0) {
        return 'text-mint-6'
      } else if (day === 6) {
        return 'text-gray-6'
      }
    }
  }

  return ''
}
