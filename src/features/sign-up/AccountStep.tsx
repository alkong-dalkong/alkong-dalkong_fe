'use client'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { Button, InputGroup } from '@/components'
import Label from '@/components/label/Label'
import { useCheckDuplicateId } from '@/hooks'

export const AccountStep = () => {
  const { watch, getValues, getFieldState, setError, clearErrors } = useFormContext()
  const isEmpty = !watch('id') || !watch('password') || !watch('confirm')
  const invalid =
    getFieldState('id').invalid ||
    getFieldState('password').invalid ||
    getFieldState('confirm').invalid

  const [invalidId, setInvalidId] = useState(true)

  const { mutate: checkDuplicateId } = useCheckDuplicateId({
    onSuccess: () => {
      setInvalidId(false)
      clearErrors('id')
    },
    onError: (error) => {
      setError('id', { type: 'custom', message: '이미 존재하는 아이디입니다.' })
      console.log(error.message)
    },
  })

  const handleCheckDuplicateId = () => {
    checkDuplicateId({ id: getValues('id') })
  }

  const router = useRouter()
  const handleGoNext = () => {
    if (invalidId) {
      setError('id', { type: 'custom', message: '중복확인하지 않은 아이디입니다.' })
      return
    }
    setInvalidId(false)
    router.push('/sign-up/user-info')
  }

  return (
    <div className="flex-column-between mx-[20px] h-full gap-[32px] bg-white pb-[55px]">
      <div>
        <div className="flex-column-align mb-[40px] mt-[18px] gap-[12px]">
          <h1 className="subtitle-B">회원가입</h1>
          <div className="flex-center w-full gap-[4px] px-[8px]">
            <hr className="h-[6px] w-full border-none bg-green-4" />
            <hr className="h-[6px] w-full border-none bg-green-1" />
            <hr className="h-[6px] w-full border-none bg-green-1" />
          </div>
        </div>
        <h1 className="title-B mb-[24px] text-black">로그인 정보를 입력해 주세요!</h1>
        <div className="flex-column w-full gap-[16px]">
          <InputGroup>
            <Label>아이디</Label>
            <div className="flex-between-align gap-[7px]">
              <InputGroup.Input section="id" placeholder="6~12자/영문자, 숫자 사용" />
              <button
                type="button"
                className="flex-center body-B h-[56px] w-[100px] rounded-[12px] bg-mint-4 text-white"
                onClick={handleCheckDuplicateId}
              >
                중복확인
              </button>
            </div>
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
        </div>
      </div>
      <Button type="button" disabled={isEmpty || invalid} onClick={handleGoNext}>
        다음으로
      </Button>
    </div>
  )
}
