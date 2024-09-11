import { useEffect } from 'react'
import dayjs from 'dayjs'

import { ALARM_TIME } from '@/constants'
import { useDetailInfo } from '@/hooks'
import { useClinicForm } from '@/schema'

export const useInsertedClinicForm = (medicalId: string) => {
  const formMethod = useClinicForm()
  const { data: detailInfo } = useDetailInfo(parseInt(medicalId))

  useEffect(() => {
    if (detailInfo) {
      const { medicalAlarm, hospitalDate } = detailInfo.data

      const alarmTime = ALARM_TIME[parseInt(medicalAlarm)]
      const parsedDate = dayjs(hospitalDate, 'YYYY-MM-DD HH:mm:ss')
      const formattedDate = parsedDate.format('YYYY년 M월 D일 dddd A hh:mm')

      const formData = {
        ...detailInfo.data,
        medicalAlarm: alarmTime,
        hospitalDate: formattedDate,
      }

      formMethod.reset(formData)
    }
  }, [detailInfo, formMethod])

  return formMethod
}
