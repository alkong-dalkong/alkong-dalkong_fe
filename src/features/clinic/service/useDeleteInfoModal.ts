import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'

import { useDeleteMedicalInfo } from '@/hooks'
import { useCurrentDate } from '@/store'

export const useDeleteInfoModal = (userId: string, medicalId: string) => {
  const router = useRouter()
  const currentDate = useCurrentDate()
  const localDate = dayjs(currentDate).format('YYYY-MM')
  const { mutate: deleteMedicalInfo } = useDeleteMedicalInfo(userId, localDate)

  const handleClickDelete = () => {
    deleteMedicalInfo(medicalId, { onSuccess: () => router.replace(`/clinic/${userId}`) })
  }

  return handleClickDelete
}
