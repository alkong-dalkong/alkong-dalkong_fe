'use client'

import { createContext, useCallback, useMemo, useState } from 'react'

interface ICalendarProviderProps {
  children: React.ReactNode
  scheduleDates: string[]
}

interface ICalendarValueContext {
  today: Date
  current: Date
  scheduleDates: string[]
  focusDate: Date
}

interface ICalendarActionsContext {
  handleClick?: (dates: Date) => void
  nextMonth: () => void
  prevMonth: () => void
}

export const CalendarValueContext = createContext<ICalendarValueContext | null>(null)
export const CalendarActionsContext = createContext<ICalendarActionsContext | null>(null)

export default function CalendarProvider({
  children,
  scheduleDates: scheduleDatesProps,
}: ICalendarProviderProps) {
  const today = useMemo(() => new Date(), [])
  const [currentDate, setCurrentDate] = useState(today)
  const [focusDate, setFocusDate] = useState(today)
  const [scheduleDates, _] = useState<string[]>(scheduleDatesProps)

  const nextMonth = useCallback(() => {
    setFocusDate(new Date(focusDate.getFullYear(), focusDate.getMonth() + 1, 1))
  }, [focusDate])

  const prevMonth = useCallback(() => {
    setFocusDate(new Date(focusDate.getFullYear(), focusDate.getMonth() - 1, 1))
  }, [focusDate])

  const handleClick = (date: Date) => {
    console.log(date)
    setCurrentDate(date)
  }

  const actions = useMemo(
    () => ({
      handleClick,
      nextMonth,
      prevMonth,
    }),
    [nextMonth, prevMonth],
  )

  const value = {
    today,
    current: currentDate,
    scheduleDates,
    focusDate,
  }

  return (
    <CalendarActionsContext.Provider value={actions}>
      <CalendarValueContext.Provider value={value}>{children}</CalendarValueContext.Provider>
    </CalendarActionsContext.Provider>
  )
}
