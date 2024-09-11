'use client'

import { FormProvider } from 'react-hook-form'

import { ClinicForm, ClinicInfoHeader, ClinicInfoModal } from '@/features'
import { useBoolean, useToggle } from '@/hooks'

import { useInsertedClinicForm } from '../service/useInsertedClinicForm'

type ClinicInfoClientPageProps = {
  medicalId: string
}

export const ClinicInfoClientPage = ({ medicalId }: ClinicInfoClientPageProps) => {
  const formMethod = useInsertedClinicForm(medicalId)
  const [isEdit, toggleIsEdit] = useToggle(false)
  const [modalState, openModal, closeModal] = useBoolean(false)

  return (
    <div className="flex-column h-full overflow-hidden">
      <FormProvider {...formMethod}>
        <ClinicInfoHeader
          isEdit={isEdit}
          toggleIsEdit={toggleIsEdit}
          openModal={openModal}
          medicalId={medicalId}
        />

        <ClinicForm isReadOnly={!isEdit} />
      </FormProvider>

      <ClinicInfoModal modalState={modalState} closeModal={closeModal} />
    </div>
  )
}
