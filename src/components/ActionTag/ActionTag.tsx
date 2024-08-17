'use client'
interface IPlusMinusTagProps {
  children?: React.ReactNode
  onClick?: () => void
}
interface IActionTagProps extends IPlusMinusTagProps {
  color?: 'primary' | 'secondary'
}

const ActionTagColors = {
  primary: 'bg-mint-6 text-white',
  secondary: 'bg-gray-2 text-gray-7',
}

export default function ActionTag({ children = '', color = 'primary', onClick }: IActionTagProps) {
  return (
    <button
      className={`${ActionTagColors[color]} body-M rounded-[99px] px-[11px] py-[5px]`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function Plus(props: IPlusMinusTagProps) {
  return (
    <ActionTag {...props} color="secondary">
      + {props.children}
    </ActionTag>
  )
}

function Minus(props: IPlusMinusTagProps) {
  return <ActionTag {...props}>- {props.children}</ActionTag>
}

ActionTag.Plus = Plus
ActionTag.Minus = Minus
