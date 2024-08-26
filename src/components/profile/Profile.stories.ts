import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from './Profile'

const meta: Meta<typeof Profile> = {
  title: 'Profile',
  component: Profile,
}

export default meta

type Story = StoryObj<typeof Profile>

export const Small: Story = {
  args: {
    size: 'small',
    name: '테스트',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    name: '테스트',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    name: '테스트',
  },
}
