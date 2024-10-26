export const settingQueryKeys = {
  all: ['setting'] as const,
  userInfo: () => [...settingQueryKeys.all, 'userInfo'] as const,
  members: (familyCode: string) => [...settingQueryKeys.all, 'members', familyCode] as const,
  groups: () => [...settingQueryKeys.all, 'groups'] as const,
}
