import { useMutation, useQuery } from '@tanstack/react-query'

import { getHealth, postHealth, putHealth } from '@/apis/health'
import type { GetPhysicalRequestType, PutPhysicalRequestType } from '@/types'

export const useFetchHealth = ({ userId, period }: GetPhysicalRequestType) => {
  return useQuery({
    queryKey: [userId, period],
    queryFn: () => getHealth({ userId, period }),
  })
}

export const useCreateHealth = () => {
  return useMutation({
    mutationFn: postHealth,
  })
}

export const useEditHealth = () => {
  return useMutation({
    mutationFn: ({ weightId, request }: { weightId: number; request: PutPhysicalRequestType }) =>
      putHealth(weightId, request),
  })
}
