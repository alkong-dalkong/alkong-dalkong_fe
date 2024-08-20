import type { Meta, StoryFn } from '@storybook/react'

import type { Props } from './ActionTag'
import ActionTag from './ActionTag'

export default {
  title: 'Components/ActionTag',
  component: ActionTag,
  argTypes: {
    label: { control: 'text' },
    color: { control: 'radio', options: ['primary', 'secondary'] },
    onClick: { action: 'clicked' },
  },
} as Meta

const Template: StoryFn<Props> = (args) => <ActionTag {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Action',
}
