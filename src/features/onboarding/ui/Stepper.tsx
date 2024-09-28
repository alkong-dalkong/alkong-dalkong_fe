import type { StepParamsType } from '../types/StepParamsType'

export const Stepper = ({ step }: StepParamsType) => {
  return (
    <ul className="flex-center w-full gap-5">
      {Array.from({ length: 3 }, (_, index) => {
        const highLight = step === index + 1 ? 'size-[10px] bg-gray-7' : 'size-2 bg-gray-4'
        return <li key={index} className={`${highLight} rounded-full`}></li>
      })}
    </ul>
  )
}
