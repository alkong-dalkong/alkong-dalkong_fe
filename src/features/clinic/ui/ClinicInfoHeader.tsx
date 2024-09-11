import { useFormContext } from 'react-hook-form'

import { MainHeader } from '@/components'
import type { ClinicFormType } from '@/types'

import { useEditInfoFormMethod } from '../service/useEditInfoFormMethod'

type HeaderProps = {
  isEdit: boolean
  toggleIsEdit: VoidFunction
  openModal: VoidFunction
}

export const ClinicInfoHeader = ({ isEdit, toggleIsEdit, openModal }: HeaderProps) => {
  const { handleSubmit } = useFormContext<ClinicFormType>()
  const handleClickConfirm = useEditInfoFormMethod(toggleIsEdit)

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
