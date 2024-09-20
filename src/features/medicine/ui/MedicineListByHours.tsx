import { Icon } from '@/components'
import type { MedicineDateDtoType, MedicineTakenInfoType } from '@/types'

type MedicineListByHoursProps = {
  time: string
  medicines: MedicineTakenInfoType[keyof MedicineTakenInfoType]
  medicineList: Record<
    MedicineDateDtoType['medicineId'],
    Omit<MedicineDateDtoType, 'medicineRecordId'>
  >
}

type MedicineItemProps = Pick<
  MedicineDateDtoType,
  'medicineName' | 'medicineDosage' | 'medicineTakenType'
> & { isTaken: boolean }

const MedicineItem = ({
  medicineName,
  medicineDosage,
  medicineTakenType,
  isTaken,
}: MedicineItemProps) => {
  const dosageText = medicineTakenType === 'DOSE' ? '회분' : '정'

  return (
    <li className="flex-column rounded-xl border border-mint-3 bg-white p-4 text-gray-8">
      <button className="flex-between-align text-left">
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
        {medicines.map((takenInfo) => {
          const medicine = medicineList[takenInfo.medicine_id]
          return (
            <MedicineItem
              key={takenInfo.medicine_id}
              medicineName={medicine.medicineName}
              medicineDosage={medicine.medicineDosage}
              medicineTakenType={medicine.medicineTakenType}
              isTaken={takenInfo.taken === 'TAKEN'}
            />
          )
        })}
      </ul>
    </div>
  )
}
