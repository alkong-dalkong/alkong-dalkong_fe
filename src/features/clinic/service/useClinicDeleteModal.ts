'use client'
import { useParams, useRouter } from 'next/navigation'

import { useDeleteClinicInfo } from '@/hooks'

/**
 * @description
 * 사용자가 삭제 버튼을 클릭할 때 호출한다.
 *
 * 1. 진료 정보 삭제 요청을 보낸다.
 * 2. 삭제에 성공한다면 진료 정보 페이지로 이동한다.
 *
 * @returns {VoidFunction} 클릭 시 삭제 요청을 보내는 `handleClickDelete` 함수를 반환한다.
 */

export const useClinicDeleteModal = () => {
  const router = useRouter()
  const { userId, medicalId } = useParams<{ userId: string; medicalId: string }>()
  const { mutate: deleteClinicInfo } = useDeleteClinicInfo()

  const handleClickDelete = () => {
    deleteClinicInfo(medicalId, { onSuccess: () => router.replace(`/clinic/${userId}`) })
  }

  return handleClickDelete
}
