'use client' // 추후 삭제 예정
import type { PropsWithChildren } from 'react'

import { BottomNav } from '@/components'
import { MainHeader } from '@/components/header/MainHeader'

type DashBoardTemplateProps = {
  route: 'health' | 'home' | 'medicine'
}

const HeaderTitle = {
  health: '님의\n최근체중 변화',
  home: '님의\n최근 건강 정보를 모아봤어요',
  medicine: '님의\n최근 체중 변화',
}

export const DashBoardTemplate = ({
  children,
  route,
}: PropsWithChildren<DashBoardTemplateProps>) => {
  return (
    <div className="flex h-full flex-col">
      <MainHeader.Setting title={HeaderTitle[route]} />
      <div className="flex-column flex-1 items-center overflow-y-auto px-5 pb-[107px] pt-8 scrollbar-hide">
        {children}
      </div>
      <BottomNav />
    </div>
  )
}
