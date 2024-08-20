import type { Meta, StoryFn } from '@storybook/react'

import Tag from './Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta

const Template: StoryFn<{ tags: { title: string }[] }> = ({ tags }) => (
  <div className="flex gap-3">
    {tags.map((tag, idx) => (
      <Tag key={idx} {...tag} />
    ))}
  </div>
)

export const Default = Template.bind({})
Default.args = {
  tags: [{ title: '건강검진' }, { title: '멍' }, { title: '속쓰림' }, { title: '기침' }],
}
