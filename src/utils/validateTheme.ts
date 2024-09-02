import dayjs from 'dayjs'

const DateBoxColors = {
  active: 'bg-mint-6 text-white rounded-full',
  today: 'bg-mint-0 text-mint-6 rounded-full',
  schedule: 'bg-mint-3 rounded-full',
  sunday: 'text-mint-6',
  saturday: 'text-gray-6',
  default: '',
}

type validateDateBoxColorType = (date: string, indexOfDate: number, schedules: string[]) => string

export const validateDateBoxColor: validateDateBoxColorType = (date, indexOfDate, schedules) => {
  const currentMonthYear = dayjs(date).format('YYYY-MM')
  const currentDate = dayjs(`${currentMonthYear}-${indexOfDate}`)

  if (dayjs(date).date() === indexOfDate) return DateBoxColors['active']
  if (schedules.includes(currentDate.format('YYYY-MM-DD'))) return DateBoxColors['schedule']
  if (currentDate.day() === 0) return DateBoxColors['sunday']
  if (currentDate.day() === 6) return DateBoxColors['saturday']

  return DateBoxColors['default']
}
