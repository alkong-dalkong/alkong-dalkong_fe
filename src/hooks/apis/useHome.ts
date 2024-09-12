import { useQuery } from '@tanstack/react-query'

import { getHomePageData } from '@/apis'
import type { HomeParamsType, HomeResponseType } from '@/types'

export const useHome = ({ userId, localDate }: HomeParamsType) => {
  return useQuery<HomeResponseType>({
    queryKey: [userId],
    queryFn: () => getHomePageData({ userId, localDate }),
  })
}
