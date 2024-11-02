export const clinicQueryKeys = {
  all: ['clinic'] as const,
  detail: (medicalId: number) => [...clinicQueryKeys.all, 'detail', medicalId] as const,
  calendar: (userId: string, localDate: string) =>
    [...clinicQueryKeys.all, 'calendar', userId, localDate] as const,
}
