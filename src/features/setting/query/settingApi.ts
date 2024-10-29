import { api } from '@/apis'
import type { ReadFamilyGroupsResponse, ReadFamilyMembersResponse } from '@/types'
import {
  type CreateFamilyGroupResponse,
  type EditPasswordRequest,
  type EditUserInfoRequest,
  type EnterFamilyGroupRequest,
  type ReadUserInfoResponse,
} from '@/types'

export const editUserInfo = async (request: EditUserInfoRequest) => {
  return await api.put('/mypage/edit-info', request)
}

export const readUserInfo = async () => {
  return await api.get<ReadUserInfoResponse>('/mypage/edit-info')
}

export const editPassword = async (request: EditPasswordRequest) => {
  return await api.post('/mypage/edit-password', request)
}

export const createFamilyGroup = async () => {
  return await api.post<CreateFamilyGroupResponse>('/mypage/create-family')
}

export const enterFamilyGroup = async (request: EnterFamilyGroupRequest) => {
  return await api.post('/mypage/enter-family', request)
}

export const readFamilyMembers = async (familyCode: string) => {
  return await api.get<ReadFamilyMembersResponse>(`/member-info/${familyCode}`)
}

export const readFamilyGroups = async () => {
  return await api.get<ReadFamilyGroupsResponse>('/mypage/family-list')
}
