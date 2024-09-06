import Label from '@/components/label/Label'

import { InfoBox } from '../InfoBox'

const MedicineSection = () => {
  return (
    <section className="w-full">
      <Label icon="medicine-label">약 기록</Label>
      <div className="flex-column mt-2 gap-3">
        <InfoBox title="혈압약" schedule="매일 07:30" />
        <InfoBox title="종합비타민" schedule="월, 수, 금, 일 13:00" />
        <InfoBox title="철분제" schedule="주중 20:00" />
      </div>
    </section>
  )
}

export default MedicineSection
