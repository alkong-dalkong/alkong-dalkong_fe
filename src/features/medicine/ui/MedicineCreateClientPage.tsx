'use client'

import { FormProvider } from 'react-hook-form'

import { SubHeader } from '@/components'
import { MedicineForm, useCreateMedicineForm } from '@/features'
import { useMedicineForm } from '@/schema'

export const MedicineCreateClientPage = () => {
  const formMethod = useMedicineForm()
  const { handleSubmit } = formMethod
  const submitFormattedForm = useCreateMedicineForm()

  return (
    <div className="flex-column h-full overflow-hidden">
      <div className="p-6">
        <SubHeader.Confirm
          title="복용약 추가"
          onCancel={() => {}}
          onConfirm={handleSubmit(submitFormattedForm)}
        />
      </div>
      <FormProvider {...formMethod}>
        <MedicineForm />
      </FormProvider>
    </div>
  )
}
