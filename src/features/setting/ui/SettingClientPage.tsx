'use client'
import type { PropsWithChildren } from 'react'

import { Icon, Profile, SubHeader } from '@/components'
import {
  FamilyGroupSettingBottomSheet,
  FamilySettingBottomSheet,
  PasswordSettingBottomSheet,
  UserInfoSettingBottomSheet,
} from '@/features'
import { useBottomSheet, useCancelAccount, useSignOut } from '@/hooks'
import { useUserStore } from '@/store'

export const SettingCleintPage = () => {
  const { user } = useUserStore()

  const [SettingBottomSheet, handleClickOption] = useBottomSheet({
    '나의 정보 수정': UserInfoSettingBottomSheet,
    '비밀번호 변경': PasswordSettingBottomSheet,
    '가족 그룹 추가': FamilyGroupSettingBottomSheet,
    '가족 설정하기': FamilySettingBottomSheet,
  })

  const { mutate: signOut } = useSignOut()
  const { mutate: cancelAccount } = useCancelAccount()

  return (
    <>
      <div className="flex-column p-[20px]">
        <SubHeader.Back title="마이페이지" />
        <main>
          <div className="flex-between-align mb-[50px] mt-[28px]">
            <h1 className="title-B whitespace-pre text-black">{`안녕하세요,\n${user.ownerName}님!`}</h1>
            <Profile name={user.ownerName} size="xl" bgColor="#C5FDEC" />
          </div>
          <section className="flex-column gap-[24px]">
            <Section>
              <button onClick={() => handleClickOption('나의 정보 수정')}>나의 정보 수정</button>
              <button onClick={() => handleClickOption('비밀번호 변경')}>비밀번호 변경</button>
            </Section>
            <Section>
              <button onClick={() => handleClickOption('가족 그룹 추가')}>가족 그룹 추가</button>
              <button onClick={() => handleClickOption('가족 설정하기')}>가족 설정하기</button>
            </Section>
            <Section>
              <button>푸시 알람 설정</button>
              <button>자주 묻는 질문</button>
            </Section>
          </section>
          <div className="body-M mb-[45px] mt-[34px] flex justify-end gap-[6px] text-gray-6">
            <button onClick={() => cancelAccount()}>회원 탈퇴</button>
            <Icon name="line-bar" />
            <button onClick={() => signOut()}>로그아웃</button>
          </div>
        </main>
      </div>
      <SettingBottomSheet />
    </>
  )
}

const Section = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex-column subtitle-M divide-y divide-mint-5 rounded-xl bg-mint-0 px-[10px] text-black [&_>_button]:p-[16px_8px] [&_>_button]:text-left">
      {children}
    </section>
  )
}
