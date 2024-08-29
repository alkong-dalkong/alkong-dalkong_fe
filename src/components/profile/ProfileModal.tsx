'use client'

import type { MouseEventHandler } from 'react'
import Link from 'next/link'

import { useUserStore } from '@/store'

import { Portal } from '../portal/Portal'

import { Profile } from './Profile'

type ProfileModalProps = {
  onClickProfileModal?: VoidFunction
}

export const ProfileModal = ({ onClickProfileModal }: ProfileModalProps) => {
  const { user, setUser } = useUserStore()

  const handleClickScrim: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.target !== e.currentTarget) return
    if (onClickProfileModal) onClickProfileModal()
  }

  return (
    <Portal>
      <button
        type="button"
        onClick={handleClickScrim}
        className={`absolute inset-0 flex h-[calc(100vh-75px)] w-full items-end justify-center overflow-hidden bg-[rgba(15,23,42,0.5)] px-[52px] pb-[62px]`}
      >
        <button type="button" onClick={handleClickScrim} className="grid grid-cols-3 gap-[40px]">
          {user.family?.map(({ userId, username }) => {
            const handleClickProfile = () => {
              setUser({ ...user, userId: userId, username: username })
              if (onClickProfileModal) onClickProfileModal()
            }

            return (
              <div className="headline-B flex-column-align gap-y-[6px] text-white" key={userId}>
                {username}
                <Link href={`/home/${userId}`}>
                  <Profile name={username} size="lg" onClickProfile={handleClickProfile} />
                </Link>
              </div>
            )
          })}
        </button>
      </button>
    </Portal>
  )
}
