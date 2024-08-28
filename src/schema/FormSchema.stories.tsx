import type { PropsWithChildren } from 'react'
import { FormProvider } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import type { Meta, StoryFn } from '@storybook/react'

import { BottomSheet } from '@/components/bottomSheet/BottomSheet'
import { Button } from '@/components/button/Button'
import { InputGroup } from '@/components/inputGroup'
import Label from '@/components/label/Label'

import { useAccountEditForm } from './useAccountEditForm'
import { useClinicForm } from './useClinicForm'
import { useLoginForm } from './useLoginForm'
import { useSignupForm } from './useSignupForm'

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

export const LoginForm: StoryFn = () => {
  const { formMethod, handleSubmitLoginForm } = useLoginForm()
  const { handleSubmit, control } = formMethod

  return (
    <Container>
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleSubmitLoginForm)}>
          <InputGroup>
            <InputGroup.Input section="id" placeholder="아이디" />
          </InputGroup>

          <InputGroup>
            <InputGroup.Input section="password" placeholder="비밀번호" type="password" />
          </InputGroup>

          <Button primary type="submit" onClick={() => {}}>
            로그인
          </Button>
        </form>
      </FormProvider>
      <DevTool control={control}></DevTool>
    </Container>
  )
}

export const SignupForm: StoryFn = () => {
  const { formMethod, handleSubmitSignupForm } = useSignupForm()
  const { handleSubmit, control } = formMethod

  return (
    <Container>
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleSubmitSignupForm)}>
          <InputGroup>
            <Label>아이디</Label>
            <InputGroup.Input section="id" placeholder="6~12자/영문자, 숫자 사용" />
            <InputGroup.ErrorMessage section="id" />
          </InputGroup>

          <InputGroup>
            <Label>비밀번호</Label>
            <InputGroup.Input
              section="password"
              placeholder="8~16자/영문자, 숫자 모두 혼용"
              type="password"
            />
            <InputGroup.ErrorMessage section="password" />
          </InputGroup>

          <InputGroup>
            <Label>비밀번호 확인</Label>
            <InputGroup.Input
              section="confirm"
              placeholder="비밀번호를 다시 입력해주세요."
              type="password"
            />
            <InputGroup.ErrorMessage section="confirm" />
          </InputGroup>

          <InputGroup>
            <Label>이름</Label>
            <InputGroup.Input section="name" placeholder="성명을 입력해주세요." />
            <InputGroup.ErrorMessage section="name" />
          </InputGroup>

          <InputGroup>
            <Label>휴대전화번호</Label>
            <InputGroup.Input section="phoneNumber" placeholder="숫자만 입력해주세요." />
            <InputGroup.ErrorMessage section="phoneNumber" />
          </InputGroup>

          <InputGroup>
            <Label>생년월일</Label>
            <InputGroup.Input section="birth" placeholder="생년월일 8자리를 입력해주세요." />
            <InputGroup.ErrorMessage section="birth" />
          </InputGroup>

          <InputGroup>
            <Label>성별</Label>
            <InputGroup.Gender />
            <InputGroup.ErrorMessage section="gender" />
          </InputGroup>

          <InputGroup>
            <InputGroup.CheckBox section="personal">개인정보 이용 동의 (필수)</InputGroup.CheckBox>
            <InputGroup.CheckBox section="notification">알림 수신 동의 (선택)</InputGroup.CheckBox>
            <InputGroup.CheckBoxAll>전체 동의</InputGroup.CheckBoxAll>
          </InputGroup>

          <Button primary type="submit" onClick={() => {}}>
            회원가입
          </Button>
        </form>
      </FormProvider>
      <DevTool control={control}></DevTool>
    </Container>
  )
}

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

export const AccountEditForm: StoryFn = () => {
  const { formMethod, handleSubmitAccountEditForm } = useAccountEditForm()
  const { handleSubmit, control } = formMethod

  return (
    <Container>
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleSubmitAccountEditForm)}>
          <InputGroup>
            <Label>이름</Label>
            <InputGroup.Input section="name" placeholder="성명을 입력해주세요." />
            <InputGroup.ErrorMessage section="name" />
          </InputGroup>

          <InputGroup>
            <Label>휴대전화번호</Label>
            <InputGroup.Input section="phoneNumber" placeholder="숫자만 입력해주세요." />
            <InputGroup.ErrorMessage section="phoneNumber" />
          </InputGroup>

          <InputGroup>
            <Label>생년월일</Label>
            <InputGroup.Input section="birth" placeholder="생년월일 8자리를 입력해주세요." />
            <InputGroup.ErrorMessage section="birth" />
          </InputGroup>

          <InputGroup>
            <Label>성별</Label>
            <InputGroup.Gender />
            <InputGroup.ErrorMessage section="gender" />
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
