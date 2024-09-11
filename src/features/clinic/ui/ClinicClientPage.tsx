'use client'

import { useParams, useRouter } from 'next/navigation'

import { BottomNav, Calendar, Label, Profile } from '@/components'
import ActionTag from '@/components/actionTag/ActionTag'
import { ScheduleList } from '@/features'
import { useUserStore } from '@/store'

import { useScheduleList } from '../service/useScheduleList'

export const ClinicClientPage = () => {
  const { user } = useUserStore()
  const { userId } = useParams<{ userId: string }>()
  const router = useRouter()
  const scheduleList = useScheduleList()

  const handleClickPlusButton = () => {
    router.push(`/clinic/${userId}/write`)
  }

  return (
    <>
      <main className="mx-4 mb-[130px] mt-[38px] overflow-y-scroll scrollbar-hide">
        <div className="absolute right-5 top-[22px]">
          <Profile name={user.name} size="sm" bgColor="#C5FDEC" />
        </div>

        <section>
          <Calendar />
        </section>

        <section className="mt-7">
          <div className="flex-between mb-3">
            <Label icon="clinic-label">병원 내원 일정</Label>
            <ActionTag.Plus label="추가" primary onClick={handleClickPlusButton} />
          </div>
          <ScheduleList scheduleList={scheduleList} />
        </section>
      </main>
      <BottomNav />
    </>
  )
}
