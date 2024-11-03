'use client'

import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'

import { getHomePageData, homeQueryKeys } from '@/features'
import type { HomeResponseType } from '@/types'

export const useFetchHome = () => {
  const { userId } = useParams<{ userId: string }>()

  return useQuery<HomeResponseType>({
    queryKey: homeQueryKeys.user(userId),
    queryFn: () => getHomePageData(userId),
  })
}
