import { useCalendarStore } from '@/store/useCalendarStore'

export const EmptyDateBoxList = () => {
  const { year, month } = useCalendarStore()

  return (
    <>
      {Array.from({ length: new Date(year, month, 1).getDay() }).map((_, idx) => (
        <div key={idx} />
      ))}
    </>
  )
}
