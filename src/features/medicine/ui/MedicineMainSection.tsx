'use client'

import { useMedicineInfo } from '../query/useMedicineApi'

export const MedicineMainSection = () => {
  const { data } = useMedicineInfo()
  console.log(data)
  return <div>MedicineMainSection</div>
}
