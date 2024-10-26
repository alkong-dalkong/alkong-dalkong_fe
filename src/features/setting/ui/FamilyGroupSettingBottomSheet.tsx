'use client'

import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { BottomSheet, Button, DevTool, Icon, SubHeader } from '@/components'
import { useBoolean } from '@/hooks'
import type { CustomBottomSheetProps, FamilyCodeForm } from '@/types'

import { CodeModal, InviteModal } from './SettingModal'

export const FamilyGroupSettingBottomSheet = ({
  isShowing,
  onClickScrim,
}: CustomBottomSheetProps) => {
  const { handleSubmit, register, control } = useForm<FamilyCodeForm>()

  const [codeModalShowing, openCodeModal, closeCodeModal] = useBoolean(false)
  const [inviteModalShowing, openInviteModal, closeInviteModal] = useBoolean(false)

  const inviter = 'test' // 추후 useQuery 이용
  const code = '1234' // 추후 useQuery 이용

  const enterFamilyHandler: SubmitHandler<FamilyCodeForm> = (formData) => {
    // api 호출 커스텀 훅 추가
    closeInviteModal()
  }

  return (
    <>
      <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
        <div className="size-full overflow-y-scroll scrollbar-hide">
          <SubHeader.Close title="가족 그룹 추가" onClose={onClickScrim} />
          <main className="flex-column gap-[32px] pt-[40px]">
            <section>
              <h1 className="subtitle-B mb-[16px] whitespace-pre text-black">{`가족을 초대하고,\n우리 가족 그룹을 만들어 보세요!`}</h1>
              <Button type="button" onClick={openCodeModal}>
                새로운 그룹 만들기
              </Button>
            </section>
            <div className="flex-center body-M gap-[11.5px] text-black">
              <hr className="h-px w-full border-none bg-mint-5" />
              <div className="shrink-0">혹은</div>
              <hr className="h-px w-full border-none bg-mint-5" />
            </div>
            <section>
              <h1 className="subtitle-B mb-[16px] whitespace-pre text-black">{`가족을 초대를 받으셨나요?\n이 곳에 가족 코드를 입력해 주세요!`}</h1>
              <div className="relative w-full">
                <input
                  type="text"
                  {...register('familyCode')}
                  placeholder="숫자만 입력해 주세요."
                  className="subtitle-M placeholder:subtitle-R w-full rounded-xl border border-mint-3 py-[16px] pl-[24px] pr-[60px] placeholder:text-gray-7 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={openInviteModal}
                  className="absolute right-[11px] top-1/2 -translate-y-1/2"
                >
                  <Icon name="next-btn" />
                </button>
              </div>
            </section>
          </main>
        </div>
      </BottomSheet>
      <CodeModal
        isOpen={codeModalShowing}
        onClose={closeCodeModal}
        title="새로운 가족 그룹 생성 완료!"
        code={code}
      />
      <InviteModal
        isOpen={inviteModalShowing}
        onConfirm={handleSubmit(enterFamilyHandler)}
        onClose={closeInviteModal}
        inviter={inviter}
      />
      <DevTool control={control}></DevTool>
    </>
  )
}
