import React, { useCallback } from 'react'

import { useCalendarActions } from '@/store/useCalendarStore'

type DateBoxProps = {
  date: number
  onClick: () => void
  color?: string
}

export const DateBox = React.memo(({ date, onClick, color }: DateBoxProps) => {
  const { setDate } = useCalendarActions()

  const handleClick = useCallback(() => {
    setDate(date)
    onClick()
  }, [date, onClick, setDate])

  return (
    <button
      onClick={handleClick}
      className={`flex-center aspect-square text-subtitle font-medium ${color}`}
    >
      {date}
    </button>
  )
})

DateBox.displayName = 'DateBox'
