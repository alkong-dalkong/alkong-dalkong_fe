'use client'

import { FormProvider } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { SubHeader } from '@/components'
import { formattedMedicineForm, MedicineForm, useCreateMedicineInfo } from '@/features'
import { useMedicineForm } from '@/schema'
import type { MedicineFormType } from '@/types'

export const MedicineCreateClientPage = () => {
  const router = useRouter()
  const formMethod = useMedicineForm()
  const { handleSubmit } = formMethod
  const { mutate: createMutation } = useCreateMedicineInfo()

  const handleSubmitForm = (formData: MedicineFormType) => {
    const formmatedForm = formattedMedicineForm(formData)
    createMutation(formmatedForm)
  }

  return (
    <div className="flex-column h-full overflow-hidden">
      <div className="p-6">
        <SubHeader.Confirm
          title="복용약 추가"
          onCancel={() => router.back()}
          onConfirm={handleSubmit(handleSubmitForm)}
        />
      </div>
      <FormProvider {...formMethod}>
        <MedicineForm />
      </FormProvider>
    </div>
  )
}
