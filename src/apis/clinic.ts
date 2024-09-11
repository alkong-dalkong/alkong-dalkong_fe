import type { CreateClinicInfoRequest, CreateClinicInfoResponse } from '@/types'

import { api } from '.'

export const createMedicalInfo = async (
  request: CreateClinicInfoRequest,
): Promise<CreateClinicInfoResponse> => {
  return await api.post(`/medical`, request)
}
