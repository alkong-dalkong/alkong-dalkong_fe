'use client'
import { useFormContext } from 'react-hook-form'

type InputProps = {
  type?: string
  section: string
  readOnly?: boolean
  placeholder: string
}

type TextAreaProps = Omit<InputProps, 'type'>

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

export const TextArea = ({ section, readOnly = false, placeholder }: TextAreaProps) => {
  const { register } = useFormContext()
  return (
    <textarea
      {...register(section)}
      readOnly={readOnly}
      className="subtitle-M placeholder:subtitle-R h-[116px] resize-none rounded-xl border border-mint-3 px-6  py-4 placeholder:text-gray-7 focus:outline-none"
      placeholder={placeholder}
    />
  )
}

export const InputGender = () => {
  const { register } = useFormContext()
  const genders = [
    { id: 'MAN', label: '남성' },
    { id: 'WOMAN', label: '여성' },
  ]

  return (
    <div className="flex gap-[15px]">
      {genders.map(({ id, label }) => (
        <div className="flex-1 " key={id}>
          <input type="radio" id={id} value={id} {...register('gender')} className="peer hidden" />
          <label
            htmlFor={id}
            className="headline-M peer-checked:headline-B block w-full cursor-pointer rounded-xl border border-mint-5 py-3 text-center text-mint-4 peer-checked:border-none peer-checked:bg-mint-4 peer-checked:text-white"
          >
            {label}
          </label>
        </div>
      ))}
    </div>
  )
}
