'use client'

import { FormProvider } from 'react-hook-form'

import { MainHeader } from '@/components/header/MainHeader'
import { useClinicForm } from '@/schema'

import { ClinicForm } from './ClinicForm'

export const ClinicWriteClientPage = () => {
  const formMethod = useClinicForm()
  const { handleSubmit } = formMethod

  return (
    <>
      <MainHeader.Confirm
        title={`의사에게 전달할\n특이사항을 기입해주세요.`}
        onCancel={() => {}}
        onConfirm={handleSubmit(() => {})}
      />

      <FormProvider {...formMethod}>
        <ClinicForm />
      </FormProvider>
    </>
  )
}
