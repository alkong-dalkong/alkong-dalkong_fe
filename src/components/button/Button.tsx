'use client'

import type { PropsWithChildren } from 'react'

type ButtonProps = {
  onClick: () => void
  height?: string
  fontSize?: 'md' | 'sm'
  primary?: boolean
  disabled?: boolean
  submit?: boolean
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  height = 'h-[56px]',
  fontSize = 'md',
  primary = false,
  disabled = false,
  submit = false,
}) => {
  const color = primary ? 'bg-mint-6 text-white' : 'bg-gray-3 text-gray-7'
  const font = fontSize === 'md' ? 'subtitle-B' : 'headline-B'
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`flex-center rounded-[12px] ${color} ${height} w-full ${font}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
