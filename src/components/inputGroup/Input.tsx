'use client'
import { useFormContext } from 'react-hook-form'

type InputProps = {
  type?: string
  section: string
  readOnly?: boolean
  placeholder: string
}

export const Input = ({ type = 'text', section, readOnly = false, placeholder }: InputProps) => {
  const { register } = useFormContext()

  return (
    <input
      type={type}
      {...register(section)}
      readOnly={readOnly}
      className="subtitle-M placeholder:subtitle-R w-full rounded-xl border border-mint-3 px-6 py-4 placeholder:text-gray-7 focus:outline-none"
      placeholder={placeholder}
    />
  )
}
