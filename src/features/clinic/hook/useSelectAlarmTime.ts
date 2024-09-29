'use client'
import { useState } from 'react'

import { CLINIC_ALARM_TIME } from '@/constants'

export const useSelectAlarmTime = () => {
  const [selectedTime, setSelectedTime] = useState<string>(CLINIC_ALARM_TIME[5])

  const handleClickTime = (time: string) => {
    setSelectedTime(time)
  }

  return { selectedTime, handleClickTime }
}
