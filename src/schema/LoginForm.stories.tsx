import type { PropsWithChildren } from 'react'
import { FormProvider } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import type { Meta, StoryFn } from '@storybook/react'

import { Button } from '@/components/button/Button'
import { InputGroup } from '@/components/inputGroup'

import { useLoginForm } from './useLoginForm'

const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-[450px]">{children}</div>
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
        <form onSubmit={handleSubmit(handleSubmitLoginForm)} className="flex-column gap-4">
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
