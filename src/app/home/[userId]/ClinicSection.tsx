import Label from '@/components/label/Label'

import { RecentMedicalInfo } from './RecentMedicalInfo'
import { UpcomingMedicalInfo } from './UpcomingMedicalInfo'

const data = [
  { date: '2024/09/04 12:00:00', hospital: '연세 세브란스 정형외과', tag: '건강검진' },
  { date: '2024/09/07 12:00:00', hospital: '연세 세브란스 정형외과', tag: '건강검진' },
]

const ClinicSection = () => {
  return (
    <section className="mb-8 w-full">
      <Label icon="clinic-label">병원 내원 일정</Label>
      <div className="flex-column mt-2 gap-3">
        <UpcomingMedicalInfo {...data[1]} />
        <RecentMedicalInfo {...data[0]} />
      </div>
    </section>
  )
}

export default ClinicSection
