import type { Meta, StoryFn } from '@storybook/react'

import ActionTag from './ActionTag'

export default {
  title: 'Components/ActionTag',
  component: ActionTag,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'mint', 'gray'],
    },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn = (args) => <ActionTag {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: '건강검진',
  color: 'primary',
}

export const Gray = Template.bind({})
Gray.args = {
  children: '+ 속쓰림',
  color: 'gray',
}

export const Mint = Template.bind({})
Mint.args = {
  children: '- 건강검진',
  color: 'mint',
}
