import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
  clinicCalendar,
  clinicInfo,
  clinicQueryKeys,
  createClinicInfo,
  deleteClinicInfo,
  editClinicInfo,
} from '@/features'
import type { ClinicCalendarRequest } from '@/types'

export const useClinicInfo = (medicalId: number) =>
  useQuery({
    queryKey: clinicQueryKeys.detail(medicalId),
    queryFn: () => clinicInfo(medicalId),
  })

export const useClinicCalendar = ({ userId, localDate }: ClinicCalendarRequest) =>
  useQuery({
    queryKey: clinicQueryKeys.calendar(userId, localDate),
    queryFn: () => clinicCalendar({ userId, localDate }),
  })

export const useCreateClinicInfo = () => {
  return useMutation({
    mutationFn: createClinicInfo,
  })
}

export const useEditClinicInfo = (medicalId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: editClinicInfo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: clinicQueryKeys.detail(medicalId) }),
  })
}

export const useDeleteClinicInfo = () => {
  return useMutation({
    mutationFn: deleteClinicInfo,
  })
}
