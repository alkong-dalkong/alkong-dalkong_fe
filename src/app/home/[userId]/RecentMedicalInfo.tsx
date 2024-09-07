import dayjs from 'dayjs'

import 'dayjs/locale/ko'

type RecentMedicalInfoProps = {
  date: string
  hospital: string
}

export const RecentMedicalInfo = ({ date, hospital }: RecentMedicalInfoProps) => {
  const now = dayjs().locale('ko').startOf('day')
  const schedule = dayjs(date).locale('ko').startOf('day')

  const diffDays = now.diff(schedule, 'day')
  const formattedDate = dayjs(date).locale('ko').format('M/D(ddd) HH:mm')

  return (
    <div className="flex-column gap-10 rounded-xl border-gray-4 bg-gray-1 px-5 py-4 text-gray-6">
      <div>
        <div className="subtitle-B mb-1">{`${diffDays}일 전, ${formattedDate}`}</div>
        <div className="headline-M">{hospital}</div>
      </div>
    </div>
  )
}
