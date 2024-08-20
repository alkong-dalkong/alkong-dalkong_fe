import { useState } from 'react'
import type { Meta, StoryFn } from '@storybook/react'

import Calendar from './Calendar'

export default {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta

export const Default: StoryFn = (args) => {
  const [date, setDate] = useState(new Date())
  const handleClick = (clickedDate: Date): void => {
    setDate(clickedDate)
    console.log(clickedDate)
  }

  return (
    <div className="mx-auto my-0 h-[368px] w-[343px]">
      <Calendar
        dateState={date}
        onClick={(d) => {
          handleClick(d)
          args.onClick()
        }}
        scheduleDates={['2024-08-19', '2024-08-20', '2024-08-21']}
      />
    </div>
  )
}
