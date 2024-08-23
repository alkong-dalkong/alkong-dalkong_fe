'use client'

import { useCallback, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useDebounceFunc } from '@/hooks/useDebounceFunc'

import 'swiper/css'

type SliderType = {
  list: string[]
}

export const Slider = ({ list }: SliderType) => {
  const activeIndexRef = useRef(0)

  const debouncedSlideChange = useDebounceFunc(() => {
    console.log(activeIndexRef.current)
  }, 300)

  const handleSlideChange = useCallback(
    ({ realIndex }: { realIndex: number }) => {
      const currentIndex = (realIndex + 2) % list.length
      activeIndexRef.current = currentIndex
      debouncedSlideChange()
    },
    [debouncedSlideChange, list.length],
  )

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
        <SwiperSlide key={item} className="leading-[30px]">
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
