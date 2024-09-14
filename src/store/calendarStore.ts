import dayjs from 'dayjs'
import { create } from 'zustand'

type CalendarActions = {
  goToPreviousMonth: () => void
  goToNextMonth: () => void
  setSelectedDate: (date: string) => void
  updateScheduledDates: (dates: string[]) => void
  resetCalendar: () => void
  setRemainedDate: (newDate: string) => void
  swapCurrentWithRemained: () => void
}

type CalendarState = {
  selectedDate: string
  scheduledDays: string[]
  remainedDate: string
  actions: CalendarActions
}

const initialDate = dayjs().format('YYYY-MM-DD')

export const useCalendarStore = create<CalendarState>((set, get) => ({
  selectedDate: initialDate,
  scheduledDays: [],
  remainedDate: initialDate,
  actions: {
    goToPreviousMonth: () => {
      const { selectedDate } = get()
      const previousMonthDate = dayjs(selectedDate).subtract(1, 'month').format('YYYY-MM-DD')
      set({ selectedDate: previousMonthDate, scheduledDays: [] })
    },
    goToNextMonth: () => {
      const { selectedDate } = get()
      const nextMonthDate = dayjs(selectedDate).add(1, 'month').format('YYYY-MM-DD')
      set({ selectedDate: nextMonthDate, scheduledDays: [] })
    },
    updateScheduledDates: (dates: string[]) => {
      const uniqueDays = Array.from(new Set(dates.map((date) => dayjs(date).format('YYYY-MM-DD'))))
      set({ scheduledDays: uniqueDays })
    },
    resetCalendar: () => {
      set({ selectedDate: initialDate, scheduledDays: [] })
    },
    setRemainedDate: (newDate: string) => {
      const formattedDate = dayjs(newDate).format('YYYY-MM-DD')
      set({ remainedDate: formattedDate })
    },
    swapCurrentWithRemained: () => {
      const { remainedDate } = get()
      set({ selectedDate: remainedDate })
    },
    setSelectedDate: (newDate: string) => {
      const formattedDate = dayjs(newDate).format('YYYY-MM-DD')
      set({ selectedDate: formattedDate })
    },
  },
}))

export const useCurrentDate = () => useCalendarStore((state) => state.selectedDate)
export const useScheduledDays = () => useCalendarStore((state) => state.scheduledDays)
export const useCalendarActions = () => useCalendarStore((state) => state.actions)
