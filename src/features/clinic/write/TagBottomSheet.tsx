'use client'

import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { BottomSheet, Label, SubHeader } from '@/components'
import ActionTag from '@/components/actionTag/ActionTag'
import type { ClinicBottomSheetType } from '@/types'

type ToggledTagListProps = {
  selectedTags: string[]
  onClick: (tag: string) => void
}

const CLINIC_TAGS = [
  '건강검진',
  '멍',
  '속쓰림',
  '기침',
  '콧물',
  '알레르기',
  '피부염',
  '열',
  '어지러움',
]

const ToggledTagList = ({ selectedTags, onClick }: ToggledTagListProps) => {
  return (
    <>
      {CLINIC_TAGS.map((tag) => {
        const isSelected = selectedTags.includes(tag)
        const TagComponent = isSelected ? ActionTag.Minus : ActionTag.Plus

        return <TagComponent key={tag} label={tag} onClick={() => onClick(tag)} />
      })}
    </>
  )
}

export const TagBottomSheet = ({ section, isShowing, onClickScrim }: ClinicBottomSheetType) => {
  const { getValues, setValue } = useFormContext()
  const [selectedTags, setSelectedTags] = useState<string[]>(getValues(section) || [])

  const handleClickTag = (tag: string) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((selectedTag) => selectedTag !== tag)
        : [...prevSelectedTags, tag],
    )
  }

  const handleClickComplete = () => {
    setValue(section, selectedTags)
    onClickScrim()
  }

  useEffect(() => {
    setSelectedTags(getValues(section))
  }, [getValues, isShowing, section])

  return (
    <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
      <div className="w-full pb-5">
        <SubHeader.Confirm
          title="진료 과목"
          onCancel={onClickScrim}
          onConfirm={handleClickComplete}
        />
      </div>

      <div className="size-full overflow-y-scroll pb-12 pt-5 scrollbar-hide">
        <Label icon="check-label">진료 과목을 선택해주세요.</Label>

        <div className="mt-4 flex flex-wrap gap-2">
          <ToggledTagList selectedTags={selectedTags} onClick={handleClickTag} />
        </div>
      </div>
    </BottomSheet>
  )
}
