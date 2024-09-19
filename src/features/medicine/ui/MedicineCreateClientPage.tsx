'use client'

import { FormProvider } from 'react-hook-form'

import { SubHeader } from '@/components'
import { MedicineForm } from '@/features'
import { useMedicineForm } from '@/schema'

export const MedicineCreateClientPage = () => {
  const formMethod = useMedicineForm()
  const { handleSubmit } = formMethod

  return (
    <div className="flex-column h-full overflow-hidden">
      <div className="p-6">
        <SubHeader.Confirm
          title="복용약 추가"
          onCancel={() => {}}
          onConfirm={handleSubmit(() => {})}
        />
      </div>
      <FormProvider {...formMethod}>
        <MedicineForm />
      </FormProvider>
    </div>
  )
}
