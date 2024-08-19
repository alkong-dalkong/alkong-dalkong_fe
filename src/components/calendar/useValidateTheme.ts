import { useContext } from 'react'

import { CalendarValueContext } from '@/components/calendar/CalendarProvider'

export default function useValidateTheme(dateParam: Date): string {
  const value = useContext(CalendarValueContext)

  if (!value) {
    throw new Error('CalendarValueContext is not provided')
  }

  const { current, today, scheduleDates } = value
  const currentString = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(current.getDate()).padStart(2, '0')}`
  const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  const year = dateParam.getFullYear()
  const month = String(dateParam.getMonth() + 1).padStart(2, '0')
  const date = String(dateParam.getDate()).padStart(2, '0')
  const day = dateParam.getDay()

  const dateString = `${year}-${month}-${date}`

  if (currentString === dateString) {
    return 'bg-mint-6 text-white rounded-full'
  } else if (dateString === todayString) {
    return 'bg-mint-0 text-mint-6 rounded-full'
  } else if (scheduleDates.includes(dateString)) {
    return 'bg-mint-3 rounded-full'
  } else if (day === 0) {
    return 'text-mint-6'
  } else if (day === 6) {
    return 'text-gray-6'
  }

  return ''
}
