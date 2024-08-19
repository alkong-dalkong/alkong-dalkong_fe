'use client'

import { createContext, useCallback, useMemo, useState } from 'react'

import type { ICalendarProps } from './Calendar'

interface ICalendarProviderProps extends ICalendarProps {
  children: React.ReactNode
}

interface ICalendarValueContext {
  today: Date
  dateState: Date
  scheduleDates: string[]
  focusDate: Date
}

interface ICalendarActionsContext {
  onClick?: (dates: Date) => void
  nextMonth: () => void
  prevMonth: () => void
}

export const CalendarValueContext = createContext<ICalendarValueContext | null>(null)
export const CalendarActionsContext = createContext<ICalendarActionsContext | null>(null)

export default function CalendarProvider({
  children,
  dateState,
  onClick,
  scheduleDates: scheduleDatesProps,
}: ICalendarProviderProps) {
  const today = useMemo(() => new Date(), [])
  const [focusDate, setFocusDate] = useState(today)
  const [scheduleDates, _] = useState<string[]>(scheduleDatesProps)

  const nextMonth = useCallback(() => {
    setFocusDate(new Date(focusDate.getFullYear(), focusDate.getMonth() + 1, 1))
  }, [focusDate])

  const prevMonth = useCallback(() => {
    setFocusDate(new Date(focusDate.getFullYear(), focusDate.getMonth() - 1, 1))
  }, [focusDate])

  const actions = useMemo(
    () => ({
      onClick,
      nextMonth,
      prevMonth,
    }),
    [nextMonth, prevMonth],
  )

  const value = {
    today,
    dateState,
    scheduleDates,
    focusDate,
  }

  return (
    <CalendarActionsContext.Provider value={actions}>
      <CalendarValueContext.Provider value={value}>{children}</CalendarValueContext.Provider>
    </CalendarActionsContext.Provider>
  )
}
