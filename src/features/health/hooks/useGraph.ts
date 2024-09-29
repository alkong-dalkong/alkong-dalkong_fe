'use client'

import { useMemo, useState } from 'react'

import type { WeightInfoType } from '@/types'

export const useGraph = (info: WeightInfoType) => {
  const [index, setIndex] = useState<number>(0)

  const groupedData = useMemo(() => {
    const groups = []
    for (let i = 0; i < info.length; i += 4) {
      groups.push(info.slice(i, i + 4))
    }
    return groups
  }, [info])

  const increase = () => {
    if (index < groupedData.length - 1) {
      setIndex((prev) => prev + 1)
    }
  }

  const decrease = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1)
    }
  }

  return { data: groupedData[index].toReversed(), increase, decrease }
}
