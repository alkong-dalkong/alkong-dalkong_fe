import { useMutation } from '@tanstack/react-query'

import { createMedicalInfo } from '@/apis'

export const useCreateMedicalInfo = () =>
  useMutation({
    mutationFn: createMedicalInfo,
  })
