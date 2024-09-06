export type AuthToken = {
  accessToken: string
  refreshToken?: string
}

export type LoginFormType = {
  id: string
  password: string
}

export type SignInRequest = LoginFormType

export type SignInResponse = AuthToken & {
  userId: string
  id: string
  name: string
  familyCode: string
}

export type SignupFormType = {
  name: string
  id: string
  password: string
  birth: string
  phoneNumber: string
  gender: 'MAN' | 'WOMAN'
  confirm: boolean
  personal: boolean
  notification: boolean
}

export type SignUpRequest = Omit<SignupFormType, 'confirm' | 'personal' | 'notification'> & {
  agree: boolean // 추후 변경(필수, 선택) 요청 필요
}
