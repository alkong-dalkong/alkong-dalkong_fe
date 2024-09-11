import { useMutation, useQuery } from '@tanstack/react-query'

import { createMedicalInfo, detailInfo } from '@/apis'

const queryKeys = {
  all: ['clinic'] as const,
  detail: (medicalId: number) => [...queryKeys.all, 'detail', medicalId] as const,
}

export const useDetailInfo = (medicalId: number) =>
  useQuery({
    queryKey: queryKeys.detail(medicalId),
    queryFn: () => detailInfo(medicalId),
  })

export const useCreateMedicalInfo = () =>
  useMutation({
    mutationFn: createMedicalInfo,
  })
