'use client'
import { useFormContext } from 'react-hook-form'

import { MainHeader } from '@/components'
import { useEditClinicFormMethod } from '@/features'
import type { ClinicFormType } from '@/types'

type HeaderProps = {
  isEdit: boolean
  toggleIsEdit: VoidFunction
  openModal: VoidFunction
}

export const ClinicInfoHeader = ({ isEdit, toggleIsEdit, openModal }: HeaderProps) => {
  const { handleSubmit } = useFormContext<ClinicFormType>()
  const handleClickConfirm = useEditClinicFormMethod(toggleIsEdit)

  return (
    <div>
      {isEdit ? (
        <MainHeader.Confirm
          title={`의사에게 전달할\n특이사항을 기입해주세요.`}
          onCancel={toggleIsEdit}
          onConfirm={handleSubmit(handleClickConfirm)}
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

export default ClinicInfoHeader
