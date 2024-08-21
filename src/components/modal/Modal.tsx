import { type PropsWithChildren, useRef } from 'react'
import Image from 'next/image'

import ButtonCloseIcon from '@/assets/Button_Close.svg'

import SubTitle from './SubTitle'
import Title from './Title'

type Props = {
  isOpen: boolean
  onClose: () => void
  size: 'md' | 'lg'
}

type ModalType = React.FC<PropsWithChildren<Props>> & {
  Title: typeof Title
  SubTitle: typeof SubTitle
}

const Modal: ModalType = ({ children, isOpen, onClose, size }) => {
  const modalBackground = useRef<HTMLDivElement | null>(null)
  const modalSize = size === 'md' ? 'h-[214px]' : 'h-[276px]'
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalBackground.current) {
      onClose()
    }
  }

  return (
    isOpen && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-gray-6 mix-blend-multiply"
        ref={modalBackground}
        onClick={handleBackgroundClick}
        aria-hidden="true"
      >
        <div className={`${modalSize} w-[327px] rounded-[12px] bg-white`}>
          <Image
            src={ButtonCloseIcon}
            className="mb-[4px] ml-auto mr-[16px] mt-[20px]"
            alt="close"
            width={28}
            height={28}
            onClick={onClose}
          />
          <div className="flex h-[calc(100%-76px)] w-full flex-col items-center">{children}</div>
        </div>
      </div>
    )
  )
}

export default Modal

Modal.SubTitle = SubTitle
Modal.Title = Title
