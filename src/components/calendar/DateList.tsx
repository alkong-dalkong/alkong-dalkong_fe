import { DateBoxList } from './DateBoxList'
import { EmptyDateBoxList } from './EmptyDateBoxList'

type DateListProps = {
  onClick: () => void
}

export const DateList = ({ onClick }: DateListProps) => {
  return (
    <>
      <EmptyDateBoxList />
      <DateBoxList onClick={onClick} />
    </>
  )
}
