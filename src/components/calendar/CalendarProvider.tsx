'use client'

import { createContext, useCallback, useMemo, useState } from 'react'

import type { ICalendarProps } from '@/components/calendar/Calendar'

import DateList from './DateList'
import EmptyDates from './EmptyDates'
import MonthNavigator from './MonthNavigator'
import WeekList from './WeekList'

interface ICalendarProviderProps extends ICalendarProps {
  children: React.ReactNode
}

interface ICalendarValueContext {
  today: Date
  dateState: Date
  scheduleDates: string[]
  focusDate: {
    year: number
    month: number
  }
}

interface ICalendarActionsContext {
  onClick: (date: Date) => void
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
  const [focusDate, setFocusDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  })
  const [scheduleDates, _] = useState<string[]>(scheduleDatesProps)

  const nextMonth = useCallback(() => {
    setFocusDate({
      year: focusDate.month === 11 ? focusDate.year + 1 : focusDate.year,
      month: focusDate.month === 11 ? 0 : focusDate.month + 1,
    })
  }, [focusDate])

  const prevMonth = useCallback(() => {
    setFocusDate({
      year: focusDate.month === 0 ? focusDate.year - 1 : focusDate.year,
      month: focusDate.month === 0 ? 11 : focusDate.month - 1,
    })
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

CalendarProvider.DateList = DateList
CalendarProvider.EmptyDates = EmptyDates
CalendarProvider.MonthNavigator = MonthNavigator
CalendarProvider.WeekList = WeekList
