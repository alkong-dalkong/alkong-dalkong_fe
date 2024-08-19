'use client'

import React from 'react'

const week = ['일', '월', '화', '수', '목', '금', '토']

function WeekList() {
  return (
    <>
      {week.map((day, idx) => (
        <div key={idx} className="flex-1 text-center text-body font-regular text-gray-6">
          {day}
        </div>
      ))}
    </>
  )
}

export default React.memo(WeekList)
