'use client'

import { useEffect, useState } from 'react'

import { createCalendarStore } from '@/store/calendarStore'

export const useCalendar = (schedules: string[]) => {
  const [date, setDate] = useState(new Date())
  const store = createCalendarStore({ date, setDate, schedules })

  useEffect(() => {
    store.setState({ date, schedules })
  }, [date, schedules, store])

  return store
}
