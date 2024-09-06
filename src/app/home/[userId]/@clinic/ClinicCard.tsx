import dayjs from 'dayjs'

import Tag from '@/components/tag/Tag'

import 'dayjs/locale/ko'

type ClinicCardProps = {
  date: string
  hospital: string
  tag: string
}

export const ClinicCard = ({ date, hospital, tag }: ClinicCardProps) => {
  const now = dayjs().locale('ko').startOf('day')
  const schedule = dayjs(date).locale('ko').startOf('day')

  const diffDays = schedule.diff(now, 'day')
  const formattedDate = dayjs(date).locale('ko').format('M/D(ddd) HH:mm')

  const isBefore = diffDays < 0
  const activeStyle = isBefore
    ? 'border-gray-4 bg-gray-1 text-gray-6'
    : 'border border-mint-4 shadow-[0_0_12px_rgba(2,41,34,0.1)] text-black'

  return (
    <div className={`flex-column ${activeStyle} gap-10 rounded-xl px-5 py-4`}>
      <div>
        <div className="subtitle-B mb-1">
          {diffDays === 0
            ? `오늘, ${formattedDate}`
            : diffDays > 0
              ? `${diffDays}일 후, ${formattedDate}`
              : `${diffDays * -1}일 전, ${formattedDate}`}
        </div>
        <div className="headline-M">{hospital}</div>
      </div>

      {!isBefore && (
        <div className="flex items-center gap-2">
          <Tag label={tag} />
          <span className="headline-M text-black">때문에 방문할 예정이에요.</span>
        </div>
      )}
    </div>
  )
}
