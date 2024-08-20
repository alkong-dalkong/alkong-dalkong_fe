import type { Meta, StoryFn } from '@storybook/react'

import type { Props, Size } from './Button'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn<Props & Size> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary Button',
  color: 'primary',
  width: 'w-[335px]',
  height: 'h-14',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Cancel Button',
  color: 'secondary',
  width: 'w-[335px]',
  height: 'h-14',
}

export const Custom = Template.bind({})
Custom.args = {
  label: 'Custom Button',
  width: 'w-[335px]',
  height: 'h-14',
}

const LongTemplate: StoryFn<Props> = (args) => <Button.Long {...args} />
export const Long = LongTemplate.bind({})
Long.args = {
  label: 'Long Button',
}

const ShortTemplate: StoryFn<Props> = (args) => <Button.Short {...args} />
export const Short = ShortTemplate.bind({})
Short.args = {
  label: 'Short Button',
}
