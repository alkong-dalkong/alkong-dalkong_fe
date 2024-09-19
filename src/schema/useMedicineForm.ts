import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { z } from 'zod'

import { EVERYDAY } from '@/constants'
import type { MedicineFormType } from '@/types'

const schema = z.object({
  medicineName: z.string().min(1, { message: '약품명을 입력해주세요.' }),
  medicineWeek: z.string().min(1, { message: '복용 요일을 선택해주세요.' }),
  medicineTimes: z.number().min(1, '복용 횟수는 1 이상이어야 합니다.'),
  medicineTakenTimeList: z.array(z.string()),
  medicinePeriod: z.string(),
  medicineDosage: z.string(),
  medicineMemo: z.string(),
  medicineAlarm: z.string(),
})

export const useMedicineForm = () => {
  const today = dayjs()

  const defaultValues = {
    medicineName: '',
    medicineWeek: EVERYDAY[today.day()],
    medicineTimes: 0,
    medicineTakenTimeList: [],
    medicinePeriod: today.format('M월 D일'),
    medicineDosage: '1회분',
    medicineMemo: '',
    medicineAlarm: '없음',
  }

  const formMethod = useForm<MedicineFormType>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues,
  })

  return formMethod
}
