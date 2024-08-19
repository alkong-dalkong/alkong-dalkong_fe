'use client'

import { useState } from 'react'

import Calendar from '@/components/calendar/Calendar'

export default function Home() {
  const scheduleDates = ['2024-08-19', '2024-08-20', '2024-08-21']
  const [dateState, setDateState] = useState<Date>(new Date())
  const handleClick = (date: Date): void => {
    setDateState(date)
  }

  return (
    <div>
      <p>HOME</p>
      <div className="mx-auto my-0 h-[368px] w-[343px]">
        <Calendar dateState={dateState} onClick={handleClick} scheduleDates={scheduleDates} />
      </div>
    </div>
  )
}
