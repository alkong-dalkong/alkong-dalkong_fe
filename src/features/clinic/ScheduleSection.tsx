'use client'

import { useRouter } from 'next/navigation'

import { Label } from '@/components'
import ActionTag from '@/components/actionTag/ActionTag'
import { useCurrentDate } from '@/store'
import type { ClinicResponse } from '@/types'

import { ScheduleItem } from './ScheduleItem'

type ClinicListProps = ClinicResponse & { userId: string }

export const ScheduleSection = ({ userId, list }: ClinicListProps) => {
  const router = useRouter()
  const date = useCurrentDate()
  const todaySchedules = list.filter((item) => item.hospitalDate.startsWith(date))

  const handleClickPlusButton = () => {
    router.push(`/clinic/${userId}/write`)
  }

  return (
    <section className="mt-7">
      <div className="flex-between mb-3">
        <Label icon="clinic-label">병원 내원 일정</Label>
        <ActionTag.Plus label="추가" primary onClick={handleClickPlusButton} />
      </div>

      {todaySchedules.length ? (
        <div className="flex-column gap-3">
          {todaySchedules.map((item) => (
            <ScheduleItem key={item.medicalId} userId={userId} item={item} />
          ))}
        </div>
      ) : (
        <p className="subtitle-M mt-[82px] text-center text-gray-6">예정된 일정이 없어요!</p>
      )}
    </section>
  )
}
