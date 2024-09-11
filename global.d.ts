import type { SignupFormType } from '@/types'

import 'little-state-machine'

declare module 'little-state-machine' {
  interface GlobalState {
    signUp: Partial<SignupFormType>
  }
}
