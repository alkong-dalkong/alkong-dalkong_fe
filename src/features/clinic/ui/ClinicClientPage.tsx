'use client'

import { BottomNav, Calendar, Profile } from '@/components'
import { useUserStore } from '@/store'

import { useScheduleList } from '../service/useScheduleList'

import { ScheduleSection } from './ScheduleSection'

type ClinicClientPageProps = {
  userId: string
}

export const ClinicClientPage = ({ userId }: ClinicClientPageProps) => {
  const { user } = useUserStore()
  const scheduleList = useScheduleList(userId)

  return (
    <>
      <main className="mx-4 mb-[130px] mt-[38px] overflow-y-scroll scrollbar-hide">
        <div className="absolute right-5 top-[22px]">
          <Profile name={user.name} size="sm" bgColor="#C5FDEC" />
        </div>

        <section>
          <Calendar />
        </section>

        <ScheduleSection userId={userId} scheduleList={scheduleList} />
      </main>
      <BottomNav />
    </>
  )
}
