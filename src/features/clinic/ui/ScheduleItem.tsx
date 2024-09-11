'use client'

import { useParams, useRouter } from 'next/navigation'
import dayjs from 'dayjs'

import { Icon, Tag } from '@/components'
import type { ScheduleType } from '@/types'

import 'dayjs/locale/ko'

dayjs.locale('ko')

type ScheduleItemProps = {
  item: ScheduleType
}

export const ScheduleItem = ({ item }: ScheduleItemProps) => {
  const router = useRouter()
  const { userId } = useParams<{ userId: string }>()
  const { medicalId, hospitalDate, hospitalName, medicalPart } = item

  const time = dayjs(hospitalDate).format('HH:mm')
  const date = dayjs(hospitalDate).format('M월 D일(dd) A HH:mm')

  const handleClickItem = () => {
    router.push(`/clinic/${userId}/info/${medicalId}`)
  }

  return (
    <div className="rounded-xl bg-mint-0 p-4">
      <button className="size-full text-left" onClick={handleClickItem}>
        <div className="flex-between">
          <div className="flex-col">
            <p className="subtitle-B">
              {time} {hospitalName}
            </p>
            <p className="headline-M text-gray-6">{date}</p>
          </div>
          <Icon name="check-no" size={36} />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {medicalPart.map((part) => (
            <Tag key={part} label={part} />
          ))}
        </div>
      </button>
    </div>
  )
}
