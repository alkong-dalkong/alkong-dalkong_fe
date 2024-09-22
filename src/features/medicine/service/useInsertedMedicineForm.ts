'use client'
import { useEffect } from 'react'

import { MEDICINE_ALARM_TIME } from '@/constants'
import {
  convertDayArrayEnglishToKorean,
  convertDayArrayToString,
  useEditMedicineInfo,
} from '@/features'
import { useMedicineForm } from '@/schema'

export const useInsertedMedicineForm = () => {
  const formMethod = useMedicineForm()
  const { data: editInfoData } = useEditMedicineInfo()

  useEffect(() => {
    if (editInfoData) {
      console.log(editInfoData)
      const parsedEditInfoData = editInfoData.data
      const {
        medicineDosage,
        medicineTakenType,
        medicineAlarm,
        medicineTakenTime,
        medicineWeek,
        medicineEndDate,
      } = parsedEditInfoData

      const takenType = medicineTakenType === 'TABLET' ? '정' : '회분'
      const medicinePeriod = medicineEndDate === '9999-12-31' ? '꾸준히 섭취' : medicineEndDate

      const convertDaysEnToKo = convertDayArrayEnglishToKorean(medicineWeek)
      const formattedWeek = convertDayArrayToString(convertDaysEnToKo)

      const insertingFormData = {
        ...editInfoData.data,
        medicineDosage: `${medicineDosage}${takenType}`,
        medicineAlarm: MEDICINE_ALARM_TIME[medicineAlarm],
        medicineTakenTimeList: medicineTakenTime,
        medicineWeek: formattedWeek,
        medicinePeriod,
      }

      formMethod.reset(insertingFormData)
    }
  }, [editInfoData, formMethod])

  return formMethod
}
