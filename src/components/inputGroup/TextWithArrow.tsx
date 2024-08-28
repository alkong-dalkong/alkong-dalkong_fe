import { useFormContext } from 'react-hook-form'

import { Icon } from '../icons'

type TextWithArrowProps = {
  isLong?: boolean
  section: string
  onClick: () => void
}

export const TextWithArrow = ({ isLong = false, section, onClick }: TextWithArrowProps) => {
  const { register } = useFormContext()
  const layoutStyle = isLong ? 'flex-between-align' : 'flex-align gap-1'
  const fontStyle = isLong ? 'body-M text-gray-6' : 'text-right headline-M text-gray-7'

  return (
    <div className={layoutStyle}>
      <input
        className={`max-w-[180px] ${fontStyle} disabled:bg-transparent`}
        {...register(section)}
        disabled
      />
      <button type="button" onClick={onClick}>
        <Icon size={28} name="arrow-right" />
      </button>
    </div>
  )
}
