'use client'

import { useCurrentDate } from '@/store'
import type { ScheduleType } from '@/types'

import { ScheduleItem } from './ScheduleItem'

type ClinicListProps = {
  scheduleList: ScheduleType[]
}

export const ScheduleList = ({ scheduleList }: ClinicListProps) => {
  const date = useCurrentDate()
  const todaySchedules = scheduleList.filter((item) => item.hospitalDate.startsWith(date))

  return (
    <>
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
