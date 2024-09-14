import dayjs from 'dayjs'

import Tag from '@/components/tag/Tag'
import type {
  CurrentMedicineInfo,
  RecentMedicalInfoType,
  RecentWeightInfo,
  UpcomingMedicalInfoType,
} from '@/types'

import 'dayjs/locale/ko'

const weekEn2Ko: { [key: string]: string } = {
  MONDAY: '월',
  TUESDAY: '화',
  WEDNESDAY: '수',
  THURSDAY: '목',
  FRIDAY: '금',
  SATURDAY: '토',
  SUNDAY: '일',
}

type InfoBoxProps = {
  title: string
  schedule: string
}

const InfoBox = ({ title, schedule }: InfoBoxProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-mint-3 px-6 py-4">
      <span className="subtitle-B">{title}</span>
      <span className="headline-R text-gray-6">{schedule}</span>
    </div>
  )
}

type InfoProps = {
  upcomingMedicalInfo: UpcomingMedicalInfoType
  recentMedicalInfo: RecentMedicalInfoType
  recentWeightInfo: RecentWeightInfo
  currentMedicineInfo: CurrentMedicineInfo
}

const HealthInfo = ({ weight, date }: RecentWeightInfo) => {
  const now = dayjs().locale('ko').startOf('day')
  const schedule = dayjs(date).locale('ko').startOf('day')

  const diffDays = now.diff(schedule, 'day')
  return <InfoBox title={`${weight}kg`} schedule={`${diffDays}일 전`} />
}

const MedicineInfo = ({ info }: { info: CurrentMedicineInfo }) => {
  return (
    <>
      {info.map(({ medicineName, times, weekList }, idx) => {
        let schedule = ''
        if (weekList.length === 7) {
          schedule = '매일'
        } else {
          const formatKo = weekList.map((week) => weekEn2Ko[week])
          schedule = formatKo.join(', ')
        }

        if (times.length === 1) {
          schedule += ` ${times[0]}`
        } else {
          schedule += ` ${times.length}회`
        }

        return <InfoBox key={idx} title={medicineName} schedule={schedule} />
      })}
    </>
  )
}

const UpcomingMedicalInfo = ({
  hospitalName,
  hospitalDate,
  medicalPart,
}: UpcomingMedicalInfoType) => {
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

const RecentMedicalInfo = ({ hospitalName, hospitalDate }: RecentMedicalInfoType) => {
  const now = dayjs().locale('ko').startOf('day')
  const schedule = dayjs(hospitalDate).locale('ko').startOf('day')

  const diffDays = now.diff(schedule, 'day')
  const formattedDate = dayjs(hospitalDate).locale('ko').format('M/D(ddd) HH:mm')

  return (
    <div className="flex-column gap-10 rounded-xl border-gray-4 bg-gray-1 px-5 py-4 text-gray-6">
      <div>
        <div className="subtitle-B mb-1">{`${diffDays}일 전, ${formattedDate}`}</div>
        <div className="headline-M">{hospitalName}</div>
      </div>
    </div>
  )
}

export { HealthInfo, MedicineInfo, RecentMedicalInfo, UpcomingMedicalInfo }
