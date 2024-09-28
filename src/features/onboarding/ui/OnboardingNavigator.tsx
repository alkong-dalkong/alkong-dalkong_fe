import Link from 'next/link'

import { Icon } from '@/components'

export const OnboardingNavigator = ({ step }: { step: number }) => {
  if (step === 3) {
    return null
  }

  return (
    <Link href={`/onboarding/${step + 1}`} className="absolute right-4 top-1/2">
      <Icon name="arrow-right" size={24} />
    </Link>
  )
}
