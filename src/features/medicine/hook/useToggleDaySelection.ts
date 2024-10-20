'use client'

import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { EVERYDAY } from '@/constants'
import { convertDayStringToArray } from '@/features'

export const useToggleDaySelection = (section: string) => {
  const { watch } = useFormContext()
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  const watchSection = watch(section)

  useEffect(() => {
    if (!watchSection) setSelectedDays([])
    else {
      const convertedDaysArray = convertDayStringToArray(watchSection)
      setSelectedDays(convertedDaysArray)
    }
  }, [watchSection])

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
