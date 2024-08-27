'use client'
import { useUserStore } from '@/store'

import { Portal } from '../portal/Portal'

import { Profile } from './Profile'

export const ProfileModal = () => {
  const { user } = useUserStore()

  return (
    <Portal>
      <div
        className={`fixed inset-0 flex h-[calc(100vh-75px)] w-screen items-end overflow-hidden bg-[rgba(15,23,42,0.5)] px-[52px] pb-[62px]`}
      >
        <div className="grid grid-cols-3 gap-[40px]">
          {user.family?.map(({ userId, username }) => {
            const path = `/${userId}`

            return (
              <div className="Headline-B flex-column-align gap-y-[6px] text-white" key={userId}>
                {username}
                <a key={path} href={path}>
                  <Profile name={username} size="lg" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </Portal>
  )
}
