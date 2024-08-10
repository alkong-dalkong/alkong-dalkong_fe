import type { PropsWithChildren } from 'react'

import QueryProvider from '@/hooks/QueryProvider'

import './globals.css'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body className="flex-center">
        <QueryProvider>
          <div className="relative h-svh w-full min-w-[320px] max-w-[450px] overflow-hidden border-x">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  )
}
