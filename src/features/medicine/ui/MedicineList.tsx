'use client'

import { MedicineItem, useMedicineListByHours } from '@/features'

export const MedicineList = () => {
  const { medicineList, timeListByHours } = useMedicineListByHours()

  if (!Object.keys(medicineList).length)
    return (
      <p className="subtitle-M flex-center h-full text-center text-gray-6">
        복용 중인 약이 없어요!
      </p>
    )

  return (
    <main className="flex-column mt-8 w-full gap-6">
      {timeListByHours &&
        medicineList &&
        Object.keys(timeListByHours).map((time) => (
          <div key={time} className="flex-column">
            <p className="headline-R mb-3 text-gray-7">{time}</p>
            <ul className="flex-column gap-2">
              {timeListByHours[time].map((takenInfo) => (
                <MedicineItem
                  key={takenInfo.medicine_id}
                  medicine={medicineList[takenInfo.medicine_id]}
                  takenIndex={takenInfo.index}
                  isTaken={takenInfo.taken === 'TAKEN'}
                />
              ))}
            </ul>
          </div>
        ))}
    </main>
  )
}
