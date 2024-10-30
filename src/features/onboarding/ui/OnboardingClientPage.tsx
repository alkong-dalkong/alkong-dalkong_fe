'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Icon } from '@/components'
import { SlideWrapper } from '@/features'
import { Slides } from '@/features'
import { useSwiper } from '@/features'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/swiper.css'

export const OnBoardingClientPage = () => {
  const { SwiperOptions, isBeginning, isEnd, handlePrev, handleNext } = useSwiper()

  return (
    <>
      <Swiper {...SwiperOptions}>
        {Slides.map((Slide, index) => (
          <SwiperSlide key={index}>
            <SlideWrapper>
              <Slide />
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      {!isBeginning && (
        <button onClick={handlePrev} className="absolute left-2 top-[40%]">
          <Icon name="arrow-left" size={28} color="#000" />
        </button>
      )}
      {!isEnd && (
        <button onClick={handleNext} className="absolute right-2 top-[40%]">
          <Icon name="arrow-right" size={28} color="#000" />
        </button>
      )}
    </>
  )
}
