export type LoginFormType = {
  id: string
  password: string
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
