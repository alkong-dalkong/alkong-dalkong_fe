import Label from '@/components/label/Label'
import type { HomeResponseType } from '@/types'

import { HelperBox } from '../HelperBox'

import { RecentMedicalInfo } from './RecentMedicalInfo'
import { UpcomingMedicalInfo } from './UpcomingMedicalInfo'

type ClinicSectionProps = {
  upcomingMedicalInfo: HomeResponseType['data']['upcomingMedicalInfo']
  recentMedicalInfo: HomeResponseType['data']['recentMedicalInfo']
}

export const ClinicSection = ({ upcomingMedicalInfo, recentMedicalInfo }: ClinicSectionProps) => {
  const helperBox =
    upcomingMedicalInfo || recentMedicalInfo ? null : (
      <HelperBox title="진료에서 내원 일정을 추가해 보세요!" />
    )

  return (
    <section className="mb-8 w-full">
      <Label icon="clinic-label">병원 내원 일정</Label>
      <div className="flex-column mt-2 gap-3">
        {upcomingMedicalInfo && <UpcomingMedicalInfo {...upcomingMedicalInfo} />}
        {recentMedicalInfo && <RecentMedicalInfo {...recentMedicalInfo} />}
        {helperBox}
      </div>
    </section>
  )
}
