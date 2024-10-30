import type { PropsWithChildren } from 'react'

export const SlideWrapper = ({ children }: PropsWithChildren) => {
  return <div className="flex-column h-[560px] w-full items-center justify-between">{children}</div>
}
