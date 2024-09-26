'use client'

import { FormProvider } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { SubHeader } from '@/components'
import {
  formattedMedicineForm,
  MedicineForm,
  useEditMedicine,
  useInsertedMedicineForm,
} from '@/features'
import type { MedicineFormType } from '@/types'

export const MedicineEditClientPage = () => {
  const router = useRouter()
  const formMethod = useInsertedMedicineForm()
  const { mutate: editMutation } = useEditMedicine()

  const { handleSubmit } = formMethod

  const handleSubmitForm = (formData: MedicineFormType) => {
    const formmatedForm = formattedMedicineForm(formData)
    editMutation(formmatedForm)
  }

  return (
    <div className="flex-column h-full overflow-hidden">
      <div className="p-6">
        <SubHeader.Confirm
          title="복용약 수정"
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
