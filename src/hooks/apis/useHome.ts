import { useQuery } from '@tanstack/react-query'

import { getHomePageData } from '@/apis'
import type { HomeResponseType } from '@/types'

export const useHome = (userId: string) => {
  return useQuery<HomeResponseType>({
    queryKey: [userId],
    queryFn: () => getHomePageData(userId),
  })
}
