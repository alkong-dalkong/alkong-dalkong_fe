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

export type DetailInfoResponse = {
  code: number
  data: ClinicFormType & { medicalId: number }
}

export type EditMedicalInfoRequest = Omit<CreateClinicInfoRequest, 'userId'>
export type EditMedicalInfoResponse = { code: number }

export type MedicalCalendarRequest = {
  userId: string
  localDate: string
}

export type MedicalCalendarResponse = {
  code: number
  data: ScheduleType[]
}
