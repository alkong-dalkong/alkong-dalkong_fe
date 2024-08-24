import type { PropsWithChildren } from 'react'
import { Noto_Sans_KR } from 'next/font/google'

import { LazyMotionProvider, QueryProvider } from '@/hooks'

import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notoSansKR',
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <head />
      <body className="flex-center font-medium">
        <QueryProvider>
          <LazyMotionProvider>
            <div className="relative h-svh w-full min-w-[320px] max-w-[450px] overflow-y-scroll border-x scrollbar-hide">
              {children}
            </div>
          </LazyMotionProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
