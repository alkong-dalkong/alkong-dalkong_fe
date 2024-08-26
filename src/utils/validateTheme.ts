export const validateDateBoxColor = (
  dateParam: Date,
  schedules: string[],
  idx: number,
): 'active' | 'schedule' | 'sunday' | 'saturday' | 'default' => {
  const [year, month, currentDay] = [
    dateParam.getFullYear(),
    dateParam.getMonth() + 1,
    dateParam.getDate(),
  ]

  if (idx === currentDay) {
    return 'active'
  }

  if (
    schedules.includes(`${year}-${String(month).padStart(2, '0')}-${String(idx).padStart(2, '0')}`)
  ) {
    return 'schedule'
  }

  const dayOfWeek = new Date(year, month - 1, idx).getDay()

  if (dayOfWeek === 0) {
    return 'sunday'
  } else if (dayOfWeek === 6) {
    return 'saturday'
  }

  return 'default'
}
