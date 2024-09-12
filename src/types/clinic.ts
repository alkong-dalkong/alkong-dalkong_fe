export type ClinicFormType = {
  hospitalName: string
  hospitalDate: string
  medicalPart: string[]
  medicalMemo: string
  medicalAlarm: string
}

export type ClinicFormApiType = Omit<ClinicFormType, 'medicalAlarm'> & { medicalAlarm: number }

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

export type CreateClinicInfoRequest = ClinicFormApiType & { userId: number }

export type CreateClinicInfoResponse = {
  code: number
  medicalId: number
}

export type ClinicInfoResponse = {
  code: number
  data: ClinicFormApiType & { medicalId: number }
}

export type EditClinicInfoRequest = ClinicFormApiType
export type EditClinicInfoResponse = { code: number }

export type ClinicCalendarRequest = {
  userId: string
  localDate: string
}

export type ClinicCalendarResponse = {
  code: number
  data: ScheduleType[]
}
