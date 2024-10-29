'use client'

import type { SubmitHandler } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'

import { BottomSheet, DevTool, InputGroup, Label, Profile, SubHeader } from '@/components'
import { useToggle } from '@/hooks'
import { useAccountEditForm } from '@/schema'
import { useUserStore } from '@/store'
import type { CustomBottomSheetProps, UserInfoFormType } from '@/types'

import { useEditUserInfo } from '../query/useSetting'

export const UserInfoSettingBottomSheet = ({ isShowing, onClickScrim }: CustomBottomSheetProps) => {
  const [isEditMode, toggleEditMode] = useToggle(false)
  const { user, setUser } = useUserStore()

  const { mutate: editUserInfo } = useEditUserInfo()

  const formMethod = useAccountEditForm()
  const { handleSubmit, control } = formMethod

  const editUserInfoHandler: SubmitHandler<UserInfoFormType> = (formData) => {
    const editUserInfoData = {
      ...formData,
      birth: formData.birth.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3'),
    }
    editUserInfo(editUserInfoData, {
      onSuccess: () => {
        setUser({ ...user, name: editUserInfoData.name, ownerName: editUserInfoData.name })
        toggleEditMode()
      },
    })
  }

  return (
    <>
      <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
        <div className="size-full overflow-y-scroll scrollbar-hide">
          {!isEditMode ? (
            <SubHeader.Modify title="나의 정보" onModify={toggleEditMode} onClose={onClickScrim} />
          ) : (
            <SubHeader.Confirm
              title="나의 정보 수정"
              onCancel={onClickScrim}
              onConfirm={handleSubmit(editUserInfoHandler)}
            />
          )}
          <main className="flex-column-align pb-[55px]">
            <div className="mb-[16px] mt-[27px]">
              <Profile name={user.ownerName} size="2xl" bgColor="#C5FDEC" />
            </div>
            <FormProvider {...formMethod}>
              <form className="flex-column w-full gap-[16px]">
                <InputGroup>
                  <Label>이름</Label>
                  <InputGroup.Input
                    section="name"
                    placeholder="성명을 입력해주세요."
                    readOnly={!isEditMode}
                  />
                  <InputGroup.ErrorMessage section="name" />
                </InputGroup>
                <InputGroup>
                  <Label>휴대전화번호</Label>
                  <InputGroup.Input
                    section="phoneNumber"
                    placeholder="숫자만 입력해주세요."
                    readOnly={!isEditMode}
                  />
                  <InputGroup.ErrorMessage section="phoneNumber" />
                </InputGroup>
                <InputGroup>
                  <Label>생년월일</Label>
                  <InputGroup.Input
                    section="birth"
                    placeholder="생년월일 8자리를 입력해주세요."
                    readOnly={!isEditMode}
                  />
                  <InputGroup.ErrorMessage section="birth" />
                </InputGroup>
                <InputGroup>
                  <Label>성별</Label>
                  <InputGroup.Gender disabled={!isEditMode} />
                  <InputGroup.ErrorMessage section="gender" />
                </InputGroup>
              </form>
            </FormProvider>
          </main>
        </div>
      </BottomSheet>
      <DevTool control={control}></DevTool>
    </>
  )
}
