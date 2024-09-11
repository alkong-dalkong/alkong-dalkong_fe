'use client'

import { useRouter } from 'next/navigation'

import { BottomNav, Calendar, Label, Profile } from '@/components'
import ActionTag from '@/components/actionTag/ActionTag'
import { ScheduleList } from '@/features'
import { useUserStore } from '@/store'

import { useScheduleList } from '../service/useScheduleList'

type ClinicClientPageProps = {
  userId: string
}

export const ClinicClientPage = ({ userId }: ClinicClientPageProps) => {
  const { user } = useUserStore()
  const router = useRouter()
  const scheduleList = useScheduleList(userId)

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
          <ScheduleList userId={userId} scheduleList={scheduleList} />
        </section>
      </main>
      <BottomNav />
    </>
  )
}
