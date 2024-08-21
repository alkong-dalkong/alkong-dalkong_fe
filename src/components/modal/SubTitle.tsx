type Props = {
  title: string
}

const SubTitle = ({ title }: Props) => {
  return <div className="text-headline font-medium leading-headline tracking-[-1%]">{title}</div>
}

export default SubTitle
