import type { Meta, StoryFn } from '@storybook/react'

import Tag from './ActionTag'

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'add', 'delete'],
    },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn = (args) => <Tag {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: '건강검진',
  color: 'primary',
}

export const Add = Template.bind({})
Add.args = {
  children: '+ 속쓰림',
  color: 'add',
}

export const Delete = Template.bind({})
Delete.args = {
  children: '- 건강검진',
  color: 'delete',
}
