import dayjs from 'dayjs'

import Tag from '@/components/tag/Tag'

import 'dayjs/locale/ko'

type UpcomingMedicalInfoProps = {
  hospitalDate?: string
  hospitalName?: string
  medicalPart?: string[]
}

export const UpcomingMedicalInfo = ({
  hospitalDate,
  hospitalName,
  medicalPart,
}: UpcomingMedicalInfoProps) => {
  const now = dayjs().locale('ko').startOf('day')
  const schedule = dayjs(hospitalDate).locale('ko').startOf('day')

  const diffDays = schedule.diff(now, 'day')
  const formattedDate = dayjs(hospitalDate).locale('ko').format('M/D(ddd) HH:mm')
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
        <div className="headline-M">{hospitalName}</div>
      </div>

      <div className="flex items-center gap-2">
        <Tag label={(medicalPart && medicalPart[0]) ?? ''} />
        <span className="headline-M text-black">때문에 방문할 예정이에요.</span>
      </div>
    </div>
  )
}
