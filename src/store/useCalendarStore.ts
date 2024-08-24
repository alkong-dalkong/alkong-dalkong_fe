import { create } from 'zustand'

import { nextMonth, prevMonth } from '@/utils/calendar/moveMonth'

type CalendarStoreType = {
  month: number
  setMonth: (month: number) => void
  year: number
  setYear: (year: number) => void
  schedules: number[]
  setSchedules: (schedules: number[]) => void
  date: number
  setDate: (date: number) => void
  prevMonth: () => void
  nextMonth: () => void
}

export const useCalendarStore = create<CalendarStoreType>((set, get) => ({
  // states
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  schedules: [],
  date: new Date().getDate(),

  // actions
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
}))
