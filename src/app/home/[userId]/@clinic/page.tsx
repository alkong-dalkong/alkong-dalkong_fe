import Label from '@/components/label/Label'

import { ClinicCard } from './ClinicCard'

const data = [
  { date: '2024/09/04 12:00:00', hospital: '연세 세브란스 정형외과', tag: '건강검진' },
  { date: '2024/09/05 12:00:00', hospital: '연세 세브란스 정형외과', tag: '건강검진' },
  { date: '2024/09/06 12:00:00', hospital: '연세 세브란스 정형외과', tag: '건강검진' },
  { date: '2024/09/07 12:00:00', hospital: '연세 세브란스 정형외과', tag: '건강검진' },
]

const ClinicSection = () => {
  return (
    <section className="mb-8 w-full">
      <Label icon="clinic-label">병원 내원 일정</Label>
      <div className="flex-column mt-2 gap-3">
        {data.map((clinic, idx) => (
          <ClinicCard key={idx} {...clinic} />
        ))}
      </div>
    </section>
  )
}

export default ClinicSection
