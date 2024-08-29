import { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import type { StoreApi } from 'zustand'

import type { CalendarState } from '@/store/calendarStore'

import { Calendar } from './Calendar'

export default {
  title: 'Calendar',
  component: Calendar,
} as Meta

type CalendarProps = {
  store: StoreApi<CalendarState>
}

const Template: StoryFn<CalendarProps> = () => {
  const [date, setDate] = useState<Date>(new Date())
  const schedules = ['2024-08-27 12:00:00', '2024-08-28 13:00:00', '2024-08-29 14:00:00']

  return (
    <div className="mx-auto h-[368px] w-[343px]">
      <Calendar date={date} setDate={setDate} schedules={schedules} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
