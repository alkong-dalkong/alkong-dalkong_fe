'use client'
import type { MouseEventHandler } from 'react'

import { Icon } from '../icons'

type ProfileProps = ProfileVariantProps & {
  onClickProfile?: VoidFunction
  name: string
}

type ProfileVariantProps = {
  bgColor?: string
  textColor?: string
  size?: 'small' | 'medium' | 'large'
}

export const Profile = ({ onClickProfile, name, ...styleProps }: ProfileProps) => {
  const { bgColor, textColor = 'text-gray-6', size = 'medium' } = styleProps

  const displayName = name.slice(0, 2)

  const handleClickProfile: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (e.target !== e.currentTarget) return
    if (onClickProfile) onClickProfile()
  }

  return (
    <button className="relative" onClick={handleClickProfile}>
      <Icon name="ellipse" color={bgColor} size={profileVariant[size].size} />
      <span
        className={`absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 ${textColor} ${profileVariant[size].typo}`}
      >
        {displayName}
      </span>
    </button>
  )
}

const profileVariant = {
  small: {
    typo: 'caption-R',
    size: 32,
  },
  medium: {
    typo: 'body-R',
    size: 53,
  },
  large: { typo: 'body-M', size: 64 },
}
