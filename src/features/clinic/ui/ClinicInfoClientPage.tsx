'use client'

import { FormProvider } from 'react-hook-form'

import { MainHeader } from '@/components/header/MainHeader'
import { useBoolean, useToggle } from '@/hooks'

import { useInsertedClinicForm } from '../service/useInsertedClinicForm'

import { ClinicForm } from './ClinicForm'
import { ClinicInfoModal } from './ClinicInfoModal'

type HeaderProps = {
  isEdit: boolean
  toggleIsEdit: VoidFunction
  handleClickConfirm: VoidFunction
  openModal: VoidFunction
}

type ClinicInfoClientPageProps = {
  medicalId: string
}

const Header = ({ isEdit, toggleIsEdit, handleClickConfirm, openModal }: HeaderProps) => {
  return (
    <div>
      {isEdit ? (
        <MainHeader.Confirm
          title={`의사에게 전달할\n특이사항을 기입해주세요.`}
          onCancel={toggleIsEdit}
          onConfirm={handleClickConfirm}
        />
      ) : (
        <MainHeader.Modify
          title={`의사에게 전달할\n특이사항을 기입해주세요.`}
          onDelete={openModal}
          onModify={toggleIsEdit}
        />
      )}
    </div>
  )
}

export const ClinicInfoClientPage = ({ medicalId }: ClinicInfoClientPageProps) => {
  const formMethod = useInsertedClinicForm(medicalId)
  const [isEdit, toggleIsEdit] = useToggle(false)
  const [modalState, openModal, closeModal] = useBoolean(false)

  const handleClickConfirm = () => {
    // 서버로 폼 전송
    toggleIsEdit()
  }

  return (
    <div className="flex-column h-full overflow-hidden">
      <Header
        isEdit={isEdit}
        toggleIsEdit={toggleIsEdit}
        handleClickConfirm={handleClickConfirm}
        openModal={openModal}
      />

      <FormProvider {...formMethod}>
        <ClinicForm isReadOnly={!isEdit} />
      </FormProvider>

      <ClinicInfoModal modalState={modalState} closeModal={closeModal} />
    </div>
  )
}
