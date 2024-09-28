import { OnboardingWrapper } from '@/features'

type OnboardingStaticProps = {
  params: {
    step: string
  }
}

export async function getStaticPaths() {
  return {
    paths: Array.from(
      { length: 3 },
      (_, idx): OnboardingStaticProps => ({
        params: {
          step: `${idx + 1}`,
        },
      }),
    ),
    fallback: false,
  }
}

const OnboardingPage = ({ params: { step } }: OnboardingStaticProps) => {
  return <OnboardingWrapper step={Number(step)} />
}

export default OnboardingPage
