'use client'

import { useState } from 'react'

export default function Calendar() {
  const [date, setDate] = useState(new Date())

  return (
    <div className="size-full">
      <div className="shrink-1 flex">
        <div>{'<'}</div>
        <div>
          {date.getFullYear()}년 {date.getMonth() - 1}월
        </div>
        <div>{'>'}</div>
      </div>
      <div></div>
    </div>
  )
}
