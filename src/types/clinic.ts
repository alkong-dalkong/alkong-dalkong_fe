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

export type ClinicBottomSheetType = {
  section: string
  isShowing: boolean
  onClickScrim: VoidFunction
}

export type CreateClinicInfoRequest = Omit<ClinicFormType, 'medicalAlarm'> & {
  userId: number
  medicalAlarm: number
}

export type CreateClinicInfoResponse = {
  code: number
  medicalId: number
}
