import type { Meta, StoryFn } from '@storybook/react'

import { useModal } from '@/hooks/useModal'

import { Button } from '../button/Button'

import Modal from './Modal'

type Props = {
  isOpen: boolean
  onClose: () => void
  size: 'md' | 'lg'
}

export default {
  title: 'Modal',
  component: Modal,
} as Meta

const MediumTemplate: StoryFn<Props> = () => {
  const [modal, handleOpenModal, handleCloseModal] = useModal(false)

  return (
    <>
      <button onClick={handleOpenModal}>모달 열기</button>
      <Modal isOpen={modal} onClose={handleCloseModal} size="md">
        <Modal.Title title="삭제하시겠습니까?" />
        <Modal.SubTitle title="삭제하실 경우 복원이 불가능합니다." />
        <div className="mt-[24px] flex w-full gap-[15px] px-[16px]">
          <Button
            size="sm"
            onClick={() => {
              console.log('취소')
            }}
          >
            취소
          </Button>
          <Button
            primary
            size="sm"
            onClick={() => {
              console.log('삭제')
            }}
          >
            삭제
          </Button>
        </div>
      </Modal>
    </>
  )
}
export const Medium = MediumTemplate.bind({})

const LargeTemplate: StoryFn<Props> = () => {
  const [modal, handleOpenModal, handleCloseModal] = useModal(false)

  return (
    <>
      <button onClick={handleOpenModal}>모달 열기</button>
      <Modal isOpen={modal} onClose={handleCloseModal} size="lg">
        <Modal.Title title="우리 가족 그룹의 초대 코드?" />
        <Modal.SubTitle title="우리 가족으로 초대하고 싶은" />
        <Modal.SubTitle title="사람에게 가족 코드를 공유해 보세요!" />
        <div className="w-full px-[20px]">
          <div className="flex-center mt-[24px] h-[48px] w-full rounded-[12px] bg-mint-1">
            1234 4321
          </div>
        </div>
        <div className="mt-[16px] flex w-3/5 justify-between">
          <p className="body-M text-mint-7">코드 복사하기</p>
          <p className="body-M text-mint-7">|</p>
          <p className="body-M text-mint-7">코드 공유하기</p>
        </div>
      </Modal>
    </>
  )
}
export const Large = LargeTemplate.bind({})
