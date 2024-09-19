'use client'
import { useParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

import { createMedicineInfo } from '@/features'
import type { CreateMedicineRequest } from '@/types'

export const useCreateMedicineInfo = () => {
  const { userId } = useParams<{ userId: string }>()

  return useMutation({
    mutationFn: (request: CreateMedicineRequest) => createMedicineInfo(userId, request),
  })
}
