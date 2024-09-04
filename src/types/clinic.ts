export type ClinicFormType = {
  hospitalName: string
  hospitalDate: string
  medicalPart: string[]
  medicalMemo: string
  medicalAlarm: string
}

export type ScheduleType = {
  medicalId: number
  hospitalName: string
  hospitalDate: string
  medicalPart: string[]
}

export type ClinicResponse = {
  list: ScheduleType[]
}
