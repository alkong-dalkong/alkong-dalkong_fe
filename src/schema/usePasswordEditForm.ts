import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import type { PasswordFormType } from '@/types/setting'

const schema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: '비밀번호는 8글자 이상입니다.' })
      .max(16, { message: '비밀번호는 16글자 이하입니다.' })
      .regex(/^(?=.*[a-zA-Z])(?=.*\d).+$/, {
        message: '영문자와 숫자를 모두 포함해야 합니다.',
      }),
    confirm: z.string(),
    password: z.string().min(1, { message: '현재 비밀번호를 입력해주세요.' }),
  })
  .partial()
  .refine((formData) => formData.newPassword === formData.confirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirm'],
  })

export const usePasswordEditForm = () => {
  const formMethod = useForm<PasswordFormType>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  return formMethod
}
