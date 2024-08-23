'use client'

import type { PropsWithChildren } from 'react'

type ButtonProps = {
  height?: string
  fontSize?: 'md' | 'sm'
  primary?: boolean
  onClick: () => void
  disabled?: boolean
  submit?: boolean
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  height = 'h-[56px]',
  fontSize = 'md',
  onClick,
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
