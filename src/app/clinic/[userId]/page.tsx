export type ClinicRouteParams = {
  params: { userId: string }
}

const Clinic = ({ params: { userId } }: ClinicRouteParams) => {
  return <h2>{userId}</h2>
}

export default Clinic
