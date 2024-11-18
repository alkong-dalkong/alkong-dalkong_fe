'use client'

import { useState } from 'react'
import { Keyboard, Pagination } from 'swiper/modules'
import type { SwiperClass, SwiperProps } from 'swiper/react'

export const useSwiper = () => {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handlePrev = () => {
    swiper?.slidePrev()
  }

  const handleNext = () => {
    swiper?.slideNext()
  }

  const SwiperOptions: SwiperProps = {
    slidesPerView: 1,
    modules: [Keyboard, Pagination],
    keyboard: {
      enabled: true,
    },
    pagination: {
      clickable: true,
    },
    onSlideChange: ({ isBeginning, isEnd }) => {
      setIsBeginning(isBeginning)
      setIsEnd(isEnd)
    },
    onSwiper: (state) => setSwiper(state),
  }

  return { SwiperOptions, isBeginning, isEnd, handlePrev, handleNext }
}
