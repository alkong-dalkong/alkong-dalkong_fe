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

export type MedicineDateDtoType = {
  medicineId: number
  medicineRecordId: number
  medicineName: string
  medicineDosage: number
  medicineTakenType: string
}

export type MedicineTakenInfoType = {
  [key: string]: {
    medicine_id: number
    taken: string
    index: number
  }[]
}

export type MedicineInfoResponse = {
  code: number
  data: {
    medicineDateDtoList: MedicineDateDtoType[]
    medicineTakenInfo: MedicineTakenInfoType
  }
}
