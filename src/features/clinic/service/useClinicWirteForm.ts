import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { ALARM_TIME } from '@/constants'
import { useCreateMedicalInfo } from '@/hooks'
import { useUserStore } from '@/store'
import type { ClinicFormType } from '@/types'

dayjs.extend(customParseFormat)

export const useClinicWriteForm = () => {
  const router = useRouter()
  const { user } = useUserStore()
  const { mutate: createMedicalInfoMutation } = useCreateMedicalInfo()

  const handleClickCancle = () => {
    router.back()
  }

  const handleClickConfirm = (formData: ClinicFormType) => {
    const { medicalAlarm, hospitalDate } = formData

    const alarmTime = ALARM_TIME.indexOf(medicalAlarm)
    const parsedDate = dayjs(hospitalDate, 'YYYY년 M월 D일 dddd A hh:mm')
    const formattedDate = parsedDate.format('YYYY-MM-DD HH:mm:ss')

    const sendingFormData = {
      ...formData,
      medicalAlarm: alarmTime,
      hospitalDate: formattedDate,
      userId: parseInt(user.userId),
    }

    createMedicalInfoMutation(sendingFormData, {
      onSuccess: ({ medicalId }) => router.replace(`/clinic/${user.userId}/info/${medicalId}`),
    })
  }

  return {
    handleClickCancle,
    handleClickConfirm,
  }
}
