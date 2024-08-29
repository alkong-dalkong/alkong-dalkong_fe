export type AccountEditFormType = {
  name: string
  phoneNumber: string
  birth: string
  gender: 'MAN' | 'WOMAN'
}

export type PasswordEditFormType = {
  password: string
  confirm: string
  newPassword: string
}
