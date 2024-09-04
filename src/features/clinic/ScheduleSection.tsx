'use client'

import { Label } from '@/components'
import ActionTag from '@/components/actionTag/ActionTag'
import { useCurrentDate } from '@/store'
import type { ClinicResponse } from '@/types'

import { ScheduleItem } from './ScheduleItem'

type ClinicListProps = ClinicResponse

export const ScheduleSection = ({ list }: ClinicListProps) => {
  const date = useCurrentDate()
  const todaySchedules = list.filter((item) => item.hospitalDate.startsWith(date))

  return (
    <section className="mt-7">
      <div className="flex-between mb-3">
        <Label icon="clinic-label">병원 내원 일정</Label>
        <ActionTag.Plus label="추가" primary onClick={() => {}} />
      </div>

      <div className="flex-column gap-3">
        {todaySchedules.map((item) => (
          <ScheduleItem
            key={item.medicalId}
            medicalId={item.medicalId}
            hospitalName={item.hospitalName}
            hospitalDate={item.hospitalDate}
            medicalPart={item.medicalPart}
          />
        ))}
      </div>
    </section>
  )
}
