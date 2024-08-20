type Props = {
  label: string
}

const Tag: React.FC<Props> = ({ label }) => {
  return (
    <span className="body-M rounded-[99px] bg-mint-3 px-[11px] py-[5px] text-black">{label}</span>
  )
}

export default Tag
