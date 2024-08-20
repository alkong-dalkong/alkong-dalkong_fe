import type { Meta, StoryObj } from '@storybook/react'

import Label from './Label'

import testImage from '/public/next.svg'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
    src: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Label with Icon',
    src: testImage,
  },
}
