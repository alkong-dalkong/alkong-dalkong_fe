import type { Preview } from '@storybook/react'

import '@/app/globals.css'
import React from 'react'
import { notoSansKR } from '../public/font'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${notoSansKR.variable} font-notoSansKR font-medium`}>
        <Story />
      </div>
    ),
  ],
}

export default preview
