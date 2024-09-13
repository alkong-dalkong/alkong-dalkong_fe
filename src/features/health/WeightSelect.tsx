'use client'

import { useState } from 'react'
import dayjs from 'dayjs'

import { Icon, WeightSlider } from '@/components'

import 'dayjs/locale/ko'

const getForm = (date: dayjs.Dayjs) => {
  return date.format('M/D(ddd)')
}

export const WeightSelect = () => {
  const [today, setToday] = useState(dayjs().locale('ko'))

  const handlePrevDay = () => {
    setToday(today.subtract(1, 'day'))
  }

  const handleNextDay = () => {
    setToday(today.add(1, 'day'))
  }

  return (
    <div className="flex-column mt-[8%] w-full gap-8">
      <div className="flex-center gap-3">
        <button type="button" onClick={handlePrevDay} className="headline-M text-gray-6">
          {getForm(today.subtract(1, 'day'))}
        </button>
        <Icon name="arrow-left" color="#0E8763" />
        <div className="title-B">{getForm(today)}</div>
        <Icon name="arrow-right" color="#0E8763" />
        <button type="button" onClick={handleNextDay} className="headline-M text-gray-6">
          {getForm(today.add(1, 'day'))}
        </button>
      </div>
      <div className="w-full">
        <WeightSlider />
      </div>
    </div>
  )
}
