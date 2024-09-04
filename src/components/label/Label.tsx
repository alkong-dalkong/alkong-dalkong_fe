import type { PropsWithChildren } from 'react'

import type { iconMap } from '../icons'
import { Icon } from '../icons'

type LabelProps = {
  icon?: keyof typeof iconMap
}

export const Label = ({ children, icon }: PropsWithChildren<LabelProps>) => {
  return (
    <div className="flex-align subtitle-B gap-2">
      {icon && <Icon name={icon} />}
      <p className="subtitle-B">{children}</p>
    </div>
  )
}
