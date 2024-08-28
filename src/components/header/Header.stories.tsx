import type { Meta, StoryObj } from '@storybook/react'

import { MainHeader } from './MainHeader'
import { SubHeader } from './SubHeader'

const meta: Meta<typeof SubHeader> = {
  title: 'Header',
  component: SubHeader,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SubHeader>

export const Default: Story = {
  args: {
    title: '헤더 텍스트',
    canBack: true,
  },
}

export const All = () => {
  return (
    <div className="flex-column gap-[20px]">
      <SubHeader title="뒤로가기 아이콘 헤더" canBack />
      <SubHeader title="닫기 아이콘 헤더" canClose onClose={[() => alert('닫기')]} />
      <SubHeader
        title="취소 + 완료 헤더"
        canClose
        onClose={[() => alert('취소'), () => alert('완료')]}
        btnStyle="text"
      />
      <MainHeader title={`메인 헤더\n프로필 아이콘`} canClose onClose={[() => alert('프로필')]} />
      <MainHeader
        title={`메인 헤더\n취소 + 완료`}
        canClose
        onClose={[() => alert('취소'), () => alert('완료')]}
        btnStyle="text"
      />
      <MainHeader
        title={`메인 헤더\n뒤로가기 아이콘 + 수정 + 삭제`}
        canBack
        canClose
        onClose={[() => alert('삭제'), () => alert('완료')]}
        btnStyle="mixed"
      />
    </div>
  )
}
