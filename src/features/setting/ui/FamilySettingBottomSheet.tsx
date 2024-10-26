'use client'

import { useState } from 'react'

import { BottomSheet, Button, Icon, Profile, SubHeader } from '@/components'
import { useBoolean } from '@/hooks'
import type { CustomBottomSheetProps } from '@/types'

import { useReadFamilyGroups } from '../query/useSetting'

import { CodeModal } from './SettingModal'

export const FamilySettingBottomSheet = ({ isShowing, onClickScrim }: CustomBottomSheetProps) => {
  const { data: familyGroups } = useReadFamilyGroups()

  const [code, setCode] = useState<string>('')

  const handleInviteGroup = (code: string) => {
    setCode(code)
    openCodeModal()
  }

  const [codeModalShowing, openCodeModal, closeCodeModal] = useBoolean(false)

  return (
    <>
      <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
        <div className="size-full overflow-y-scroll pb-[65px] scrollbar-hide">
          <SubHeader.Close title="가족 설정하기" onClose={onClickScrim} />
          <main className="flex-column gap-[24px] pt-[40px]">
            {familyGroups?.families.map(({ familyCode, familyName, members }) => (
              <section
                key={familyCode}
                className="flex-column rounded-xl bg-mint-0 p-[20px] shadow-underShadow"
              >
                <div className="flex-between mb-[16px]">
                  <h1 className="subtitle-B text-black">{familyName}</h1>
                  <div className="body-M flex justify-end gap-[6px] text-gray-6">
                    <button>탈퇴</button>
                    <Icon name="line-bar" />
                    <button>삭제</button>
                  </div>
                </div>
                <hr className="h-px w-full border-none bg-mint-5" />
                <div className="my-[32px]">
                  <div className="grid grid-cols-3 gap-[32px]">
                    {members.map(({ userId, name }) => (
                      <div
                        key={userId}
                        className="headline-M flex-column-align gap-y-[6px] text-black"
                      >
                        <Profile name={name} size="lg" textColor="text-gray-1" bgColor="#949698" />
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
                <Button type="button" onClick={() => handleInviteGroup(familyCode)}>
                  인원 추가하기
                </Button>
              </section>
            ))}
          </main>
        </div>
      </BottomSheet>
      <CodeModal
        isOpen={codeModalShowing}
        onClose={closeCodeModal}
        title="우리 가족 그룹의 초대 코드"
        code={code}
      />
    </>
  )
}
