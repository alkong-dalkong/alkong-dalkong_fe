import type {
  CreateClinicInfoRequest,
  CreateClinicInfoResponse,
  DetailInfoResponse,
  EditMedicalInfoRequest,
  EditMedicalInfoResponse,
  MedicalCalendarRequest,
  MedicalCalendarResponse,
} from '@/types'

import { api } from '.'

export const detailInfo = async (medicalId: number): Promise<DetailInfoResponse> => {
  return await api.get(`/medical/${medicalId}`)
}

export const medicalCalendar = async ({
  userId,
  localDate,
}: MedicalCalendarRequest): Promise<MedicalCalendarResponse> => {
  return await api.get(`/medical/calendar/${userId}/${localDate}`)
}

export const createMedicalInfo = async (
  request: CreateClinicInfoRequest,
): Promise<CreateClinicInfoResponse> => {
  return await api.post(`/medical`, request)
}

export const editMedicalInfo = async ({
  medicalId,
  request,
}: {
  medicalId: string
  request: EditMedicalInfoRequest
}): Promise<EditMedicalInfoResponse> => {
  return await api.put(`/medical/${medicalId}`, request)
}

export const deleteMedicalInfo = async (medicalId: string) => {
  return await api.delete(`/medical/${medicalId}`)
}
