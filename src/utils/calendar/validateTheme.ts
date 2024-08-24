type ParamsType = {
  year: number
  month: number
  date: number
  schedules: number[]
  idx: number
}

export const validateDateBoxColor = ({
  year,
  month,
  date,
  schedules,
  idx,
}: ParamsType): 'active' | 'schedule' | 'sunday' | 'saturday' | 'default' => {
  if (idx === date) {
    return 'active'
  }

  if (schedules.includes(idx)) {
    return 'schedule'
  }

  const day = new Date(year, month, idx).getDay()

  if (day === 0) {
    return 'sunday'
  } else if (day === 6) {
    return 'saturday'
  }

  return 'default'
}
