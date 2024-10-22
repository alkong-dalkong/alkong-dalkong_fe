import { notFound } from 'next/navigation'

import { OnboardingWrapper } from '@/features'

type OnboardingPageProps = {
  params: {
    step: string
  }
}

export async function generateStaticParams() {
  return Array.from({ length: 3 }, (_, idx) => ({
    step: `${idx + 1}`,
  }))
}

const OnboardingPage = ({ params: { step } }: OnboardingPageProps) => {
  const stepNumber = Number(step)
  if (!(stepNumber === 1 || stepNumber === 2 || stepNumber === 3)) {
    return notFound()
  }

  return <OnboardingWrapper step={stepNumber} />
}

export default OnboardingPage
