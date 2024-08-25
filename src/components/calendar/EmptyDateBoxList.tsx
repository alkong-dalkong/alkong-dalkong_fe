import { useCalendarMonth, useCalendarYear } from '@/store/useCalendarStore'

export const EmptyDateBoxList = () => {
  const year = useCalendarYear()
  const month = useCalendarMonth()

  return (
    <>
      {Array.from({ length: new Date(year, month, 1).getDay() }).map((_, idx) => (
        <div key={idx} />
      ))}
    </>
  )
}
