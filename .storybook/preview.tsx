import type { Preview } from '@storybook/react'

import '@/app/globals.css'
import React from 'react'
import { notoSansKR } from '../public/app/font'
import { QueryClient, type QueryClientConfig, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

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
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </div>
    ),
  ],
}

export default preview
