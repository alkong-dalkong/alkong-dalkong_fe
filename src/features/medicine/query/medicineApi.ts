import { api } from '@/apis'
import type { CreateMedicineRequest } from '@/types'

export const createMedicineInfo = async (userId: string, request: CreateMedicineRequest) => {
  return await api.post(`/medicine/${userId}/add`, request)
}
