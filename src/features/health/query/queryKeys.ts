export const queryKeys = {
  all: ['health'] as const,
  page: (userId: string, period: string) => [...queryKeys.all, userId, period],
}
