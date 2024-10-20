import type { PropsWithChildren } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import type { Meta, StoryFn } from '@storybook/react'
import { domMax, LazyMotion } from 'framer-motion'

import { BottomSheet } from '@/components/bottomSheet/BottomSheet'
import { Button } from '@/components/button/Button'
import { InputGroup } from '@/components/inputGroup'
import Label from '@/components/label/Label'
import { useToggle } from '@/hooks'

const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-[450px]">{children}</div>
}

export default {
  title: 'FormSchema',
  component: Container,
} as Meta

type TestBottomSheetType = {
  isShowing: boolean
  onClickScrim: () => void
  onClickButton: () => void
}

const TestBottomSheet = ({ onClickScrim, isShowing, onClickButton }: TestBottomSheetType) => {
  const handleClickButton = () => {
    onClickScrim()
    onClickButton()
  }
  return (
    <BottomSheet onClickScrim={onClickScrim} isShowing={isShowing}>
      <Button type="button" onClick={handleClickButton}>
        입력 완료
      </Button>
    </BottomSheet>
  )
}

const Divider = () => {
  return <div className="border border-t-mint-5" />
}

export const MedicineForm: StoryFn = () => {
  const formMethod = useForm()
  const { handleSubmit, control, setValue } = formMethod
  const [weekBottomSheet, toggleWeekBottomSheet] = useToggle(false)
  const [takenTimeBottomSheet, toggleTakenTimeBottomSheet] = useToggle(false)
  const [endDateBottomSheet, toggleEndDateBottomSheet] = useToggle(false)
  const [alarmBottomSheet, toggleAlarmBottomSheet] = useToggle(false)

  const handleSubmitMedicineForm = (formData: unknown) => {
    alert(JSON.stringify(formData, null, 2))
  }

  return (
    <LazyMotion features={domMax}>
      <Container>
        <FormProvider {...formMethod}>
          <form className="flex-column gap-8" onSubmit={handleSubmit(handleSubmitMedicineForm)}>
            <InputGroup>
              <Label>약품명</Label>
              <InputGroup.Input section="medicineName" placeholder="약품명을 입력해주세요." />
              <InputGroup.ErrorMessage section="medicineName" />
            </InputGroup>

            <InputGroup direction="row" onClick={toggleWeekBottomSheet}>
              <Label>복용 요일</Label>
              <InputGroup.TextWithArrow section="medicineWeek" />
              <InputGroup.ErrorMessage section="medicineWeek" />
              <TestBottomSheet
                isShowing={weekBottomSheet}
                onClickScrim={toggleWeekBottomSheet}
                onClickButton={() => setValue('medicineWeek', ['월', '수', '금'])}
              />
            </InputGroup>

            <Divider />

            <Divider />

            <InputGroup direction="row" onClick={toggleEndDateBottomSheet}>
              <Label>복용 기간</Label>
              <InputGroup.TextWithArrow section="medicineEndDate" />
              <InputGroup.ErrorMessage section="medicineEndDate" />
              <TestBottomSheet
                isShowing={endDateBottomSheet}
                onClickScrim={toggleEndDateBottomSheet}
                onClickButton={() => setValue('medicineEndDate', '7월 23일')}
              />
            </InputGroup>

            <Divider />

            <InputGroup direction="row">
              <Label>복용량</Label>
              <InputGroup.TextWithArrow section="medicineDosage" />
              <InputGroup.ErrorMessage section="medicineDosage" />
            </InputGroup>

            <Divider />

            <InputGroup>
              <Label>메모</Label>
              <InputGroup.TextArea section="medicalMemo" placeholder="메모를 기록해주세요." />
            </InputGroup>

            <InputGroup direction="row" onClick={toggleAlarmBottomSheet}>
              <Label>알람</Label>
              <InputGroup.TextWithArrow section="medicineAlarm" />
              <TestBottomSheet
                isShowing={alarmBottomSheet}
                onClickScrim={toggleAlarmBottomSheet}
                onClickButton={() => setValue('medicineAlarm', '1시간 전')}
              />
            </InputGroup>

            <Button primary type="submit" onClick={() => {}}>
              회원가입
            </Button>
          </form>
        </FormProvider>
        <DevTool control={control}></DevTool>
      </Container>
    </LazyMotion>
  )
}
