import type { PropsWithChildren } from 'react'

type InputGroupProps = {
  row?: boolean
}

export const InputGroup = ({ row = false, children }: PropsWithChildren<InputGroupProps>) => {
  const layoutStyle = row ? 'flex-between-align' : 'flex-column gap-2'
  return <div className={layoutStyle}>{children}</div>
}
