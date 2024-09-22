'use client'

import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import {
  convertDayArrayEnglishToKorean,
  convertDayArrayToString,
  useMedicineDetail,
} from '@/features'
import type { MedicineDetailType } from '@/types'

type MedicineDetailDataType = Omit<MedicineDetailType, 'medicineWeek'> & { medicineWeek: string }

export const useMedicineDetailData = () => {
  const { data, isPending, isError } = useMedicineDetail()
  const [detailData, setDetailData] = useState<MedicineDetailDataType[]>([])

  useEffect(() => {
    if (data) {
      const transformedData = data.data.map((medicine) => {
        const takenWeek = convertDayArrayEnglishToKorean(medicine.medicineWeek)
        const formattedWeek = convertDayArrayToString(takenWeek)

        const takenTime = medicine.medicineTakenTime.map((time) =>
          dayjs(time, 'HH:mm:ss').format('HH:mm'),
        )

        const takenType = medicine.medicineTakenType === 'TABLET' ? '정' : '회분'

        return {
          ...medicine,
          medicineWeek: formattedWeek,
          medicineTakenTime: takenTime,
          medicineTakenType: takenType,
        }
      })

      setDetailData(transformedData)
    }
  }, [data])

  return {
    detailData,
    isPending,
    isError,
  }
}
