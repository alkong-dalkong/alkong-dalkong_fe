'use client'
import { useParams } from 'next/navigation'
import dayjs from 'dayjs'

import { ALARM_TIME } from '@/constants'
import { useEditClinicInfo } from '@/hooks'
import type { ClinicFormType } from '@/types'

/**
 * @description
 * 진료 페이지에서 사용자가 폼을 수정하고 "확인" 버튼을 클릭할 때 호출된다.
 *
 * 1. `medicalId`는 `useParams`로 가져온다.
 * 2. 폼의 `medicalAlarm`은 `ALARM_TIME` 배열에서 인덱스로 변환되며,
 *    `hospitalDate`는 'YYYY-MM-DD HH:mm:ss' 형식으로 포맷한다.
 * 3. 수정 요청이 성공하면, `toggleIsEdit` 함수가 호출되어 수정을 마친다.
 *
 * @param {VoidFunction} toggleIsEdit - 수정 상태를 토글하는 함수.
 * @returns {Function} 폼 데이터를 처리하는 `handleClickConfirm` 함수를 반환한다.
 */

export const useEditClinicFormMethod = (toggleIsEdit: VoidFunction) => {
  const { medicalId } = useParams<{ medicalId: string }>()
  const { mutate: editClinicInfo } = useEditClinicInfo(parseInt(medicalId))

  const handleClickConfirm = (formData: ClinicFormType) => {
    const { medicalAlarm, hospitalDate } = formData

    const formattedDate = dayjs(hospitalDate, 'YYYY년 M월 D일 dddd A hh:mm').format(
      'YYYY-MM-DD HH:mm:ss',
    )

    const sendingFormData = {
      ...formData,
      medicalAlarm: ALARM_TIME.indexOf(medicalAlarm),
      hospitalDate: formattedDate,
    }

    editClinicInfo({ medicalId, request: sendingFormData }, { onSuccess: toggleIsEdit })
  }

  return handleClickConfirm
}
