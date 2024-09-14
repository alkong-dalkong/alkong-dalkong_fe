'use client'

import { DashBoardTemplate, HelperBox } from '@/features'
import { ClinicSection, HealthSection, MedicineSection } from '@/features'
import { HealthInfo, MedicineInfo, RecentMedicalInfo, UpcomingMedicalInfo } from '@/features'
import { useHome } from '@/hooks/apis/useHome'

export const HomePage = ({ userId }: { userId: string }) => {
  const { data: homePageData } = useHome(userId)

  if (!homePageData) {
    return (
      <DashBoardTemplate route="home">
        <div>네트워크 요청 실패</div>
      </DashBoardTemplate>
    )
  }

  const DUMMY = {
    code: 200,
    data: {
      upcomingMedicalInfo: {
        hospitalName: '연세 세브란스 정형외과',
        hospitalDate: '2024-09-17 12:00',
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
    DUMMY.data // homePageData.data

  return (
    <DashBoardTemplate route="home">
      <ClinicSection>
        {!upcomingMedicalInfo && !recentMedicalInfo && (
          <HelperBox title="진료에서 내원 일정을 추가해 보세요!" />
        )}
        {upcomingMedicalInfo && <UpcomingMedicalInfo {...upcomingMedicalInfo} />}
        {recentMedicalInfo && <RecentMedicalInfo {...recentMedicalInfo} />}
      </ClinicSection>
      <HealthSection>
        {recentWeightInfo ? (
          <HealthInfo {...recentWeightInfo} />
        ) : (
          <HelperBox title="건강에서 내 체중을 추가해 보세요!" />
        )}
      </HealthSection>
      <MedicineSection>
        {currentMedicineInfo.length === 0 ? (
          <HelperBox title="약에서 복용 중인 약을 추가해 보세요!" />
        ) : (
          <MedicineInfo info={currentMedicineInfo} />
        )}
      </MedicineSection>
    </DashBoardTemplate>
  )
}
