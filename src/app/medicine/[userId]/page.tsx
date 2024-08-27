export type MedicineRouteParams = {
  params: { userId: string }
}

const Medicine = ({ params: { userId } }: MedicineRouteParams) => {
  return <h2>{userId}</h2>
}

export default Medicine
