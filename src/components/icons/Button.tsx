import type { IconProps } from '.'

export const NextBtn = (props: IconProps) => {
  const { color = '#13A076', size = 39 } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 39 39"
      fill="none"
    >
      <rect width={size} height={size} rx="19.5" fill={color} />
      <rect width={size} height={size} rx="11" fill={color} />
      <path d="M30 19.5L14.25 28.5933L14.25 10.4067L30 19.5Z" fill="white" />
    </svg>
  )
}
