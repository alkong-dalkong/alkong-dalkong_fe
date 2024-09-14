'use client'

import { FormProvider } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { MainHeader } from '@/components/header/MainHeader'
import { useSubmitAddClinicForm } from '@/features'
import { useClinicForm } from '@/schema'

import { ClinicForm } from './ClinicForm'

export const ClinicCreateClientPage = () => {
  const router = useRouter()
  const formMethod = useClinicForm()
  const { handleSubmit } = formMethod
  const submitFormattedForm = useSubmitAddClinicForm()

  const handleClickCancle = () => {
    router.back()
  }

  return (
    <div className="flex-column h-full overflow-hidden">
      <div>
        <MainHeader.Confirm
          title={`의사에게 전달할\n특이사항을 기입해주세요.`}
          onCancel={handleClickCancle}
          onConfirm={handleSubmit(submitFormattedForm)}
        />
      </div>

      <FormProvider {...formMethod}>
        <ClinicForm />
      </FormProvider>
    </div>
  )
}
