import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import type { User } from '@/types'

type UserState = {
  user: User
}

type UserActions = {
  setUser: (user: User) => void
}

const defaultState = {
  ownerName: '',
  userId: '',
  name: '',
  familyCode: '',
  family: [],
}

export const useUserStore = create(
  persist<UserState & UserActions>(
    (set) => ({
      user: defaultState,
      setUser: (user: User) => {
        set({ user })
      },
    }),
    {
      name: 'userStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
