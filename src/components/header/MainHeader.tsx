import { useRouter } from 'next/router'

import { Icon } from '../icons'
import { Profile, Profile } from '../profile/Profile'

import type { HeaderProps } from './SubHeader'

export const MainHeader = ({
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

  const username = '가나다라' // 추후 useUserStore 로 변경 필요

  const isIcon = btnStyle === 'icon'
  const isMixed = btnStyle === 'mixed'

  return (
    <header className="flex-column-between h-[182px] bg-mint-3 px-[20px] pb-[24px] pt-[20px]">
      <div className="flex-between-align w-full">
        {
          <button
            type="button"
            onClick={isIcon || isMixed ? handleBack : onClose?.[0]}
            className="body-B text-mint-7"
          >
            {canBack ? <Icon name="arrow-left" /> : !isIcon && '취소'}
          </button>
        }
        {canClose && !isMixed ? (
          <button
            type="button"
            onClick={isIcon ? onClose?.[0] : onClose?.[1]}
            className="body-B text-mint-9"
          >
            {isIcon ? <Profile name={username} size="sm" bgColor="#C5FDEC" /> : '완료'}
          </button>
        ) : (
          <div className="flex-align gap-[16px]">
            <button type="button" onClick={onClose?.[0]} className="body-B text-mint-7">
              삭제
            </button>
            <button type="button" onClick={onClose?.[1]} className="body-B text-mint-9">
              완료
            </button>
          </div>
        )}
      </div>
      <h1 className="title-B whitespace-pre text-black">{title}</h1>
    </header>
  )
}
