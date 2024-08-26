import type { PropsWithChildren } from 'react'

type ContainerProps = {
  isRow?: boolean
}

export const Container = ({ isRow = false, children }: PropsWithChildren<ContainerProps>) => {
  const layoutStyle = isRow ? 'flex-between-align' : 'flex-column gap-2'
  return <div className={layoutStyle}>{children}</div>
}
