'use client'

import { FormProvider } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { MainHeader } from '@/components/header/MainHeader'
import { useClinicForm } from '@/schema'

import { ClinicForm } from './ClinicForm'

export const ClinicWriteClientPage = () => {
  const formMethod = useClinicForm()
  const router = useRouter()
  const { handleSubmit } = formMethod

  const handleClickCancle = () => {
    router.back()
  }

  const handleClickConfirm = () => {
    // 폼 제출 시 실행할 로직
  }

  return (
    <div className="flex-column h-full overflow-hidden">
      <div>
        <MainHeader.Confirm
          title={`의사에게 전달할\n특이사항을 기입해주세요.`}
          onCancel={handleClickCancle}
          onConfirm={handleSubmit(handleClickConfirm)}
        />
      </div>

      <FormProvider {...formMethod}>
        <ClinicForm />
      </FormProvider>
    </div>
  )
}
