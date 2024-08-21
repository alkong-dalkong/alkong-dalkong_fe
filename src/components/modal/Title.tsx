type Props = {
  title: string
}

const Title = ({ title }: Props) => {
  return (
    <div className="text-subtitle font-bold leading-subtitle tracking-[-2%] text-black">
      {title}
    </div>
  )
}

export default Title
