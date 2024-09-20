import { Icon } from '@/components'
import { useToggleTakenInfo } from '@/features'
import type { MedicineDateDtoType } from '@/types'

type MedicineItemProps = {
  isTaken: boolean
  medicine: MedicineDateDtoType
  takenIndex: number
}

export const MedicineItem = ({ medicine, isTaken, takenIndex }: MedicineItemProps) => {
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
