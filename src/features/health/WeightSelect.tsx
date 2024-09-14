'use client'
import type dayjs from 'dayjs'

import { Icon, WeightSlider } from '@/components'

import 'dayjs/locale/ko'

const getForm = (date: dayjs.Dayjs) => {
  return date.format('M/D(ddd)')
}

type WeightSelectProps = {
  today: dayjs.Dayjs
  handlePrevDay: VoidFunction
  handleNextDay: VoidFunction
}

export const WeightSelect = ({ today, handlePrevDay, handleNextDay }: WeightSelectProps) => {
  const day = getForm(today)
  const prevDay = getForm(today.subtract(1, 'day'))
  const nextDay = getForm(today.subtract(1, 'day'))

  return (
    <div className="flex-column mt-[8%] w-full gap-8">
      <div className="flex-center gap-3">
        <button type="button" onClick={handlePrevDay} className="headline-M text-gray-6">
          {prevDay}
        </button>
        <Icon name="arrow-left" color="#0E8763" />
        <div className="title-B">{day}</div>
        <Icon name="arrow-right" color="#0E8763" />
        <button type="button" onClick={handleNextDay} className="headline-M text-gray-6">
          {nextDay}
        </button>
      </div>
      <div className="w-full">
        <WeightSlider />
      </div>
    </div>
  )
}
