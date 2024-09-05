'use client'

import { FormProvider } from 'react-hook-form'

import { MainHeader } from '@/components/header/MainHeader'
import { useBoolean, useToggle } from '@/hooks'
import { useClinicForm } from '@/schema'

import { ClinicForm } from '../write/ClinicForm'

import { ClinicInfoModal } from './ClinicInfoModal'

const data = {
  medicalId: 2,
  hospitalName: '서울대학교병원',
  hospitalDate: '2024-09-28 13:00:00',
  medicalPart: ['멍', '속쓰림'],
  medicalMemo: '메모',
  medicalAlarm: '없음',
}

type HeaderProps = {
  isEdit: boolean
  toggleIsEdit: VoidFunction
  handleClickConfirm: VoidFunction
  openModal: VoidFunction
}

const Header = ({ isEdit, toggleIsEdit, handleClickConfirm, openModal }: HeaderProps) => {
  return (
    <>
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
    </>
  )
}

export const ClinicInfoClientPage = () => {
  const formMethod = useClinicForm(data)
  const [isEdit, toggleIsEdit] = useToggle(false)
  const [modalState, openModal, closeModal] = useBoolean(false)

  const handleClickConfirm = () => {
    // 서버로 폼 전송
    toggleIsEdit()
  }

  return (
    <>
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
    </>
  )
}
