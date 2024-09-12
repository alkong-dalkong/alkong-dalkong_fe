import Label from '@/components/label/Label'
import type { HomeResponseType } from '@/types'

import { HelperBox } from '../HelperBox'
import { InfoBox } from '../InfoBox'

type MedicineSectionProps = {
  currentMedicineInfo: HomeResponseType['data']['currentMedicineInfo']
}

const weekEn2Ko: { [key: string]: string } = {
  MONDAY: '월',
  TUESDAY: '화',
  WEDNESDAY: '수',
  THURSDAY: '목',
  FRIDAY: '금',
  SATURDAY: '토',
  SUNDAY: '일',
}

export const MedicineSection = ({ currentMedicineInfo }: MedicineSectionProps) => {
  let content = null
  if (currentMedicineInfo.length === 0) {
    content = <HelperBox title="약에서 복용 중인 약을 추가해 보세요!" />
  } else {
    content = (
      <>
        {currentMedicineInfo.map(({ medicineName, times, weekList }, idx) => {
          let schedule = ''
          if (weekList.length === 7) {
            schedule = '매일'
          } else {
            const formatKo = weekList.map((week) => weekEn2Ko[week])
            schedule = formatKo.join(', ')
          }

          if (times.length === 1) {
            schedule += ` ${times[0]}`
          } else {
            schedule += ` ${times.length}회`
          }

          return <InfoBox key={idx} title={medicineName} schedule={schedule} />
        })}
      </>
    )
  }

  return (
    <section className="w-full">
      <Label icon="medicine-label">약 기록</Label>
      <div className="flex-column mt-2 gap-3">{content}</div>
    </section>
  )
}
