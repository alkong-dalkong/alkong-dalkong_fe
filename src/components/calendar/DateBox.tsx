'use client'
import { useContext } from 'react'

import { CalendarActionsContext, CalendarValueContext } from './CalendarProvider'
import useValidateTheme from './useValidateTheme'

interface IDateBoxProps {
  date: Date
}

export default function DateBox({ date }: IDateBoxProps) {
  const value = useContext(CalendarValueContext)
  const actions = useContext(CalendarActionsContext)
  const theme = useValidateTheme(date)

  if (!value || !actions) {
    throw new Error('Provider is not provided')
  }
  const { handleClick } = actions

  if (!handleClick) {
    throw new Error('handleClick is not provided')
  }

  return (
    <button
      onClick={() => handleClick(date)}
      className={`flex-center aspect-square text-subtitle font-medium ${theme} `}
    >
      {date.getDate()}
    </button>
  )
}
