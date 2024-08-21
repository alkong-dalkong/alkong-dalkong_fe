'use client'

export type Size = {
  width?: string
  height?: string
}

export type Props = {
  label: string
  onClick: () => void
  color?: 'primary' | 'secondary'
}

const ButtonColors = {
  primary: 'bg-mint-6 text-white active:bg-mint-7',
  secondary: 'bg-gray-3 text-gray-7 active:bg-gray-4',
}

const Button = ({
  label,
  onClick,
  width = 'w-full',
  height = 'h-full',
  color = 'primary',
}: Props & Size) => {
  return (
    <button
      className={`${width} ${height} flex-center rounded-xl ${ButtonColors[color]} active:scale-95`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

const ButtonLong = (props: Props) => {
  return <Button {...props} width="w-[335px]" height="h-14" />
}

const ButtonShort = (props: Props) => {
  return <Button {...props} width="w-[140px]" height="h-[52px]" />
}

Button.Long = ButtonLong
Button.Short = ButtonShort

export default Button
