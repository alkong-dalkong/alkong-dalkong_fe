import Image from 'next/image'
import Link from 'next/link'

import { OnboardingImages } from '../images/onboardingImages'
import type { StepParamsType } from '../types/StepParamsType'

const OnbordingParagraphs = [
  '가족의 정보를 확인해야 할 때,\n동그란 버튼을 눌러주세요!',
  '내원 예정을 입력해 두면\n 까먹지 않고 확인할 수 있어요!',
  '먹어야 하는 약을 자꾸 까먹는다면\n알콩달콩이 기억해둘게요!',
]

export const OnboardingServerPage = ({ step }: StepParamsType) => {
  return (
    <>
      <Image src={OnboardingImages[step - 1]} width={242} height={480} alt="온보딩 이미지" />
      <p className="subtitle-M whitespace-pre text-center">{OnbordingParagraphs[step - 1]}</p>
      {step === 3 ? (
        <Link
          href="/sign-in"
          className="flex-center subtitle-B h-[56px] w-[335px] rounded-[12px] bg-mint-6 text-white"
        >
          시작하기
        </Link>
      ) : null}
    </>
  )
}
