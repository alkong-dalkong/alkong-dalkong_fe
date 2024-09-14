'use client'

import { FormProvider } from 'react-hook-form'
import { useParams, useRouter } from 'next/navigation'

import { MainHeader } from '@/components'
import { ClinicForm, ClinicInfoModal, useInsertedClinicForm } from '@/features'
import { useBoolean } from '@/hooks'

export const ClinicInfoClientPage = () => {
  const router = useRouter()
  const formMethod = useInsertedClinicForm()

  const [modalState, openModal, closeModal] = useBoolean(false)
  const { userId, medicalId } = useParams<{ userId: string; medicalId: string }>()

  const handleClickModify = () => router.push(`/clinic/${userId}/edit/${medicalId}`)

  return (
    <div className="flex-column h-full overflow-hidden">
      <FormProvider {...formMethod}>
        <div>
          <MainHeader.Modify
            title={`의사에게 전달할\n특이사항을 기입해주세요.`}
            onDelete={openModal}
            onModify={handleClickModify}
          />
        </div>
        <ClinicForm isReadOnly />
      </FormProvider>

      <ClinicInfoModal modalState={modalState} closeModal={closeModal} />
    </div>
  )
}
