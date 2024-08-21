'use client'
import { FormProvider, useForm } from 'react-hook-form'

import { EmergencyLabelIcon } from '@/components/icons/Label'
import { Input, TextArea } from '@/components/inputGroup/Input'
import { InputGroup } from '@/components/inputGroup/InputGroup'
import Label from '@/components/label/Label'

export default function Home() {
  const formMethod = useForm()
  const { handleSubmit } = formMethod
  const handleSubmitForm = (formData) => {
    console.log(formData)
  }
  return (
    <div className="px-4">
      <p>HOME</p>
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <InputGroup>
            <Label>아이디</Label>
            <Input section={'id'} placeholder="아이디를 입력해주세요." />
          </InputGroup>

          <InputGroup>
            <div className="flex">
              <EmergencyLabelIcon />
              <Label>증상 및 특이사항</Label>
            </div>
            <TextArea section={'memo'} placeholder="메모" />
          </InputGroup>

          <button type="submit">dd</button>
        </form>
      </FormProvider>
    </div>
  )
}
