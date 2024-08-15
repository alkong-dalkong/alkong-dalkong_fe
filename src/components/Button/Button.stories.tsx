import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'cancel'],
    },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button',
  color: 'primary',
  width: 'w-[335px]',
  height: 'h-14',
}

export const Cancel = Template.bind({})
Cancel.args = {
  children: 'Cancel Button',
  color: 'cancel',
  width: 'w-[335px]',
  height: 'h-14',
}

export const Custom = Template.bind({})
Custom.args = {
  children: 'Custom Button',
  width: 'w-[335px]',
  height: 'h-14',
  className: 'bg-red text-white',
}
