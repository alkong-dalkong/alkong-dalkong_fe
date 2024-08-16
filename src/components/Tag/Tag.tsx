interface ITagProps {
  children?: string
}

export default function Tag({ children = '' }: ITagProps) {
  return <span className="rounded-[99px] bg-mint-3 px-[11px] py-[5px] text-black">{children}</span>
}
