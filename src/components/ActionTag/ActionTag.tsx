'use client'

import Image from 'next/image'

type PlusMinusProps = {
  label: string
  onClick: () => void
}

export type Props = PlusMinusProps & {
  color?: 'primary' | 'secondary'
  src?: string
}

const ActionTagColors = {
  primary: 'bg-mint-6 text-white',
  secondary: 'bg-gray-2 text-gray-7',
}

type ActionTagType = React.FC<Props> & {
  Plus: React.FC<PlusMinusProps>
  Minus: React.FC<PlusMinusProps>
}

const ActionTag: ActionTagType = ({ label, onClick, color = 'primary', src }: Props) => {
  return (
    <button
      className={`${ActionTagColors[color]} body-M flex-center gap-[4px] rounded-[99px] px-[11px] py-[5px]`}
      onClick={onClick}
    >
      {src && <Image src={src} alt={label} width={16} height={16} />}
      <span>{label}</span>
    </button>
  )
}

const Plus: React.FC<PlusMinusProps> = (props: PlusMinusProps) => {
  return <ActionTag {...props} color="secondary" />
}

const Minus: React.FC<PlusMinusProps> = (props: PlusMinusProps) => {
  return <ActionTag {...props} />
}

ActionTag.Plus = Plus
ActionTag.Minus = Minus

export default ActionTag
