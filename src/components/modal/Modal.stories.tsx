import type { Meta, StoryFn } from '@storybook/react'

import { useModal } from '@/hooks/useModal'

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
        <div className="mt-[24px] flex gap-[15px]">
          <div className="flex-center h-[52px] w-[140px] rounded-xl  bg-gray-3 text-gray-7 active:scale-95 active:bg-gray-4">
            취소
          </div>
          <div className="flex-center h-[52px] w-[140px] rounded-xl bg-mint-6 text-white active:scale-95 active:bg-mint-7">
            삭제
          </div>
        </div>
      </Modal>
    </>
  )
}
export const Medium = MediumTemplate.bind({})
