import type {
  GetPhysicalRequest,
  GetPhysicalResponse,
  PostPhysicalRequest,
  PostPhysicalResponse,
  PutPhysicalRequest,
  PutPhysicalResponse,
} from '@/types'

import { api } from '.'

export const getHealth = async ({ userId, period }: GetPhysicalRequest) => {
  return await api.get<GetPhysicalResponse>(`/physical/${userId}`, {
    params: {
      period,
    },
  })
}

export const postHealth = async (request: PostPhysicalRequest) => {
  return await api.post<PostPhysicalResponse>('/physical', request)
}

export const putHealth = async (weightId: number, request: PutPhysicalRequest) => {
  return await api.put<PutPhysicalResponse>(`/physical/${weightId}`, request)
}
