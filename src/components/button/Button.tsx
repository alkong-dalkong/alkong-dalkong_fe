'use client'

import type { PropsWithChildren } from 'react'

type NativeButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
type ButtonProps = NativeButtonProps & {
  size?: 'md' | 'sm'
  primary?: boolean
  disabled?: boolean
}

export const Button = ({
  children,
  size = 'md',
  primary = true,
  disabled = false,
  ...nativeButtonProps
}: PropsWithChildren<ButtonProps>) => {
  const color = !disabled && primary ? 'bg-mint-6 text-white' : 'bg-gray-3 text-gray-7'
  const buttonSize = size === 'md' ? 'subtitle-B h-[56px]' : 'headline-B h-[52px]'
  return (
    <button
      className={`flex-center rounded-[12px] ${color} w-full ${buttonSize}`}
      disabled={disabled}
      {...nativeButtonProps}
    >
      {children}
    </button>
  )
}
