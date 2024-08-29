import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import type { User } from '@/types'

type UserState = {
  user: User
}

type UserActions = {
  setUser: (user: User) => void
}

// mockData. 로그인 개발 이후 수정 필요
const defaultState = {
  userId: '1',
  username: '가나다라',
  family: [
    { userId: '1', username: '가나다라' },
    { userId: '2', username: '마바사' },
    { userId: '3', username: '아자차카' },
    { userId: '4', username: '타파하' },
  ],
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
