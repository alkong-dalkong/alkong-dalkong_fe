'use client'

import { useParams } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { getHealth, postHealth, putHealth } from '@/features'
import { queryKeys } from '@/features'
import { usePeriod } from '@/features/health/store/healthStore'
import type { PutPhysicalRequest } from '@/types'

export const useFetchHealth = () => {
  const period = usePeriod()
  const { userId } = useParams<{ userId: string }>()
  return useQuery({
    queryKey: queryKeys.page(userId, period),
    queryFn: () => getHealth({ userId, period }),
  })
}

export const useCreateHealth = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postHealth,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all })
    },
  })
}

export const useEditHealth = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ weightId, request }: { weightId: number; request: PutPhysicalRequest }) =>
      putHealth(weightId, request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.all })
    },
  })
}
