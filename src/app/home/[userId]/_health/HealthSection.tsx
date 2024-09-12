'use client'

import dayjs from 'dayjs'

import Label from '@/components/label/Label'
import type { HomeResponseType } from '@/types'

import { HelperBox } from '../HelperBox'
import { InfoBox } from '../InfoBox'

import 'dayjs/locale/ko'

type HealthSectionProps = {
  recentWeightInfo?: HomeResponseType['data']['recentWeightInfo']
}

export const HealthSection = ({ recentWeightInfo }: HealthSectionProps) => {
  let box = null
  if (recentWeightInfo) {
    const { weight, date } = recentWeightInfo
    const now = dayjs().locale('ko').startOf('day')
    const schedule = dayjs(date).locale('ko').startOf('day')

    const diffDays = now.diff(schedule, 'day')

    box = <InfoBox title={`${weight}kg`} schedule={`${diffDays}일 전`} />
  } else {
    box = <HelperBox title="건강에서 내 체중을 추가해 보세요!" />
  }

  return (
    <section className="mb-8 w-full">
      <Label icon="clinic-label">체중 기록</Label>
      <div className="flex-column mt-2 gap-3">{box}</div>
    </section>
  )
}
