type TagProps = {
  label: string
}

export const Tag = ({ label }: TagProps) => {
  return (
    <span className="body-M rounded-[99px] bg-mint-3 px-[11px] py-[5px] text-black">{label}</span>
  )
}
