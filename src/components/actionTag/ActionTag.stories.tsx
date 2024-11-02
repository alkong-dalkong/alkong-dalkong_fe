import type { Meta, StoryFn } from '@storybook/react'

import type { ActionTagProps } from './ActionTag'
import ActionTag from './ActionTag'

export default {
  title: 'ActionTag',
  component: ActionTag,
  argTypes: {
    label: { control: 'text' },
    primary: {
      control: 'boolean',
      options: [true, false],
    },
    icon: {
      control: 'radio',
      options: ['plus', 'minus'],
    },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn<ActionTagProps> = (args) => <ActionTag {...args} />

export const Default = Template.bind({})
Default.args = {
  label: '건강검진',
}

const PlusTemplate: StoryFn<ActionTagProps> = (args) => <ActionTag.Plus {...args} />
export const Plus = PlusTemplate.bind({})
Plus.args = {
  label: '건강검진',
}

const MinisTemplate: StoryFn<ActionTagProps> = (args) => <ActionTag.Minus {...args} />
export const Minus = MinisTemplate.bind({})
Minus.args = {
  label: '건강검진',
}
