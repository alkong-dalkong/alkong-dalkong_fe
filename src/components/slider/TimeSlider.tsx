'use client'
import { HOURS, MINUTES } from '@/constants'
import { useSelectedTimeActions } from '@/store/timeStore'

import { Slider } from './Slider'

export const TimeSlider = () => {
  const { handleHourChange, handleMinuteChange } = useSelectedTimeActions()

  return (
    <div className="flex-center relative w-full select-none rounded-xl bg-mint-0 py-[17px]">
      <div className="absolute top-1/2 h-[30px] w-[192px] -translate-y-1/2 rounded-lg bg-mint-2" />
      <div className="flex gap-8">
        <Slider list={HOURS} onChange={handleHourChange} />
        <p className="h-[30px] translate-y-[60px] leading-[30px]">:</p>
        <Slider list={MINUTES} onChange={handleMinuteChange} />
      </div>
    </div>
  )
}
