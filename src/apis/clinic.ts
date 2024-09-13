import type {
  ClinicCalendarRequest,
  ClinicCalendarResponse,
  ClinicInfoResponse,
  CreateClinicInfoRequest,
  CreateClinicInfoResponse,
  EditClinicInfoRequest,
  EditClinicInfoResponse,
} from '@/types'

import { api } from '.'

export const clinicInfo = async (medicalId: number): Promise<ClinicInfoResponse> => {
  return await api.get(`/medical/${medicalId}`)
}

export const clinicCalendar = async ({
  userId,
  localDate,
}: ClinicCalendarRequest): Promise<ClinicCalendarResponse> => {
  return await api.get(`/medical/calendar/${userId}/${localDate}`)
}

export const createClinicInfo = async (
  request: CreateClinicInfoRequest,
): Promise<CreateClinicInfoResponse> => {
  return await api.post(`/medical`, request)
}

export const editClinicInfo = async ({
  medicalId,
  request,
}: {
  medicalId: string
  request: EditClinicInfoRequest
}): Promise<EditClinicInfoResponse> => {
  return await api.put(`/medical/${medicalId}`, request)
}

export const deleteClinicInfo = async (medicalId: string) => {
  return await api.delete(`/medical/${medicalId}`)
}
