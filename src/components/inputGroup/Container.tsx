import type { PropsWithChildren } from 'react'

type ContainerProps = {
  row?: boolean
}

export const Container = ({ row = false, children }: PropsWithChildren<ContainerProps>) => {
  const layoutStyle = row ? 'flex-between-align' : 'flex-column gap-2'
  return <div className={layoutStyle}>{children}</div>
}
