import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'

import Button, { ButtonLong, ButtonShort } from '../Button'

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

const Template: StoryFn = (args) => <Button {...args}>버튼</Button>

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button',
  color: 'primary',
}

export const Cancel = Template.bind({})
Cancel.args = {
  children: 'Cancel Button',
  color: 'cancel',
}

export const LongButton = () => <ButtonLong color="primary">시작하기</ButtonLong>

export const ShortButton = () => <ButtonShort color="cancel">취소</ButtonShort>
