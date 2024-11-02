export const healthQueryKeys = {
  all: ['health'] as const,
  page: (userId: string, period: string) => [...healthQueryKeys.all, userId, period],
}
