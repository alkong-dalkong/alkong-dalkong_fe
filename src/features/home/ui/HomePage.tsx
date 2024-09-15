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

  const { upcomingMedicalInfo, recentMedicalInfo, recentWeightInfo, currentMedicineInfo } =
    homePageData.data

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
