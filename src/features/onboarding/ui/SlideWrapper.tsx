import type { PropsWithChildren } from 'react'

export const SlideWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex-column size-full max-h-[608px] items-center justify-around">
      {children}
    </div>
  )
}
