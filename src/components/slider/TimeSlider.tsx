import { Slider } from './Slider'

export const TimeSlider = () => {
  const HOURS = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'))
  const MINUTES = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'))

  return (
    <div className="flex-center relative rounded-xl bg-mint-0 py-[17px]">
      <div className="absolute top-1/2 h-[30px] w-[192px] -translate-y-1/2 rounded-lg bg-mint-2" />
      <div className="flex gap-8">
        <Slider list={HOURS} />
        <p className="h-[30px] translate-y-[65px]">:</p>
        <Slider list={MINUTES} />
      </div>
    </div>
  )
}
