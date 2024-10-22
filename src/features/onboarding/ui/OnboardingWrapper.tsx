import type { StepParamsType } from '../types/StepParamsType'

import { OnboardingNavigator } from './OnboardingNavigator'
import { OnboardingServerPage } from './OnboardingServerPage'
import { Stepper } from './Stepper'

export const OnboardingWrapper = ({ step }: StepParamsType) => {
  return (
    <div className="flex-column flex-center size-full">
      <div className="flex-column relative h-[600px] w-full justify-between">
        <Stepper step={step} />
        <div className="flex-column h-[560px] w-full items-center justify-between">
          <OnboardingNavigator step={step} />
          <OnboardingServerPage step={step} />
        </div>
      </div>
    </div>
  )
}
