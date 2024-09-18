'use client'

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

import { CustomTooltip, getYLabel } from '../utils/chart'

import '../styles/chart.css'

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
