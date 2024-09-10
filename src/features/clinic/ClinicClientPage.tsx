'use client'

import { useEffect } from 'react'

import { BottomNav, Calendar, Profile } from '@/components'
import { useCalendarActions, useUserStore } from '@/store'

import { ScheduleSection } from './ScheduleSection'

const LIST = [
  {
    medicalId: 0,
    hospitalName: '연세 세브란스',
    hospitalDate: '2024-08-11 12:05:30',
    medicalPart: ['건강검진', '수면 내시경', '속쓰림'],
  },
  {
    medicalId: 1,
    hospitalName: '서울대학교병원',
    hospitalDate: '2024-08-13 12:05:30',
    medicalPart: ['멍', '감기'],
  },
  {
    medicalId: 2,
    hospitalName: '아주대학교병원',
    hospitalDate: '2024-08-11 17:05:30',
    medicalPart: ['다리 골절', '깁스'],
  },
  {
    medicalId: 3,
    hospitalName: '정형외과',
    hospitalDate: '2024-09-07 07:00:00',
    medicalPart: ['허리 디스크'],
  },
  {
    medicalId: 4,
    hospitalName: '정형외과',
    hospitalDate: '2024-09-07 07:00:00',
    medicalPart: ['허리 디스크'],
  },
]

type ClinicClientPageProps = {
  userId: string
}

export const ClinicClientPage = ({ userId }: ClinicClientPageProps) => {
  const { user } = useUserStore()
  const { resetCalendar, updateScheduledDates } = useCalendarActions()

  const schedules = LIST.map((schedule) => schedule.hospitalDate)

  useEffect(() => {
    resetCalendar()
    updateScheduledDates(schedules)
  }, [resetCalendar, schedules, updateScheduledDates])

  return (
    <>
      <main className="mx-4 mb-[130px] mt-[38px] overflow-y-scroll scrollbar-hide">
        <div className="absolute right-5 top-[22px]">
          <Profile name={user.name} size="sm" bgColor="#C5FDEC" />
        </div>

        <section>
          <Calendar />
        </section>

        <ScheduleSection userId={userId} list={LIST} />
      </main>
      <BottomNav />
    </>
  )
}
