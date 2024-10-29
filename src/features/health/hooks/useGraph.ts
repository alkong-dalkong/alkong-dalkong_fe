'use client'

import { useMemo, useState } from 'react'

import { useWeightInfo } from '@/features'

export const useGraph = () => {
  const info = useWeightInfo()
  const [index, setIndex] = useState<number>(0)

  const quadGraphData = useMemo(() => {
    const groups = []
    for (let i = 0; i < info.length; i += 4) {
      groups.push(info.slice(i, i + 4))
    }
    return groups
  }, [info])

  const increase = () => {
    if (index < quadGraphData.length - 1) {
      setIndex((prev) => prev + 1)
    }
  }

  const decrease = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1)
    }
  }

  return { data: quadGraphData[index]?.toReversed(), increase, decrease }
}
