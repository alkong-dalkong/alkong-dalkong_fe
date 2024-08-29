import { useRouter } from 'next/router'

import { Icon } from '../icons'

export type HeaderProps = {
  title: string
  onClose?: VoidFunction[]
}

export const Back = ({ title }: HeaderProps) => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }

  return (
    <header className="flex-between-align relative">
      <button onClick={handleBack}>
        <Icon name="arrow-left" />
      </button>
      <h1 className="subtitle-B absolute left-1/2 -translate-x-1/2 text-black">{title}</h1>
    </header>
  )
}

export const Confirm = ({ title, onClose }: HeaderProps) => {
  return (
    <header className="flex-between-align relative">
      <button className="body-B text-gray-6" onClick={onClose?.[0]}>
        취소
      </button>
      <h1 className="subtitle-B absolute left-1/2 -translate-x-1/2 text-black">{title}</h1>
      <button className="body-B text-black" onClick={onClose?.[1]}>
        완료
      </button>
    </header>
  )
}

export const Close = ({ title, onClose }: HeaderProps) => {
  return (
    <header className="flex-align relative justify-end">
      <h1 className="subtitle-B absolute left-1/2 -translate-x-1/2 text-black">{title}</h1>
      <button onClick={onClose?.[0]}>
        <Icon name="close" />
      </button>
    </header>
  )
}

export const SubHeader = { Back, Confirm, Close }
