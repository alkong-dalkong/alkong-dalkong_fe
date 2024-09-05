import { useFormContext } from 'react-hook-form'

import { InputGroup, Label, Tag } from '@/components'
import ActionTag from '@/components/actionTag/ActionTag'

type ClinicFormProps = {
  isReadOnly?: boolean
}

export const ClinicForm = ({ isReadOnly = false }: ClinicFormProps) => {
  const { getValues } = useFormContext()

  return (
    <form className="flex-column gap-8 px-5 py-8">
      <InputGroup>
        <Label icon="check-label">진료 과목</Label>
        <div className="flex flex-wrap gap-2">
          {getValues('medicalPart').map((part: string) => (
            <Tag key={part} label={part} />
          ))}
          {!isReadOnly && <ActionTag.Plus label="추가" onClick={() => {}} />}
        </div>
        <InputGroup.ErrorMessage section="medicalPart" />
      </InputGroup>

      <InputGroup>
        <Label icon="calendar-label">방문 날짜</Label>
        <button type="button" onClick={() => {}}>
          <InputGroup.Input
            section="hospitalDate"
            readOnly
            placeholder="클릭하여 방문 날짜를 선택해주세요."
          />
        </button>
        <InputGroup.ErrorMessage section="hospitalDate" />
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
          placeholder="증상을 입력해주세요."
          readOnly={isReadOnly}
        />
      </InputGroup>

      <InputGroup>
        <Label icon="time-label">알람</Label>
        <div className="flex-between-align w-full rounded-xl border border-mint-3 py-4 pl-5 pr-4">
          <Label>알람</Label>
          <InputGroup.TextWithArrow section="medicalAlarm" onClick={() => {}} />
        </div>
        <InputGroup.ErrorMessage section="medicalAlarm" />
      </InputGroup>
    </form>
  )
}
