'use client'

import dayjs from 'dayjs'

import { DashBoardTemplate } from '@/features'
import { useHome } from '@/hooks/apis/useHome'

import { ClinicSection } from './_clinic/ClinicSection'
import { HealthSection } from './_health/HealthSection'
import { MedicineSection } from './_medicine/MedicineSection'

export type HomeRouteParams = {
  params: { userId: string }
}

const Home = ({ params: { userId } }: HomeRouteParams) => {
  const currentTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
  const { data } = useHome({ userId, localDate: currentTime })

  if (!data) {
    return
  }

  const DUMMY = {
    code: 200,
    data: {
      upcomingMedicalInfo: {
        hospitalName: '연세 세브란스 정형외과',
        hospitalDate: '2024-09-14 12:00',
        medicalPart: ['건강검진'],
      },
      recentMedicalInfo: {
        hospitalName: '바른 이비인후과',
        hospitalDate: '2024-06-25 09:00',
      },
      recentWeightInfo: {
        weight: 63.5,
        date: '2024-08-24',
      },
      currentMedicineInfo: [
        {
          medicineName: '혈압약',
          times: ['07:30', '20:00'],
          weekList: ['MONDAY'],
        },
        {
          medicineName: '종합비타민',
          times: ['13:00'],
          weekList: ['MONDAY'],
        },
        {
          medicineName: '철분제',
          times: ['08:00', '12:00', '20:00'],
          weekList: ['MONDAY', 'THURSDAY', 'SUNDAY'],
        },
      ],
    },
  }

  const { upcomingMedicalInfo, recentMedicalInfo, recentWeightInfo, currentMedicineInfo } =
    DUMMY.data // data.data

  return (
    <DashBoardTemplate route="home">
      <ClinicSection
        upcomingMedicalInfo={upcomingMedicalInfo}
        recentMedicalInfo={recentMedicalInfo}
      />
      <HealthSection recentWeightInfo={recentWeightInfo} />
      <MedicineSection currentMedicineInfo={currentMedicineInfo} />
    </DashBoardTemplate>
  )
}

export default Home
