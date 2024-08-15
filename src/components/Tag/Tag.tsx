interface ITagProps {
  children?: string
  color?: 'primary' | 'add' | 'delete'
  onClick?: () => void
}

export default function Tag({ children = '', color = 'primary', onClick }: ITagProps) {
  const colors = {
    primary: 'bg-mint-3 text-black',
    add: 'bg-gray-2 text-gray-7',
    delete: 'bg-mint-6 text-white',
  }

  return (
    <button onClick={onClick} className={`${colors[color]} rounded-[99px] px-[11px] py-[5px]`}>
      {children}
    </button>
  )
}
