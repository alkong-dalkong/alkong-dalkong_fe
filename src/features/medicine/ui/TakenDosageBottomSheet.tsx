'use client'

import { useFormContext } from 'react-hook-form'

import { BottomSheet, Icon, Label, SubHeader } from '@/components'
import { parseDosage, useDosageInput } from '@/features'
import { useToggle } from '@/hooks'
import type { BottomSheetType } from '@/types'

type TakenDosageDropdownProps = {
  isPillType: boolean
  toggleDoseType: VoidFunction
}

const TakenDosageDropdown = ({ isPillType, toggleDoseType }: TakenDosageDropdownProps) => {
  const [isOpenDropdown, toggleDropdown] = useToggle()

  const upBorderStyle = isOpenDropdown ? 'rounded-md rounded-t-none' : 'rounded-md'
  const bottomBorderStyle = isOpenDropdown
    ? 'rounded-md rounded-b-none border-b border-b-mint-3'
    : 'rounded-md'

  const handleClickButton = () => {
    toggleDoseType()
    toggleDropdown()
  }

  return (
    <div className="relative">
      <button
        type="button"
        className={`flex-align gap-2 ${bottomBorderStyle} bg-mint-0 px-3 py-[6px]`}
        onClick={toggleDropdown}
      >
        <span>{isPillType ? '정' : '회분'}</span>
        <Icon name={isOpenDropdown ? 'arrow-up' : 'arrow-down'} color="#0E8763" />
      </button>

      {isOpenDropdown && (
        <button
          type="button"
          className={`absolute w-full rounded-md bg-mint-0 px-3 py-[6px] text-left ${upBorderStyle}`}
          onClick={handleClickButton}
        >
          <span>{isPillType ? '회분' : '정'}</span>
        </button>
      )}
    </div>
  )
}

export const TakenDosageBottomSheet = ({ section, isShowing, onClickScrim }: BottomSheetType) => {
  const { getValues, setValue } = useFormContext()
  const { dosageAmount, dosageType } = parseDosage(getValues(section))
  const { inputValue, handleChangeInput } = useDosageInput(dosageAmount.toString())

  const [isPillType, toggleDoseType] = useToggle(dosageType === '정')

  const handleClickConfirm = () => {
    setValue(section, `${inputValue}${isPillType ? '정' : '회분'}`)
    onClickScrim()
  }

  return (
    <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
      <div className="w-full pb-5">
        <SubHeader.Confirm title="복용량" onCancel={onClickScrim} onConfirm={handleClickConfirm} />
      </div>

      <div className="size-full overflow-y-scroll pb-12 pt-5 scrollbar-hide">
        <Label icon="time-label">복용량을 선택해주세요.</Label>
        <div className="flex-center mt-3 gap-4">
          <input
            className="w-[34px] rounded-md bg-mint-0 px-3 py-[6px] focus:outline-none"
            value={inputValue}
            onChange={handleChangeInput}
          />
          <TakenDosageDropdown isPillType={isPillType} toggleDoseType={toggleDoseType} />
          <p>씩 복용해요!</p>
        </div>
      </div>
    </BottomSheet>
  )
}