import type { Meta, StoryFn } from '@storybook/react'
import type { StoreApi } from 'zustand'

import { useCalendar } from '@/hooks/useCalendar'
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
  const store = useCalendar(['2024-08-14 00:00:00', '2024-08-15 00:00:00', '2024-08-16 00:00:00'])

  return (
    <div className="mx-auto h-[368px] w-[343px]">
      <Calendar store={store} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
