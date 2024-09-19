'use client'

import { useState } from 'react'

import { EVERYDAY } from '@/constants'

export const useToggleDaySelection = (initialDays: string[]) => {
  const [selectedDays, setSelectedDays] = useState<string[]>(initialDays)

  const toggleDaySelection = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day))
    } else {
      setSelectedDays([...selectedDays, day])
    }

    setSelectedDays((prev) => prev.sort((a, b) => EVERYDAY.indexOf(a) - EVERYDAY.indexOf(b)))
  }

  return { selectedDays, toggleDaySelection }
}
