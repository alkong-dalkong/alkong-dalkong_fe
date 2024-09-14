import { useState } from 'react'
import dayjs from 'dayjs'

export const useDay = () => {
  const [today, setToday] = useState(dayjs().locale('ko'))

  const handlePrevDay = () => {
    setToday(today.subtract(1, 'day'))
  }

  const handleNextDay = () => {
    setToday(today.add(1, 'day'))
  }

  return { today, handlePrevDay, handleNextDay }
}
