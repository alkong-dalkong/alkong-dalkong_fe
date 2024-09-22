export const medicineQueryKeys = {
  all: ['medicine'] as const,
  info: (userId: string) => [...medicineQueryKeys.all, 'info', userId] as const,
  detail: (userId: string) => [...medicineQueryKeys.all, 'detail', userId] as const,
  edit: (userId: string, medicineId: string) =>
    [...medicineQueryKeys.all, 'edit', userId, medicineId] as const,
}
