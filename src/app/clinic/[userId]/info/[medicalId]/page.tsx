import { ClinicInfoClientPage } from '@/features'

export type ClinicInfoRouteParams = {
  params: { userId: string; medicalId: string }
}

const ClinicInfo = ({ params: { userId, medicalId } }: ClinicInfoRouteParams) => {
  return (
    <>
      <ClinicInfoClientPage userId={userId} medicalId={medicalId} />
    </>
  )
}

export default ClinicInfo
