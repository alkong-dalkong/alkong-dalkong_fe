'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type RequestType = {
  userId: string
  localDate: string
}

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL

const getHomeData = async ({ userId, localDate }: RequestType) => {
  try {
    const response = await axios.get(`${BASEURL}/main/${userId}/${localDate}`)

    if (response.status !== 200) {
      throw new Error('Failed to fetch home data')
    }

    return response.data
  } catch (error) {
    throw new Error(`useHome Error`)
  }
}

export const useHome = ({ userId, localDate }: RequestType) => {
  return useQuery({
    queryKey: ['home', userId, localDate.split(' ')[0]],
    queryFn: () => getHomeData({ userId, localDate }),
  })
}
