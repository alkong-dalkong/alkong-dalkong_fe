import { api } from '@/apis'
import type { CreateMedicineRequest, MedicineInfoResponse } from '@/types'

export const createMedicineInfo = async (userId: string, request: CreateMedicineRequest) => {
  return await api.post(`/medicine/${userId}/add`, request)
}

export const medicineInfo = async (userId: string, date: string) => {
  return await api.get<MedicineInfoResponse>(`/medicine/${userId}/${date}/taken_info`)
}
