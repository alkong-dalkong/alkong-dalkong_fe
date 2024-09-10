import type { PropsWithChildren } from 'react'

import { SignUpFormProvider } from '@/features/sign-up/SignUpFormProvider'

const SignUpLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex-column min-h-screen">
      <SignUpFormProvider>{children}</SignUpFormProvider>
    </main>
  )
}

export default SignUpLayout
