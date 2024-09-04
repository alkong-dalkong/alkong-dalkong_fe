'use client'

import { Profile } from '@/components'
import { useUserStore } from '@/store'

export const FloatingProfile = () => {
  const { user } = useUserStore()

  return (
    <div className="absolute right-5 top-[22px]">
      <Profile name={user.username} size="sm" bgColor="#C5FDEC" />
    </div>
  )
}
