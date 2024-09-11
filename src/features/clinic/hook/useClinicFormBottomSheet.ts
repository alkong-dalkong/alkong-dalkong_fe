'use client'
import { useToggle } from '@/hooks'

export const useClinicFormBottomSheet = (isReadOnly: boolean) => {
  const [tagSheet, toggleTagSheet] = useToggle(false)
  const [dateSheet, toggleDateSheet] = useToggle(false)
  const [alarmSheet, toggleAlarmSheet] = useToggle(false)

  const handletoggleDateSheet = () => {
    if (!isReadOnly) toggleDateSheet()
  }

  const handleToggleAlarmSheet = () => {
    if (!isReadOnly) toggleAlarmSheet()
  }

  return {
    tagSheet,
    toggleTagSheet,
    dateSheet,
    handletoggleDateSheet,
    alarmSheet,
    handleToggleAlarmSheet,
  }
}
