import { api } from '@/apis'
import type {
  CreateMedicineRequest,
  MedicineDetailResponse,
  MedicineInfoResponse,
  ToggleTakenInfoRequest,
} from '@/types'

export const createMedicineInfo = async (userId: string, request: CreateMedicineRequest) => {
  return await api.post(`/medicine/${userId}/add`, request)
}

export const medicineInfo = async (userId: string, date: string) => {
  return await api.get<MedicineInfoResponse>(`/medicine/${userId}/${date}/taken_info`)
}

export const medicineDetail = async (userId: string) => {
  return await api.get<MedicineDetailResponse>(`/medicine/${userId}/total_medicine_info`)
}

export const toggleTakenInfo = async (recordId: number, request: ToggleTakenInfoRequest) => {
  return await api.patch(`/medicine/${recordId}/taken`, request)
}
