import type { Preview } from '@storybook/react'

import '@/app/globals.css'
import React from 'react'
import { notoSansKR } from '../public/app/font'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div id="layout" className={`${notoSansKR.variable} font-notoSansKR font-medium`}>
        <Story />
      </div>
    ),
  ],
}

export default preview
