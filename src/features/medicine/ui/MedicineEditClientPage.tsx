'use client'

import { FormProvider } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { SubHeader } from '@/components'
import { MedicineForm, useCreateMedicineForm, useInsertedMedicineForm } from '@/features'

export const MedicineEditClientPage = () => {
  const formMethod = useInsertedMedicineForm()
  const router = useRouter()
  const { handleSubmit } = formMethod
  const submitFormattedForm = useCreateMedicineForm()

  return (
    <div className="flex-column h-full overflow-hidden">
      <div className="p-6">
        <SubHeader.Confirm
          title="복용약 수정"
          onCancel={() => router.back()}
          onConfirm={handleSubmit(submitFormattedForm)}
        />
      </div>
      <FormProvider {...formMethod}>
        <MedicineForm />
      </FormProvider>
    </div>
  )
}
