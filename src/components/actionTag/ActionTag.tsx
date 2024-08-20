'use client'

import Image from 'next/image'

type PlusMinusProps = {
  title: string
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

const ActionTag = ({ title, onClick, color = 'primary', src }: Props) => {
  return (
    <button
      className={`${ActionTagColors[color]} body-M flex-center gap-[4px] rounded-[99px] px-[11px] py-[5px]`}
      onClick={onClick}
    >
      {src && <Image src={src} alt={title} width={16} height={16} />}
      {title}
    </button>
  )
}

const Plus = (props: PlusMinusProps) => {
  return <ActionTag {...props} color="secondary" />
}

const Minus = (props: PlusMinusProps) => {
  return <ActionTag {...props} />
}

ActionTag.Plus = Plus
ActionTag.Minus = Minus

export default ActionTag
