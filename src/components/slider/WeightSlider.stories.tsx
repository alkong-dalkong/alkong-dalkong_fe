import type { Meta, StoryFn } from '@storybook/react'

import { WeightSlider } from './WeightSlider'

export default {
  title: 'WeightSlider',
  component: WeightSlider,
} as Meta

export const Slider: StoryFn<typeof WeightSlider> = () => {
  return (
    <div className="w-[450px]">
      <WeightSlider />
    </div>
  )
}
