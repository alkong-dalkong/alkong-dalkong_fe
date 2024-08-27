import React, { useContext } from 'react'
import { useStore } from 'zustand'

import { CalendarContext } from '@/store/calendarStore'

type DateBoxProps = {
  num: number
  color?: string
}

export const DateBox = ({ num, color }: DateBoxProps) => {
  const store = useContext(CalendarContext)
  if (!store) throw new Error('Missing CalendarContext.Provider in the tree')
  const setDate = useStore(store, (s) => s.setDate)
  const date = useStore(store, (s) => s.date)

  const handleClick = () => {
    const newDate = new Date(date)
    newDate.setDate(num)
    setDate(newDate)
  }

  return (
    <button
      onClick={handleClick}
      className={`flex-center aspect-square text-subtitle font-medium ${color}`}
    >
      {num}
    </button>
  )
}
