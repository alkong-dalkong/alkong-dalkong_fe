import type { HomeParamsType, HomeResponseType } from '@/types'

import { api } from '.'

export const getHomePageData = async ({ userId, localDate }: HomeParamsType) => {
  return await api.get<HomeResponseType>(`/main/${userId}/${localDate}`)
}
