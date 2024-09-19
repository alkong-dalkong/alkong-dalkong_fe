import { AlarmBottomSheet, InputGroup, Label } from '@/components'
import { MEDICINE_ALARM_TIME } from '@/constants'
import { Stepper } from '@/features'
import { useToggle } from '@/hooks'

export const MedicineForm = () => {
  const [daySheet, toggleDaySheet] = useToggle(false)
  const [periodSheet, togglePeriodSheet] = useToggle(false)
  const [dosageSheet, toggleDosageSheet] = useToggle(false)
  const [alarmSheet, toggleAlarmSheet] = useToggle(false)

  return (
    <form className="flex-column overflow-scroll px-5 py-4 scrollbar-hide">
      <InputGroup>
        <Label>약품명</Label>
        <InputGroup.Input section="medicineName" placeholder="약품명을 입력해 주세요." />
        <InputGroup.ErrorMessage section="medicineName" />
      </InputGroup>

      <div className="flex-column mt-2 divide-y divide-mint-5 [&_>_div]:py-6">
        <InputGroup direction="row">
          <Label>복용 요일</Label>
          <InputGroup.TextWithArrow section="medicineWeek" onClick={toggleDaySheet} />
        </InputGroup>

        <InputGroup direction="row">
          <Label>복용 횟수</Label>
          <Stepper section="medicineTimes" />
        </InputGroup>

        <InputGroup>
          <Label>복용 시간</Label>
        </InputGroup>

        <InputGroup direction="row">
          <Label>복용 기간</Label>
          <InputGroup.TextWithArrow section="medicinePeriod" onClick={togglePeriodSheet} />
        </InputGroup>

        <InputGroup direction="row">
          <Label>복용량</Label>
          <InputGroup.TextWithArrow section="medicineDosage" onClick={toggleDosageSheet} />
        </InputGroup>

        <InputGroup>
          <Label>메모</Label>
          <InputGroup.TextArea section="medicineMemo" placeholder="메모를 기록해 주세요." />
        </InputGroup>
      </div>
      <InputGroup direction="row">
        <Label>알람</Label>
        <InputGroup.TextWithArrow section="medicineAlarm" onClick={toggleAlarmSheet} />
        <AlarmBottomSheet
          timeList={MEDICINE_ALARM_TIME}
          section="medicineAlarm"
          isShowing={alarmSheet}
          onClickScrim={toggleAlarmSheet}
        />
      </InputGroup>
    </form>
  )
}
