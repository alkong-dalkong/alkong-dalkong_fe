import { useEffect } from 'react'

import { useCalendarActions } from '@/store/useCalendarStore'

export const useCalendar = (schedules: string[] | null | undefined) => {
  const { setDate, setMonth, setYear, setSchedules } = useCalendarActions()

  useEffect(() => {
    const today = new Date()
    setDate(today.getDate())
    setMonth(today.getMonth())
    setYear(today.getFullYear())
  }, [setDate, setMonth, setYear])

  useEffect(() => {
    if (schedules && schedules.length > 0) {
      const parseSchedules = schedules.map((ele) => +ele.split(' ')[0].split('-')[2])
      setSchedules(parseSchedules)
    }
  }, [schedules, setSchedules])
}
