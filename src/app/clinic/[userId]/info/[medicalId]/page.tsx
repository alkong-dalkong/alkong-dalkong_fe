import { ClinicInfoClientPage } from '@/features'

export type ClinicInfoRouteParams = {
  params: { medicalId: string }
}

const ClinicInfo = ({ params: { medicalId } }: ClinicInfoRouteParams) => {
  return (
    <>
      <ClinicInfoClientPage medicalId={medicalId} />
    </>
  )
}

export default ClinicInfo
