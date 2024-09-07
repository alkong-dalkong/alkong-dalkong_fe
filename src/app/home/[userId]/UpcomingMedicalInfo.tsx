import dayjs from 'dayjs'

import Tag from '@/components/tag/Tag'

import 'dayjs/locale/ko'

type UpcomingMedicalInfoProps = {
  date: string
  hospital: string
  tag: string
}

export const UpcomingMedicalInfo = ({ date, hospital, tag }: UpcomingMedicalInfoProps) => {
  const now = dayjs().locale('ko').startOf('day')
  const schedule = dayjs(date).locale('ko').startOf('day')

  const diffDays = schedule.diff(now, 'day')
  const formattedDate = dayjs(date).locale('ko').format('M/D(ddd) HH:mm')
  let upcoming = ''

  switch (diffDays) {
    case 0:
      upcoming = '오늘'
      break
    case 1:
      upcoming = '내일'
      break
    default:
      upcoming = `${diffDays}일 후`
  }

  return (
    <div className="flex-column gap-10 rounded-xl border border-mint-4 px-5 py-4 text-black shadow-[0_0_12px_rgba(2,41,34,0.1)]">
      <div>
        <div className="subtitle-B mb-1">
          {upcoming}, {formattedDate}
        </div>
        <div className="headline-M">{hospital}</div>
      </div>

      <div className="flex items-center gap-2">
        <Tag label={tag} />
        <span className="headline-M text-black">때문에 방문할 예정이에요.</span>
      </div>
    </div>
  )
}
