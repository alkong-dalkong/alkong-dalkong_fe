import { create } from 'zustand'

import { nextMonth, prevMonth } from '@/utils/calendar/moveMonth'

type CalendarStoreType = {
  month: number
  year: number
  schedules: number[]
  date: number
  actions: {
    setYear: (year: number) => void
    setSchedules: (schedules: number[]) => void
    setMonth: (month: number) => void
    setDate: (date: number) => void
    prevMonth: () => void
    nextMonth: () => void
  }
}

const useCalendarStore = create<CalendarStoreType>((set, get) => {
  const today = new Date()

  return {
    month: today.getMonth(),
    year: today.getFullYear(),
    schedules: [],
    date: today.getDate(),

    actions: {
      setMonth: (month) => set({ month }),
      setYear: (year) => set({ year }),
      setSchedules: (schedules) => set({ schedules }),
      setDate: (date) => set({ date }),
      prevMonth: () => {
        const { year, month } = get()
        set(prevMonth(year, month))
      },
      nextMonth: () => {
        const { year, month } = get()
        set(nextMonth(year, month))
      },
    },
  }
})

export const useCalendarMonth = () => useCalendarStore((state) => state.month)
export const useCalendarYear = () => useCalendarStore((state) => state.year)
export const useCalendarSchedules = () => useCalendarStore((state) => state.schedules)
export const useCalendarDate = () => useCalendarStore((state) => state.date)
export const useCalendarActions = () => useCalendarStore((state) => state.actions)
