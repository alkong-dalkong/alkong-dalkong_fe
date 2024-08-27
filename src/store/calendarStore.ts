import { createContext } from 'react'
import { createStore } from 'zustand'

type CalendarProps = {
  date: Date
  setDate: (date: Date) => void
  schedules?: string[]
}

export type CalendarState = CalendarProps & {
  actions: {
    prevMonth: () => void
    nextMonth: () => void
    getEmptyDate: () => number
    getDatesInMonth: () => number
  }
}

type CalendarStore = ReturnType<typeof createCalendarStore>

export const createCalendarStore = (initProps: CalendarProps) => {
  return createStore<CalendarState>()((set, get) => ({
    ...initProps,
    schedules: initProps.schedules || [],
    actions: {
      prevMonth: () => {
        const { date } = get()
        const prevMonth = new Date(date)
        prevMonth.setMonth(prevMonth.getMonth() - 1)
        set({ date: prevMonth })
      },
      nextMonth: () => {
        const { date } = get()
        const nextMonth = new Date(date)
        nextMonth.setMonth(nextMonth.getMonth() + 1)
        set({ date: nextMonth })
      },
      getEmptyDate: () => {
        const { date } = get()
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
      },
      getDatesInMonth: () => {
        const { date } = get()
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
      },
    },
  }))
}

export const CalendarContext = createContext<CalendarStore | null>(null)
