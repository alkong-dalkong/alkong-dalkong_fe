import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
  createMedicalInfo,
  deleteMedicalInfo,
  detailInfo,
  editMedicalInfo,
  medicalCalendar,
} from '@/apis'
import type { MedicalCalendarRequest } from '@/types'

const queryKeys = {
  all: ['clinic'] as const,
  detail: (medicalId: number) => [...queryKeys.all, 'detail', medicalId] as const,
  calendar: (userId: string, localDate: string) =>
    [...queryKeys.all, 'calendar', userId, localDate] as const,
}

export const useDetailInfo = (medicalId: number) =>
  useQuery({
    queryKey: queryKeys.detail(medicalId),
    queryFn: () => detailInfo(medicalId),
  })

export const useMedicalCalendar = ({ userId, localDate }: MedicalCalendarRequest) =>
  useQuery({
    queryKey: queryKeys.calendar(userId, localDate),
    queryFn: () => medicalCalendar({ userId, localDate }),
  })

export const useCreateMedicalInfo = () =>
  useMutation({
    mutationFn: createMedicalInfo,
  })

export const useEditMedicalInfo = () =>
  useMutation({
    mutationFn: editMedicalInfo,
  })

export const useDeleteMedicalInfo = (userId: string, localDate: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteMedicalInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.calendar(userId, localDate) })
    },
  })
}
