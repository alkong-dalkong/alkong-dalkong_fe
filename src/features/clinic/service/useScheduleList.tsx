import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import { useMedicalCalendar } from '@/hooks'
import { useCalendarActions } from '@/store'
import type { ScheduleType } from '@/types'

export const useScheduleList = (userId: string) => {
  const localDate = dayjs().format('YYYY-MM')
  const [scheduleList, setScheduleList] = useState<ScheduleType[]>([])
  const { data: calendarData, refetch } = useMedicalCalendar({ userId, localDate })
  const { resetCalendar, updateScheduledDates } = useCalendarActions()

  useEffect(() => {
    if (calendarData) {
      resetCalendar()
      const scheduleData = calendarData.data || []
      const dateList = scheduleData.map((schedule) => schedule.hospitalDate)
      setScheduleList(scheduleData)
      updateScheduledDates(dateList)
    }
  }, [resetCalendar, calendarData, updateScheduledDates])

  useEffect(() => {
    refetch()
  }, [refetch])

  return scheduleList
}
