'use client'
import { useWeightActions } from '@/store/weightStore'

import { Slider } from './Slider'

export const WeightSlider = () => {
  const WEIGHT_NUMBERS = Array.from({ length: 10 }, (_, i) => String(i))
  const { handleDecimalWeightChange, handleOnesWeightChange, handleTensWeightChange } =
    useWeightActions()

  return (
    <div className="flex-center relative rounded-xl bg-mint-0 py-[17px]">
      <div className="headline-M absolute top-1/2 h-[30px] w-[158px] -translate-x-6 -translate-y-1/2 rounded-lg bg-mint-2" />
      <div className="flex gap-[14px]">
        <Slider list={WEIGHT_NUMBERS} onChange={handleTensWeightChange} />
        <Slider list={WEIGHT_NUMBERS} onChange={handleOnesWeightChange} />
        <p className="h-[30px] translate-y-[65px]">.</p>
        <Slider list={WEIGHT_NUMBERS} onChange={handleDecimalWeightChange} />
        <p className="ml-3 h-[30px] translate-y-[64px]">Kg</p>
      </div>
    </div>
  )
}
