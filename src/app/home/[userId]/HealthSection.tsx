'use client'

import Label from '@/components/label/Label'

import { InfoBox } from './InfoBox'

const HealthSection = () => {
  return (
    <section className="mb-8 w-full">
      <Label icon="clinic-label">체중 기록</Label>
      <div className="flex-column mt-2 gap-3">
        <InfoBox title="63.5kg" schedule="3일 전" />
      </div>
    </section>
  )
}

export default HealthSection
