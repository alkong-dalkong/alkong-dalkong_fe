'use client'

import { MedicineItem, useMedicineListByHours } from '@/features'

export const MedicineList = () => {
  const { medicineList, timeListByHours } = useMedicineListByHours()

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
