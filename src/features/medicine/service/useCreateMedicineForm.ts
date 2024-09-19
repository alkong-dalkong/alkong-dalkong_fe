'use client'
import { useParams, useRouter } from 'next/navigation'
import dayjs from 'dayjs'

import { MEDICINE_ALARM_TIME } from '@/constants'
import {
  convertDayArrayToEnglish,
  convertDayStringToArray,
  parseDosage,
  useCreateMedicineInfo,
} from '@/features'
import type { MedicineFormType } from '@/types'

export const useCreateMedicineForm = () => {
  const router = useRouter()
  const { userId } = useParams<{ userId: string }>()
  const { mutate: createMedicineInfoMutation } = useCreateMedicineInfo()

  const submitFormattedForm = (formData: MedicineFormType) => {
    const { medicineWeek, medicineDosage, medicinePeriod, medicineAlarm, ...rest } = formData
    const { dosageAmount, dosageType } = parseDosage(medicineDosage)

    const isInfiniteDate = medicinePeriod === '꾸준히 섭취'
    const formattedEndDate = isInfiniteDate
      ? '9999-12-31'
      : dayjs(medicinePeriod, 'M월 D일').format('YYYY-MM-DD')

    const formattedType = dosageType === '회분' ? 0 : 1

    const convertedWeek = convertDayStringToArray(medicineWeek)
    const formattedWeek = convertDayArrayToEnglish(convertedWeek)

    const sendingFormData = {
      ...formData,
      medicineStart: dayjs().format('YYYY-MM-DD'),
      medicineDosage: dosageAmount,
      medicineTakenType: formattedType,
      medicineWeek: formattedWeek,
      medicineEnd: formattedEndDate,
      medicineAlarm: MEDICINE_ALARM_TIME.indexOf(medicineAlarm),
      ...rest,
    }

    createMedicineInfoMutation(sendingFormData, {
      onSuccess: () => router.replace(`/medicine/${userId}/detail`),
    })
  }

  return submitFormattedForm
}
