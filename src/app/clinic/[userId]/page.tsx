import { ClinicClientPage } from '@/features/clinic'

export type HomeRouteParams = {
  params: { userId: string }
}

const Clinic = ({ params: { userId } }: HomeRouteParams) => {
  return (
    <>
      <ClinicClientPage userId={userId} />
    </>
  )
}

export default Clinic
