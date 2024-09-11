'use client'
import { useFormContext } from 'react-hook-form'

import { InputGroup, Label, Tag } from '@/components'
import ActionTag from '@/components/actionTag/ActionTag'
import { useToggle } from '@/hooks'

import { AlarmBottomSheet } from './AlarmBottomSheet'
import { DateBottomSheet } from './DateBottomSheet'
import { TagBottomSheet } from './TagBottomSheet'

type ClinicFormProps = {
  isReadOnly?: boolean
}

export const ClinicForm = ({ isReadOnly = false }: ClinicFormProps) => {
  const { getValues } = useFormContext()

  const [tagBottomSheet, toggleTagBottomSheet] = useToggle(false)
  const [dateBottomSheet, toggleDateBottomSheet] = useToggle(false)
  const [alarmBottomSheet, toggleAlarmBottomSheet] = useToggle(false)

  const handleToggleDateBottomSheet = () => {
    if (!isReadOnly) toggleDateBottomSheet()
  }

  const handleToggleAlarmBottomSheet = () => {
    if (!isReadOnly) toggleAlarmBottomSheet()
  }

  return (
    <form className="flex-column gap-8 overflow-scroll px-5 py-8 scrollbar-hide">
      <InputGroup>
        <Label icon="check-label">진료 과목</Label>
        <div className="flex flex-wrap gap-2">
          {getValues('medicalPart')?.map((part: string) => <Tag key={part} label={part} />)}
          {!isReadOnly && <ActionTag.Plus label="추가" onClick={toggleTagBottomSheet} />}
        </div>
        <InputGroup.ErrorMessage section="medicalPart" />
        <TagBottomSheet
          section="medicalPart"
          isShowing={tagBottomSheet}
          onClickScrim={toggleTagBottomSheet}
        />
      </InputGroup>

      <InputGroup>
        <Label icon="calendar-label">방문 날짜</Label>
        <button type="button" onClick={handleToggleDateBottomSheet}>
          <InputGroup.Input
            section="hospitalDate"
            readOnly
            placeholder="방문 날짜를 선택해주세요."
          />
        </button>
        <InputGroup.ErrorMessage section="hospitalDate" />
        <DateBottomSheet
          section="hospitalDate"
          isShowing={dateBottomSheet}
          onClickScrim={handleToggleDateBottomSheet}
        />
      </InputGroup>

      <InputGroup>
        <Label icon="clinic-label">방문 병원</Label>
        <InputGroup.Input
          section="hospitalName"
          placeholder="병원을 입력해주세요."
          readOnly={isReadOnly}
        />
        <InputGroup.ErrorMessage section="hospitalName" />
      </InputGroup>

      <InputGroup>
        <Label icon="emergency-label">증상 및 특이사항</Label>
        <InputGroup.TextArea
          section="medicalMemo"
          placeholder={isReadOnly ? '특이사항이 없습니다.' : '증상을 입력해주세요.'}
          readOnly={isReadOnly}
        />
      </InputGroup>

      <InputGroup>
        <Label icon="time-label">알람</Label>
        <div className="flex-between-align w-full rounded-xl border border-mint-3 py-4 pl-5 pr-4">
          <Label>알람</Label>
          <InputGroup.TextWithArrow section="medicalAlarm" onClick={handleToggleAlarmBottomSheet} />
        </div>
        <InputGroup.ErrorMessage section="medicalAlarm" />
        <AlarmBottomSheet
          section="medicalAlarm"
          isShowing={alarmBottomSheet}
          onClickScrim={handleToggleAlarmBottomSheet}
        />
      </InputGroup>
    </form>
  )
}
