'use client'

import { type PropsWithChildren, useRef, useState } from 'react'

import { useScrollLock } from '@/hooks/useScrollLock'

import { CloseIcon } from '../icons/Close'

import SubTitle from './SubTitle'
import Title from './Title'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  size: 'md' | 'lg'
}

type ModalType = React.FC<PropsWithChildren<ModalProps>> & {
  Title: typeof Title
  SubTitle: typeof SubTitle
}

const Modal: ModalType = ({ children, isOpen, onClose, size }) => {
  const { lockScroll } = useScrollLock()
  const modalBackground = useRef<HTMLDivElement | null>(null)
  const modalSize = size === 'md' ? 'h-[214px]' : 'h-[276px]'
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalBackground.current) {
      onClose()
    }
  }

  useState(() => {
    if (isOpen) {
      lockScroll()
    }
  })

  return (
    isOpen && (
      <div
        className="fixed inset-0 flex items-center justify-center bg-gray-6 mix-blend-multiply"
        ref={modalBackground}
        onClick={handleBackgroundClick}
        aria-hidden="true"
      >
        <div className={`${modalSize} w-[87.2%] max-w-[390px] rounded-[12px] bg-white`}>
          <button onClick={onClose} className="mb-[4px] ml-auto mr-[16px] mt-[20px] block w-[28px]">
            <CloseIcon />
          </button>
          <div className="flex h-[calc(100%-76px)] w-full flex-col items-center">{children}</div>
        </div>
      </div>
    )
  )
}

export default Modal

Modal.SubTitle = SubTitle
Modal.Title = Title
