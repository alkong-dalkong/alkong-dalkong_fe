import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'

import { Calendar } from './Calendar'

export default {
  title: 'Calendar',
  component: Calendar,
  argTypes: {
    onClick: { action: 'clicked', description: 'Callback for date click' },
  },
} as Meta

type CalendarProps = {
  onClick: () => void
  schedules?: number[]
}

const Template: StoryFn<CalendarProps> = (args) => {
  return (
    <div className="h-[368px] w-[343px]">
      <Calendar {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  schedules: [1, 5, 10, 15, 20],
}

export const WithFewSchedules = Template.bind({})
WithFewSchedules.args = {
  schedules: [2, 14, 28],
}

export const WithoutSchedules = Template.bind({})
WithoutSchedules.args = {
  schedules: [],
}
