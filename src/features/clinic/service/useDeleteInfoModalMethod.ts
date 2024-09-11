import { useParams, useRouter } from 'next/navigation'

import { useDeleteMedicalInfo } from '@/hooks'
import { useUserStore } from '@/store'

export const useDeleteInfoModalMethod = () => {
  const router = useRouter()
  const { user } = useUserStore()
  const { medicalId } = useParams<{ medicalId: string }>()
  const { mutate: deleteMedicalInfo } = useDeleteMedicalInfo()

  const handleClickDelete = () => {
    deleteMedicalInfo(medicalId, { onSuccess: () => router.replace(`/clinic/${user.userId}`) })
  }

  return handleClickDelete
}
