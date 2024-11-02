'use client'

import { Icon } from '../icons'

export type ActionTagProps = {
  label: string
  onClick: () => void
  primary?: boolean
  icon?: 'plus' | 'minus'
}

type ActionTagType = React.FC<ActionTagProps> & {
  Plus: React.FC<ActionTagProps>
  Minus: React.FC<ActionTagProps>
}

const ActionTag: ActionTagType = ({
  label,
  onClick,
  primary = false,
  icon = 'plus',
}: ActionTagProps) => {
  const color = primary ? 'bg-mint-6 text-white' : 'bg-gray-2 text-gray-7'

  return (
    <button
      className={`${color} body-M flex-center gap-[4px] rounded-[99px] pb-[6px] pl-[10px] pr-[12px] pt-[4px]`}
      onClick={onClick}
      type="button"
    >
      <Icon name={icon} color={`${primary ? '#FFFFFF' : '#676A6B'}`} size={16} />
      <span>{label}</span>
    </button>
  )
}

const Plus = (props: ActionTagProps) => {
  return <ActionTag {...props} icon="plus" />
}

const Minus = (props: ActionTagProps) => {
  return <ActionTag {...props} primary icon="minus" />
}

ActionTag.Plus = Plus
ActionTag.Minus = Minus

export { ActionTag }
