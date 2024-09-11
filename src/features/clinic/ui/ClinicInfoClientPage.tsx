'use client'

import { FormProvider } from 'react-hook-form'

import { ClinicForm, ClinicInfoHeader, ClinicInfoModal, useInsertedClinicForm } from '@/features'
import { useBoolean, useToggle } from '@/hooks'

export const ClinicInfoClientPage = () => {
  const formMethod = useInsertedClinicForm()
  const [isEdit, toggleIsEdit] = useToggle(false)
  const [modalState, openModal, closeModal] = useBoolean(false)

  return (
    <div className="flex-column h-full overflow-hidden">
      <FormProvider {...formMethod}>
        <ClinicInfoHeader isEdit={isEdit} toggleIsEdit={toggleIsEdit} openModal={openModal} />
        <ClinicForm isReadOnly={!isEdit} />
      </FormProvider>

      <ClinicInfoModal modalState={modalState} closeModal={closeModal} />
    </div>
  )
}
