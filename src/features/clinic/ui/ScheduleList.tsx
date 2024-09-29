'use client'

import { useParams, useRouter } from 'next/navigation'

import { ActionTag, Label } from '@/components'
import { ScheduleItem } from '@/features'
import { useCurrentDate } from '@/store'
import type { ScheduleType } from '@/types'

type ClinicListProps = {
  scheduleList: ScheduleType[]
}

const ScheduleListHeader = () => {
  const { userId } = useParams<{ userId: string }>()
  const router = useRouter()

  const handleClickPlusButton = () => {
    router.push(`/clinic/${userId}/create`)
  }

  return (
    <div className="flex-between mb-3">
      <Label icon="clinic-label">병원 내원 일정</Label>
      <ActionTag.Plus label="추가" primary onClick={handleClickPlusButton} />
    </div>
  )
}

export const ScheduleList = ({ scheduleList }: ClinicListProps) => {
  const selectedDate = useCurrentDate()
  const todaySchedules = scheduleList.filter((item) => item.hospitalDate.startsWith(selectedDate))

  return (
    <>
      <ScheduleListHeader />

      {todaySchedules.length ? (
        <div className="flex-column gap-3">
          {todaySchedules.map((item) => (
            <ScheduleItem key={item.medicalId} item={item} />
          ))}
        </div>
      ) : (
        <p className="subtitle-M mt-[82px] text-center text-gray-6">예정된 일정이 없어요!</p>
      )}
    </>
  )
}
