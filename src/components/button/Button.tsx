'use client'

import type { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react'

type NativeButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
type ButtonProps = NativeButtonProps & {
  size?: 'md' | 'sm'
  primary?: boolean
}

export const Button = ({
  children,
  size = 'md',
  primary = true,
  disabled = false,
  type = 'button',
}: PropsWithChildren<ButtonProps>) => {
  const color = disabled
    ? 'bg-gray-5 text-white'
    : primary
      ? 'bg-mint-6 text-white'
      : 'bg-gray-3 text-gray-7'
  const buttonSize = size === 'md' ? 'subtitle-B h-[56px]' : 'headline-B h-[52px]'
  return (
    <button
      className={`flex-center rounded-[12px] ${color} w-full ${buttonSize}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
