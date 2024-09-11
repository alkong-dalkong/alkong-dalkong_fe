import dayjs from 'dayjs'

import { ALARM_TIME } from '@/constants'
import { useEditMedicalInfo } from '@/hooks'
import type { ClinicFormType } from '@/types'

export const useEditInfoFormMethod = (toggleIsEdit: VoidFunction, medicalId: string) => {
  const { mutate: editMedicalInfo } = useEditMedicalInfo()

  const handleClickConfirm = (formData: ClinicFormType) => {
    const { medicalAlarm, hospitalDate } = formData

    const alarmTime = ALARM_TIME.indexOf(medicalAlarm)
    const parsedDate = dayjs(hospitalDate, 'YYYY년 M월 D일 dddd A hh:mm')
    const formattedDate = parsedDate.format('YYYY-MM-DD HH:mm:ss')

    const sendingFormData = {
      ...formData,
      medicalAlarm: alarmTime,
      hospitalDate: formattedDate,
    }

    editMedicalInfo(
      { medicalId, request: sendingFormData },
      {
        onSuccess: () => toggleIsEdit(),
      },
    )
  }

  return {
    handleClickConfirm,
  }
}
