import Image from 'next/image'
import Link from 'next/link'

import Image1 from '@/assets/onboarding1.png'
import Image2 from '@/assets/onboarding2.png'
import Image3 from '@/assets/onboarding3.png'

const FirstSlide = () => {
  return (
    <>
      <Image src={Image1} width={242} height={480} alt="온보딩 이미지" />
      <p className="subtitle-M whitespace-pre text-center">
        {'가족의 정보를 확인해야 할 때,\n동그란 버튼을 눌러주세요!'}
      </p>
    </>
  )
}

const SecondSlide = () => {
  return (
    <>
      <Image src={Image2} width={242} height={480} alt="온보딩 이미지" />
      <p className="subtitle-M whitespace-pre text-center">
        {'내원 예정을 입력해 두면\n 까먹지 않고 확인할 수 있어요!'}
      </p>
    </>
  )
}

const ThirdSlide = () => {
  return (
    <>
      <Image src={Image3} width={242} height={480} alt="온보딩 이미지" />
      <p className="subtitle-M whitespace-pre text-center">
        {'내원 예정을 입력해 두면\n 까먹지 않고 확인할 수 있어요!'}
      </p>
      <Link
        href="/sign-in"
        className="flex-center subtitle-B h-[56px] w-[335px] rounded-[12px] bg-mint-6 text-white"
      >
        시작하기
      </Link>
    </>
  )
}

export const Slides = [FirstSlide, SecondSlide, ThirdSlide]
