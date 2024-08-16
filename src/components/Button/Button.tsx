'use client'

interface IButtonProps {
  children?: string
  width?: string
  height?: string
  color?: 'primary' | 'cancel'
  onClick?: () => void
  className?: string
}

const ButtonColors = {
  primary: 'bg-mint-6 text-white active:bg-mint-7',
  cancel: 'bg-gray-3 text-gray-7 active:bg-gray-4',
}

export default function Button({
  children = '',
  width = 'w-full',
  height = 'h-full',
  color = 'primary',
  onClick,
  className = '',
}: IButtonProps) {
  const baseStyles = `${width} ${height} rounded-xl flex-center ${ButtonColors[color]} active:scale-95`

  return (
    <button className={`${baseStyles} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

function ButtonLong(props: IButtonProps) {
  return <Button {...props} width="w-[335px]" height="h-14" />
}

function ButtonShort(props: IButtonProps) {
  return <Button {...props} width="w-[140px]" height="h-[52px]" />
}

Button.Long = ButtonLong
Button.Short = ButtonShort
