import type { Meta, StoryFn } from '@storybook/react'

import { TimeSlider } from './TimeSlider'

export default {
  title: 'TimeSlider',
  component: TimeSlider,
} as Meta

export const Slider: StoryFn<typeof TimeSlider> = () => {
  return (
    <div className="w-[450px]">
      <TimeSlider />
    </div>
  )
}
