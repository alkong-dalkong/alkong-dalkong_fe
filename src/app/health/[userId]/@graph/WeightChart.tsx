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

import './chart.css'

type DataType = Array<{ name: string; weight: number }>

const data: DataType = [
  { name: '6월', weight: 54.8 },
  { name: '7월', weight: 55.0 },
  { name: '8월', weight: 54.5 },
  { name: '9월', weight: 55.2 },
]

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex-center flex-col rounded-lg bg-mint-1 px-[14px] pb-[8px] pt-[6px]">
        <p className="caption-M">{payload[0].payload.name}</p>
        <p className="headline-B">{payload[0].value}kg</p>
      </div>
    )
  }
  return null
}

const getYLabel = (data: DataType) => {
  const formatNumber = (x: number) => Math.round(x / 5) * 5

  let minWeight = formatNumber(Math.min(...data.map((item) => item.weight)))
  let maxWeight = formatNumber(Math.max(...data.map((item) => item.weight)))
  const avgWeight = formatNumber((minWeight + maxWeight) / 2)

  if (minWeight > avgWeight - 5) {
    minWeight = avgWeight - 5
  }

  if (maxWeight < avgWeight + 5) {
    maxWeight = avgWeight + 5
  }

  return [minWeight, avgWeight, maxWeight]
}

export const WeightChart = () => {
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
        <XAxis dataKey="name" tick={false} />
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
          dataKey="weight"
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
