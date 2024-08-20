type Props = {
  label: string
}

const Tag = ({ label: title }: Props) => {
  return (
    <span className="body-M rounded-[99px] bg-mint-3 px-[11px] py-[5px] text-black">{title}</span>
  )
}

export default Tag
