import type { PropsWithChildren } from 'react'
import { useFormContext } from 'react-hook-form'

import { useAllChecked, useCheckBoxList, useCheckListActions } from '@/store/checkBoxStore'
import type { CheckBoxSectionType } from '@/types/common'

import { Icon } from '../icons'

type InputCheckBoxProps = {
  section: CheckBoxSectionType
}

type CheckBoxProps = {
  section: CheckBoxSectionType | 'all'
  isChecked: boolean
  onChange: () => void
}

const CheckBox = ({ section, isChecked, onChange, children }: PropsWithChildren<CheckBoxProps>) => {
  return (
    <div>
      <input
        type="checkbox"
        id={section}
        checked={isChecked}
        onChange={onChange}
        className="peer hidden"
      />
      <label
        htmlFor={section}
        className="block cursor-pointer rounded-xl border border-gray-3 bg-white px-5 py-[14px] peer-checked:bg-mint-1"
      >
        <div className="flex-align gap-2">
          {isChecked ? <Icon name="check-yes" /> : <Icon name="check-no" />}
          <p className="headline-B mr-auto text-gray-8">{children}</p>
          <Icon name="arrow-right" />
        </div>
      </label>
    </div>
  )
}

export const InputCheckBox = ({ children, section }: PropsWithChildren<InputCheckBoxProps>) => {
  const checkList = useCheckBoxList()
  const isChecked = checkList[section]
  const { setValue } = useFormContext()
  const { handleCheckBoxClick } = useCheckListActions()

  const handleCheck = () => {
    setValue(section, !checkList[section])
    handleCheckBoxClick(section)
  }

  return (
    <CheckBox section={section} isChecked={isChecked} onChange={handleCheck}>
      {children}
    </CheckBox>
  )
}

export const InputAllCheckBox = ({ children }: PropsWithChildren) => {
  const checkList = useCheckBoxList()
  const isAllChecked = useAllChecked()
  const { setValue } = useFormContext()
  const { handleAllCheckClick } = useCheckListActions()

  const handleCheck = () => {
    const sections = Object.keys(checkList)
    sections.forEach((sec) => setValue(sec, !isAllChecked))
    handleAllCheckClick()
  }

  return (
    <CheckBox section="all" isChecked={isAllChecked} onChange={handleCheck}>
      {children}
    </CheckBox>
  )
}
