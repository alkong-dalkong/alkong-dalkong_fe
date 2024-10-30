import type { Member } from './setting'

export type User = {
  ownerName: string
  name: string
  userId: string
  familyCode: string
  family?: Member[]
}
