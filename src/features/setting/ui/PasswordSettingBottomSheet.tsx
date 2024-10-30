'use client'

import type { SubmitHandler } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'

import { BottomSheet, Button, DevTool, InputGroup, Label, SubHeader } from '@/components'
import { usePasswordEditForm } from '@/schema'
import type { CustomBottomSheetProps, PasswordFormType } from '@/types'

import { useEditPassword } from '../query/useSetting'

export const PasswordSettingBottomSheet = ({ isShowing, onClickScrim }: CustomBottomSheetProps) => {
  const { mutate: editPassword } = useEditPassword()

  const formMethod = usePasswordEditForm()
  const { handleSubmit, setError, control } = formMethod

  const editPasswordHandler: SubmitHandler<PasswordFormType> = (formData) => {
    editPassword(formData, {
      onSuccess: onClickScrim,
      onError: () => {
        setError('password', { type: 'custom', message: '기존 비밀번호가 일치하지 않습니다.' })
      },
    })
  }

  return (
    <>
      <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
        <div className="size-full overflow-y-scroll pb-[55px] scrollbar-hide">
          <div className="h-full">
            <SubHeader.Close title="비밀번호 변경" onClose={onClickScrim} />
            <main className="h-full pt-[35px]">
              <FormProvider {...formMethod}>
                <form
                  onSubmit={handleSubmit(editPasswordHandler)}
                  className="flex-column-between h-full"
                >
                  <div className="flex-column w-full gap-[16px]">
                    <InputGroup>
                      <Label>새 비밀번호</Label>
                      <InputGroup.Input
                        section="newPassword"
                        placeholder="8~16자/영문자, 숫자 모두 혼용"
                        type="password"
                      />
                      <InputGroup.ErrorMessage section="newPassword" />
                    </InputGroup>
                    <InputGroup>
                      <Label>새 비밀번호 확인</Label>
                      <InputGroup.Input
                        section="confirm"
                        placeholder="비밀번호를 다시 입력해주세요."
                        type="password"
                      />
                      <InputGroup.ErrorMessage section="confirm" />
                    </InputGroup>
                    <InputGroup>
                      <Label>현재 비밀번호</Label>
                      <InputGroup.Input
                        section="password"
                        placeholder="비밀번호를 다시 입력해주세요."
                        type="password"
                      />
                      <InputGroup.ErrorMessage section="password" />
                    </InputGroup>
                  </div>
                  <Button type="submit">변경하기</Button>
                </form>
              </FormProvider>
            </main>
          </div>
        </div>
      </BottomSheet>
      <DevTool control={control}></DevTool>
    </>
  )
}
