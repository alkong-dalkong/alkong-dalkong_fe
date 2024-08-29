export type HealthRouteParams = {
  params: { userId: string }
}

const Health = ({ params: { userId } }: HealthRouteParams) => {
  return <h2>{userId}</h2>
}

export default Health
