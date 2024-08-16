'use client'
interface IActionTagProps {
  children?: string
  color?: 'primary' | 'mint' | 'gray'
  onClick?: () => void
}

const ActionTagColors = {
  primary: 'bg-mint-3 text-black',
  mint: 'bg-mint-6 text-white',
  gray: 'bg-gray-2 text-gray-7',
}

export default function ActionTag({ children = '', color = 'mint', onClick }: IActionTagProps) {
  return (
    <button
      className={`${ActionTagColors[color]} rounded-[99px] px-[11px] py-[5px]`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
