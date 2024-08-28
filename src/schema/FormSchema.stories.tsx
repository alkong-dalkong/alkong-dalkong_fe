import type { PropsWithChildren } from 'react'
import { FormProvider } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import type { Meta, StoryFn } from '@storybook/react'

import { BottomSheet } from '@/components/bottomSheet/BottomSheet'
import { Button } from '@/components/button/Button'
import { InputGroup } from '@/components/inputGroup'
import Label from '@/components/label/Label'

import { useClinicForm } from './useClinicForm'

const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-[450px]">{children}</div>
}

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

export default {
  title: 'FormSchema',
  component: Container,
} as Meta

export const ClinicForm: StoryFn = () => {
  const { formMethod, handleSubmitClinicForm } = useClinicForm()
  const { handleSubmit, register, control } = formMethod

  return (
    <Container>
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleSubmitClinicForm)}>
          <InputGroup>
            <Label>진료 과목</Label>
            {/* tag 컴포넌트 */}
            <InputGroup.ErrorMessage section="medicalPart" />
          </InputGroup>

          <InputGroup>
            <Label>방문 날짜</Label>
            <InputGroup.Input section="hospitalDate" readOnly placeholder="선택한 날짜" />
            <InputGroup.ErrorMessage section="hospitalDate" />
          </InputGroup>

          <InputGroup>
            <Label>방문 병원</Label>
            <InputGroup.Input section="hospitalName" placeholder="병원을 입력해주세요." />
            <InputGroup.ErrorMessage section="hospitalName" />
          </InputGroup>

          <InputGroup>
            <Label>증상 및 특이사항</Label>
            <InputGroup.TextArea section="medicalMemo" placeholder="증상을 입력해주세요." />
          </InputGroup>

          <InputGroup>
            <Label>알람</Label>
            <div className="flex-between-align w-full rounded-xl border border-mint-3 px-6 py-4">
              <p className="subtitle-B">알람</p>
              <input
                readOnly
                size={10}
                {...register('medicalAlarm')}
                className="headline-M text-right text-gray-7 focus:outline-none"
              />
            </div>
          </InputGroup>

          <Button primary type="submit" onClick={() => {}}>
            완료
          </Button>
        </form>
      </FormProvider>
      <DevTool control={control}></DevTool>
    </Container>
  )
}
