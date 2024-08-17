'use client'

import { useState } from 'react'

const week = ['일', '월', '화', '수', '목', '금', '토']

export default function Calendar() {
  const [date, setDate] = useState(new Date())
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1))
  }
  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1))
  }

  return (
    <div className="size-full">
      <div className="flex shrink justify-between">
        <button onClick={prevMonth}>{'<'}</button>
        <div>
          {date.getFullYear()}년 {date.getMonth() + 1}월
        </div>
        <button onClick={nextMonth}>{'>'}</button>
      </div>
      <div className="flex shrink justify-around">
        {week.map((day, idx) => (
          <span key={idx} className="text-body font-regular text-gray-6">
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: firstDay }).map((_, idx) => (
          <div key={idx} />
        ))}
        {Array.from({ length: lastDate }).map((_, idx) => (
          <div key={idx} className="text-center">
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
