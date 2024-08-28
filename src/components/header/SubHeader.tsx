import { useRouter } from 'next/router'

import { Icon } from '../icons'

export type HeaderProps = {
  title: string
  canBack?: boolean
  canClose?: boolean
  onClose?: VoidFunction[]
  btnStyle?: 'icon' | 'text' | 'mixed'
}

export const SubHeader = ({
  title,
  canBack,
  canClose,
  onClose,
  btnStyle = 'icon',
}: HeaderProps) => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }

  const isIcon = btnStyle === 'icon'

  return (
    <header className="flex-between-align relative">
      {
        <button
          type="button"
          onClick={isIcon ? handleBack : onClose?.[0]}
          className="body-B text-gray-6"
        >
          {canBack ? <Icon name="arrow-left" /> : !isIcon && '취소'}
        </button>
      }
      <h1 className="subtitle-B absolute left-1/2 -translate-x-1/2 text-black">{title}</h1>
      {canClose && (
        <button
          type="button"
          onClick={isIcon ? onClose?.[0] : onClose?.[1]}
          className="body-B text-black"
        >
          {isIcon ? <Icon name="close" /> : '완료'}
        </button>
      )}
    </header>
  )
}
