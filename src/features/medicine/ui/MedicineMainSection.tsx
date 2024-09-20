'use client'

import { Label } from '@/components'
import { MedicineListByHours, useMedicineListByHours } from '@/features'

export const MedicineMainSection = () => {
  const { medicineList, timeListByHours } = useMedicineListByHours()

  return (
    <main className="w-full">
      <div className="flex-between-align">
        <Label icon="medicine-label">오늘 드셔야 할 약</Label>
        <div className="flex-align gap-3 text-gray-7">
          <button>추가</button>
          <div className="h-3 w-px bg-gray-7" />
          <button>수정</button>
        </div>
      </div>

      <section className="flex-column mt-8 w-full gap-6">
        {timeListByHours &&
          medicineList &&
          Object.keys(timeListByHours).map((time) => (
            <MedicineListByHours
              key={time}
              time={time}
              medicines={timeListByHours[time]}
              medicineList={medicineList}
            />
          ))}
      </section>
    </main>
  )
}
