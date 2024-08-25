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
  schedules?: string[]
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
  schedules: [
    '2024-08-01 09:15:30',
    '2024-08-15 23:45:00',
    '2024-08-25 05:55:32',
    '2024-08-26 14:30:45',
  ],
}

export const WithFewSchedules = Template.bind({})
WithFewSchedules.args = {
  schedules: [
    '2024-08-01 09:15:30',
    '2024-08-15 23:45:00',
    '2024-08-25 05:55:32',
    '2024-08-26 14:30:45',
  ],
}

export const WithoutSchedules = Template.bind({})
