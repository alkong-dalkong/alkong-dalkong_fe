export type MedicineFormType = {
  medicineName: string
  medicineWeek: string
  medicineTimes: number
  medicineTakenTimeList: string[]
  medicinePeriod: string
  medicineDosage: string
  medicineMemo: string
  medicineAlarm: string
}

export type CreateMedicineRequest = {
  medicineName: string
  medicineWeek: string[]
  medicineTimes: number
  medicineTakenTimeList: string[]
  medicineStart: string
  medicineEnd: string
  medicineDosage: number
  medicineTakenType: number
  medicineMemo: string
  medicineAlarm: number
}
