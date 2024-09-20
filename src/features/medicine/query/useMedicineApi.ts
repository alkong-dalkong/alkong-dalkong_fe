'use client'
import { useParams } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { createMedicineInfo, medicineInfo, medicineQueryKeys, toggleTakenInfo } from '@/features'
import type { CreateMedicineRequest, ToggleTakenInfoRequest } from '@/types'

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

export const useToggleTakenInfo = () => {
  const { userId } = useParams<{ userId: string }>()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ recordId, request }: { recordId: number; request: ToggleTakenInfoRequest }) =>
      toggleTakenInfo(recordId, request),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: medicineQueryKeys.info(userId) }),
  })
}
