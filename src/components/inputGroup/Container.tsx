'use client'
import type { PropsWithChildren } from 'react'

type ContainerProps = {
  direction?: 'row' | 'col'
  onClick?: VoidFunction
}

export const Container = ({
  direction = 'col',
  onClick,
  children,
}: PropsWithChildren<ContainerProps>) => {
  const layoutStyle = direction === 'row' ? 'flex-between-align' : 'flex-column gap-2'
  if (onClick) {
    return (
      <button className={layoutStyle} onClick={onClick}>
        {children}
      </button>
    )
  } else {
    return <div className={layoutStyle}>{children}</div>
  }
}
