import type { PropsWithChildren } from 'react'

import { SignUpFormProvider } from '@/features/sign-up/SignUpFormProvider'

const SignUpLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex-column h-full">
      <SignUpFormProvider>{children}</SignUpFormProvider>
    </main>
  )
}

export default SignUpLayout
