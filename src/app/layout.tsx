import type { PropsWithChildren } from 'react'

import QueryProvider from '@/hooks/QueryProvider'

import './globals.css'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
