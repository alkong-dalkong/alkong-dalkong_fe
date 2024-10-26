'use client'

import { useRouter } from 'next/navigation'

import { BottomNav, Calendar, Profile } from '@/components'
import { ScheduleList, useMonthlyScheduleList } from '@/features'
import { useUserStore } from '@/store'

export const ClinicClientPage = () => {
  const { user } = useUserStore()
  const scheduleList = useMonthlyScheduleList()

  const router = useRouter()
  const handleGoSetting = () => {
    router.push(`/setting`)
  }

  return (
    <>
      <main className="mx-4 mb-[130px] mt-[38px] overflow-y-scroll scrollbar-hide">
        <div className="absolute right-5 top-[22px]">
          <Profile
            name={user.ownerName}
            size="sm"
            bgColor="#C5FDEC"
            onClickProfile={handleGoSetting}
          />
        </div>

        <section>
          <Calendar />
        </section>

        <section className="mt-7">
          <ScheduleList scheduleList={scheduleList} />
        </section>
      </main>
      <BottomNav />
    </>
  )
}
