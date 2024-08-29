type EmptyDateBoxListProps = {
  emptyDate: number
}

export const EmptyDateBoxList = ({ emptyDate }: EmptyDateBoxListProps) => {
  return (
    <>
      {Array.from({ length: emptyDate }).map((_, idx) => (
        <div key={idx} />
      ))}
    </>
  )
}
