import { useRouter } from 'next/navigation'

import { useDeleteMedicalInfo } from '@/hooks'

export const useDeleteInfoModal = (userId: string, medicalId: string) => {
  const router = useRouter()
  const { mutate: deleteMedicalInfo } = useDeleteMedicalInfo()

  const handleClickDelete = () => {
    deleteMedicalInfo(medicalId, { onSuccess: () => router.replace(`/clinic/${userId}`) })
  }

  return handleClickDelete
}
