import { useRouter } from 'next/navigation'

import { Icon } from '../icons'
import { Profile } from '../profile/Profile'

import type { HeaderProps } from './SubHeader'

const username = '가나다라' // 추후 useUserStore 로 변경 필요

export const Setting = ({ title, onClose }: HeaderProps) => {
  return (
    <header className="flex-column-between h-[182px] bg-mint-3 px-[20px] pb-[24px] pt-[20px]">
      <div className="flex-align w-full justify-end">
        <Profile name={username} size="sm" bgColor="#C5FDEC" onClickProfile={onClose?.[0]} />
      </div>
      <h1 className="title-B whitespace-pre text-black">{title}</h1>
    </header>
  )
}

export const Confirm = ({ title, onClose }: HeaderProps) => {
  return (
    <header className="flex-column-between h-[182px] bg-mint-3 px-[20px] pb-[24px] pt-[20px]">
      <div className="flex-between-align w-full">
        <button className="body-B text-mint-7" onClick={onClose?.[0]}>
          취소
        </button>
        <button className="body-B text-mint-9" onClick={onClose?.[1]}>
          완료
        </button>
      </div>
      <h1 className="title-B whitespace-pre text-black">{title}</h1>
    </header>
  )
}

export const BackAll = ({ title, onClose }: HeaderProps) => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }

  return (
    <header className="flex-column-between h-[182px] bg-mint-3 px-[20px] pb-[24px] pt-[20px]">
      <div className="flex-between-align w-full">
        <button className="body-B text-mint-7" onClick={handleBack}>
          <Icon name="arrow-left" />
        </button>
        <div className="flex-align gap-[16px]">
          <button type="button" onClick={onClose?.[0]} className="body-B text-mint-7">
            삭제
          </button>
          <button type="button" onClick={onClose?.[1]} className="body-B text-mint-9">
            완료
          </button>
        </div>
      </div>
      <h1 className="title-B whitespace-pre text-black">{title}</h1>
    </header>
  )
}

export const MainHeader = { Setting, Confirm, BackAll }
