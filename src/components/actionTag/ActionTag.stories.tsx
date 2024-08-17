import type { Meta, StoryFn } from '@storybook/react'

import ActionTag from './ActionTag'

export default {
  title: 'Components/ActionTag',
  component: ActionTag,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn = (args) => <ActionTag {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: '건강검진',
}

const PlusTemplate: StoryFn = (args) => <ActionTag.Plus {...args} />
export const Plus = PlusTemplate.bind({})
Plus.args = {
  children: '기침',
}

const MinusTemplate: StoryFn = (args) => <ActionTag.Minus {...args} />
export const Minus = MinusTemplate.bind({})
Minus.args = {
  children: '콧물',
}
