import type { PropsWithChildren } from 'react'
import { Noto_Sans_KR } from 'next/font/google'

import QueryProvider from '@/hooks/QueryProvider'

import './globals.css'

const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={notoSans.className}>
      <head />
      <body className="flex-center font-medium">
        <QueryProvider>
          <div className="relative h-svh w-full min-w-[320px] max-w-[450px] overflow-hidden border-x">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  )
}
