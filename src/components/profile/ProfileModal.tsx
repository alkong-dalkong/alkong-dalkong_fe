'use client'
import Link from 'next/link'

import { useUserStore } from '@/store'

import { Portal } from '../portal/Portal'

import { Profile } from './Profile'

type ProfileModalProps = {
  onClickProfileModal?: VoidFunction
}

export const ProfileModal = ({ onClickProfileModal }: ProfileModalProps) => {
  const { user, setUser } = useUserStore()

  return (
    <Portal>
      <div
        className={`fixed inset-0 flex h-[calc(100vh-75px)] w-screen items-end overflow-hidden bg-[rgba(15,23,42,0.5)] px-[52px] pb-[62px]`}
      >
        <div className="grid grid-cols-3 gap-[40px]">
          {user.family?.map(({ userId, username }) => {
            const handleClickProfile = () => {
              setUser({ ...user, userId: userId, username: username })
              if (onClickProfileModal) onClickProfileModal()
            }

            return (
              <div className="Headline-B flex-column-align gap-y-[6px] text-white" key={userId}>
                {username}
                <Link href={`/home/${userId}`}>
                  <Profile name={username} size="lg" onClickProfile={handleClickProfile} />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Portal>
  )
}
