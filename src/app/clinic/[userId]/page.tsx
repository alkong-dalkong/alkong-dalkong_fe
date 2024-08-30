import { BottomNav } from '@/components'

export type ClinicRouteParams = {
  params: { userId: string }
}

const Clinic = ({ params: { userId } }: ClinicRouteParams) => {
  return (
    <div>
      <h2>{userId}</h2>
      <BottomNav />
    </div>
  )
}

export default Clinic
