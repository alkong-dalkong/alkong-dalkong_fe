'use client'
import { useParams } from 'next/navigation'
import { useMutation, useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { createMedicineInfo, medicineInfo, medicineQueryKeys } from '@/features'
import type { CreateMedicineRequest } from '@/types'

export const useMedicineInfo = () => {
  const { userId } = useParams<{ userId: string }>()
  const today = dayjs().format('YYYY-MM-DD')

  return useQuery({
    queryKey: medicineQueryKeys.info(userId),
    queryFn: () => medicineInfo(userId, today),
  })
}

export const useCreateMedicineInfo = () => {
  const { userId } = useParams<{ userId: string }>()

  return useMutation({
    mutationFn: (request: CreateMedicineRequest) => createMedicineInfo(userId, request),
  })
}
