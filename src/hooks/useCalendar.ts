import { useEffect } from 'react'

import { useCalendarStore } from '@/store/useCalendarStore'

export const useCalendar = (schedules: number[] | null | undefined) => {
  const { setDate, setMonth, setYear, setSchedules } = useCalendarStore()

  useEffect(() => {
    const today = new Date()
    setDate(today.getDate())
    setMonth(today.getMonth())
    setYear(today.getFullYear())
  }, [setDate, setMonth, setYear])

  useEffect(() => {
    if (schedules) {
      setSchedules(schedules)
    }
  }, [schedules, setSchedules])
}
