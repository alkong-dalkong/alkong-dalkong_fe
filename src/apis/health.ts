import type {
  GetPhysicalRequestType,
  GetPhysicalResponseType,
  PostPhysicalRequestType,
  PostPhysicalResponseType,
  PutPhysicalRequestType,
  PutPhysicalResponseType,
} from '@/types'

import { api } from '.'

export const getHealth = async ({ userId, period }: GetPhysicalRequestType) => {
  return await api.get<GetPhysicalResponseType>(`/physical/${userId}`, {
    params: {
      period,
    },
  })
}

export const postHealth = async (request: PostPhysicalRequestType) => {
  return await api.post<PostPhysicalResponseType>('/physical', request)
}

export const putHealth = async (weightId: number, request: PutPhysicalRequestType) => {
  return await api.put<PutPhysicalResponseType>(`/physical/${weightId}`, request)
}
