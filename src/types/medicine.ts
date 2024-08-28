export type MedicineFormType = {
  medicineName: string
  medicineWeek: string[]
  medicineTimes: number
  medicineTakenTime: string[]
  medicineEndDate: string
  medicineDosage: number
  medicineTakenType: 'DOSE' | 'TABLET'
  medicineMemo: string
  medicineAlarm: number
}
