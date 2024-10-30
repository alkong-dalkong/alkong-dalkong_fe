import type { WeightInfoType } from '@/types'

const weekNthNumber = ['첫째주', '둘째주', '셋째주', '넷째주', '다섯째주']

export const formatTooltip = (date: string): string => {
  const dates = date.split('-')

  if (dates.length === 3 && dates[2].startsWith('W')) {
    const weekNumber = parseInt(dates[2].replace('W', ''), 10)
    return `${parseInt(dates[1], 10)}월 ${weekNthNumber[weekNumber - 1]}`
  } else {
    return `${parseInt(dates[1], 10)}월`
  }
}

export const getYLabel = (data: WeightInfoType) => {
  const formatNumber = (x: number) => Math.round(x / 5) * 5

  let minWeight = formatNumber(Math.min(...data.map((item) => item.avgWeight)))
  let maxWeight = formatNumber(Math.max(...data.map((item) => item.avgWeight)))
  const avgWeight = formatNumber((minWeight + maxWeight) / 2)

  if (minWeight > avgWeight - 5) {
    minWeight = avgWeight - 5
  }

  if (maxWeight < avgWeight + 5) {
    maxWeight = avgWeight + 5
  }

  return [minWeight, avgWeight, maxWeight]
}
