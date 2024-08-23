'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

type SliderType = {
  list: string[]
}

export const Slider = ({ list }: SliderType) => {
  const handleSlideChange = ({ realIndex }: { realIndex: number }) => {
    const currentIndex = (realIndex + 2) % list.length
    console.log(currentIndex)
  }

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={5}
      direction="vertical"
      loop={true}
      className="headline-M h-[150px]"
      onSlideChange={handleSlideChange}
    >
      {list.map((item) => (
        <SwiperSlide key={item}>{item}</SwiperSlide>
      ))}
    </Swiper>
  )
}
