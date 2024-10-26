import type { ModalProps } from './common'

export type UserInfoFormType = {
  name: string
  phoneNumber: string
  birth: string
  gender: 'MAN' | 'WOMAN'
}

export type ReadUserInfoResponse = UserInfoFormType

export type EditUserInfoRequest = UserInfoFormType

export type PasswordFormType = {
  newPassword: string
  confirm: string
  password: string
}

export type EditPasswordRequest = Omit<PasswordFormType, 'confirm'>

export type FamilyCodeForm = {
  familyCode: string
}

export type createFamilyGroupResponse = FamilyCodeForm & {
  familyName: string
}

export type enterFamilyGroupRequest = FamilyCodeForm

export type Member = {
  userId: string
  name: string
}

export type Family = {
  familyName: string
  members: Member[]
}

export type ReadFamilyMembersResponse = Family

export type FamilyGroup = Family & {
  familyCode: string
}

export type ReadFamilyGroupsResponse = {
  families: FamilyGroup[]
}

export type CodeModalProps = ModalProps & {
  title: string
  description?: string
  code: string
}

export type InviteModalProps = ModalProps & {
  onConfirm: VoidFunction
  inviter: string
}
