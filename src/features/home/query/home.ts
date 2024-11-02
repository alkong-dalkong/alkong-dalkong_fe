import dayjs from 'dayjs'

import { api } from '@/apis'
import type { HomeResponseType } from '@/types'

export const getHomePageData = async (userId: string) => {
  const currentTime = dayjs().format('YYYY-MM-DD HH:mm:ss')

  return await api.get<HomeResponseType>(`/main/${userId}/${currentTime}`)
}
