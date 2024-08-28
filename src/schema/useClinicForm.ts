import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import type { ClinicFormType } from '@/types/clinic'

const schema = z.object({
  hospitalName: z.string().min(1, { message: '병원 이름을 입력해 주세요.' }),
  hospitalDate: z.string().min(1, { message: '날짜를 선택해 주세요.' }),
  medicalPart: z.array(z.string()).min(1, { message: '진료 과목을 1개 이상 선택해 주세요.' }),
  medicalMemo: z.string(),
  medicalAlarm: z.number(),
})

export const useClinicForm = (initialValues?: ClinicFormType) => {
  const defaultValue = {
    hospitalName: '',
    hospitalDate: '',
    medicalPart: [],
    medicalMemo: '',
    medicalAlarm: 0,
  }

  const defaultValues = initialValues ? initialValues : defaultValue

  const formMethod = useForm<ClinicFormType>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
    defaultValues,
  })

  return formMethod
}
