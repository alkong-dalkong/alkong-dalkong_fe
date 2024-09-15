'use client'

import type { TooltipProps } from 'recharts'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import type { WeightInfoType } from '@/types'

import '../styles/chart.css'

const weekMap = ['첫째주', '둘째주', '셋째주', '넷째주', '다섯째주']

const formatWeekDate = (date: string): string => {
  const dates = date.split('-')

  if (dates.length === 3 && dates[2].startsWith('W')) {
    const weekNumber = parseInt(dates[2].replace('W', ''), 10)
    return `${parseInt(dates[1], 10)}월 ${weekMap[weekNumber - 1]}`
  } else {
    return `${parseInt(dates[1], 10)}월`
  }
}

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex-center flex-col rounded-lg bg-mint-1 px-[14px] pb-[8px] pt-[6px]">
        <p className="caption-M">{formatWeekDate(payload[0].payload.avgDate)}</p>
        <p className="headline-B">{payload[0].value}kg</p>
      </div>
    )
  }
  return null
}

const getYLabel = (data: WeightInfoType) => {
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

export const WeightChart = ({ data }: { data: WeightInfoType }) => {
  const [min, avg, max] = getYLabel(data)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 10,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis padding={{ left: 20, right: 20 }} dataKey="avgDate" tick={false} />
        <YAxis
          ticks={[min, avg, max]}
          domain={[min, max]}
          tickFormatter={(tick) => `${tick}kg`}
          tick={{
            fontSize: 15,
            fill: '#676A6B',
          }}
          tickMargin={20}
          orientation="right"
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="linear"
          dataKey="avgWeight"
          stroke="#27CD9B"
          strokeWidth={2}
          dot={{
            r: 6,
            fill: '#0E8763',
            strokeWidth: 0,
          }}
          activeDot={{
            r: 8,
            fill: '#ffffff',
            stroke: '#2CA58D',
            strokeWidth: 4,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
