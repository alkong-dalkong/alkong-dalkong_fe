'use client'

import { useContext } from 'react'

import { CalendarActionsContext } from './CalendarProvider'

interface IDateBoxProps {
  date: Date
  theme?: 'active' | 'today' | 'schedule' | 'sunday' | 'saturday' | 'default'
}

const ThemeColor = {
  active: 'bg-mint-6 text-white rounded-full',
  today: 'bg-mint-0 text-mint-6 rounded-full',
  schedule: 'bg-mint-3 rounded-full',
  sunday: 'text-mint-6',
  saturday: 'text-gray-6',
  default: '',
}

export default function DateBox({ date, theme }: IDateBoxProps) {
  const actions = useContext(CalendarActionsContext)

  if (!actions) {
    throw new Error('Provider is not provided')
  }

  const { onClick: handleClick } = actions

  if (!handleClick) {
    throw new Error('onClick is not provided')
  }

  return (
    <button
      onClick={() => handleClick(date)}
      className={`flex-center aspect-square text-subtitle font-medium ${ThemeColor[theme!]} `}
    >
      {date.getDate()}
    </button>
  )
}
