export const medicineQueryKeys = {
  all: ['medicine'] as const,
  info: (userId: string) => [...medicineQueryKeys.all, 'info', userId] as const,
}
