import { Icon } from '@/components'
import { useToggleTakenInfo } from '@/features'
import type { MedicineDateDtoType, MedicineTakenInfoType } from '@/types'

type MedicineListByHoursProps = {
  time: string
  medicines: MedicineTakenInfoType[keyof MedicineTakenInfoType]
  medicineList: Record<MedicineDateDtoType['medicineId'], MedicineDateDtoType>
}

type MedicineItemProps = {
  isTaken: boolean
  medicine: MedicineDateDtoType
  takenIndex: number
}

const MedicineItem = ({ medicine, isTaken, takenIndex }: MedicineItemProps) => {
  console.log(medicine)
  const { medicineRecordId, medicineName, medicineDosage, medicineTakenType } = medicine
  const dosageText = medicineTakenType === 'DOSE' ? '회분' : '정'
  const { mutate: toggleTakenInfo } = useToggleTakenInfo()

  const handleClickItem = () => {
    toggleTakenInfo({
      recordId: medicineRecordId,
      request: { timeNum: takenIndex, takenNum: isTaken ? 0 : 1 },
    })
  }

  return (
    <li className="flex-column rounded-xl border border-mint-3 bg-white p-4 text-gray-8">
      <button className="flex-between-align text-left" onClick={handleClickItem}>
        <div className="flex-column gap-1">
          <p className="subtitle-B">{medicineName}</p>
          <p className="headline-R text-gray-6">
            {medicineDosage}
            {dosageText}
          </p>
        </div>
        <Icon name={isTaken ? 'check-yes' : 'check-no'} />
      </button>
    </li>
  )
}

export const MedicineListByHours = ({
  time,
  medicines,
  medicineList,
}: MedicineListByHoursProps) => {
  return (
    <div className="flex-column">
      <p className="headline-R mb-3 text-gray-7">{time}</p>
      <ul className="flex-column gap-2">
        {medicines.map((takenInfo) => (
          <MedicineItem
            key={takenInfo.medicine_id}
            medicine={medicineList[takenInfo.medicine_id]}
            takenIndex={takenInfo.index}
            isTaken={takenInfo.taken === 'TAKEN'}
          />
        ))}
      </ul>
    </div>
  )
}
