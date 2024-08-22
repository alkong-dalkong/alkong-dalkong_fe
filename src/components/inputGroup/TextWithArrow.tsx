'use client'
import { useFormContext } from 'react-hook-form'

import { Icon } from '../icons'

type TextWithArrowProps = {
  isLong?: boolean
  section: string
  onClick: () => void
}

/**
 * @todo Icon 컴포넌트 수정사항에 따른 버튼 수정
 */

export const TextWithArrow = ({ isLong = false, section, onClick }: TextWithArrowProps) => {
  const { register } = useFormContext()
  const layoutStyle = isLong ? 'flex-between-align' : 'flex-align gap-1'
  const fontStyle = isLong ? 'body-M text-gray-6' : 'text-right headline-M text-gray-7'

  return (
    <div className={layoutStyle}>
      <input className={`max-w-[180px] ${fontStyle}`} {...register(section)} />
      <button type="button" onClick={onClick}>
        <Icon size={28} name="arrow-right" />
      </button>
    </div>
  )
}
