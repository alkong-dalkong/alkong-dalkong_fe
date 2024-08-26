import { useContext } from 'react'
import { useStore } from 'zustand'

import { CalendarContext } from '@/store/calendarStore'

export const EmptyDateBoxList = () => {
  const store = useContext(CalendarContext)
  if (!store) throw new Error('Missing CalendarContext.Provider in the tree')
  const date = useStore(store, (s) => s.date)

  return (
    <>
      {Array.from({ length: new Date(date.getFullYear(), date.getMonth(), 1).getDay() }).map(
        (_, idx) => (
          <div key={idx} />
        ),
      )}
    </>
  )
}
