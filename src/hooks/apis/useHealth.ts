'use client'

import { useParams } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { getHealth, postHealth, putHealth } from '@/apis/health'
import type { PutPhysicalRequest } from '@/types'

const queryKeys = {
  all: ['health'] as const,
  page: (userId: string, period: string) => [...queryKeys.all, userId, period],
}

export const useFetchHealth = (period: string) => {
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
