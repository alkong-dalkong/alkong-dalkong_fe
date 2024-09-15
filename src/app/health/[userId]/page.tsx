import { HealthPage } from '@/features'

export type HealthRouteParams = {
  params: { userId: string }
}

const Health = ({ params: { userId } }: HealthRouteParams) => {
  return <HealthPage userId={userId} />
}

export default Health
