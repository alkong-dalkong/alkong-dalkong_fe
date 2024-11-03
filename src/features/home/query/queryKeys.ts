export const homeQueryKeys = {
  all: ['home'] as const,
  user: (userId: string) => [...homeQueryKeys.all, userId],
}
