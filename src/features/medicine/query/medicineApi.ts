import { api } from '@/apis'
import type { CreateMedicineRequest } from '@/types'

export const createMedicineInfo = async (userId: string, request: CreateMedicineRequest) => {
  return await api.post(`/medicine/${userId}/add`, request)
}

export const medicineInfo = async (userId: string, date: string) => {
  return await api.get(`/medicine/${userId}/${date}/taken_info`)
}
