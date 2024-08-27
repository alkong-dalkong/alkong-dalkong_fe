'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { zIndex } from '@/constants'
import { useToggle } from '@/hooks'
import { useUserStore } from '@/store'

import type { iconMap } from '../icons'
import { Icon } from '../icons'
import { Profile } from '../profile/Profile'
import { ProfileModal } from '../profile/ProfileModal'

type NavItem = {
  text: string
  icon: keyof typeof iconMap
  path: string
}[]

export const BottomNav = () => {
  const pathname = usePathname()
  const { user } = useUserStore()

  const navItems: NavItem = [
    { text: '홈', icon: 'home', path: `/${user.userId}` },
    { text: '진료', icon: 'clinic', path: '/clinic' },
    { text: '건강', icon: 'health', path: '/health' },
    { text: '약', icon: 'medicine', path: '/medicine' },
  ]

  const [isShowing, toggleShowing] = useToggle(false)

  const profileTextStyle = isShowing ? 'caption-M text-mint-9' : 'caption-R text-gray-7'

  return (
    <nav className={`absolute bottom-0 w-screen ${zIndex.bottomNav}`}>
      <div className="flex-between items-end bg-white px-[26px] pb-[11px] pt-[4px] shadow-topShadow">
        {navItems.map(({ text, icon, path }, index) => {
          const selected = path === pathname && !isShowing

          const textStyle = selected ? 'caption-M text-mint-9' : 'caption-R text-gray-7'
          const bgColorStyle = selected ? '#13A076' : '#676A6B'

          return (
            <>
              <Link
                href={path}
                className={`flex-column-align gap-y-[6px] ${textStyle} cursor-pointer bg-white`}
              >
                <Icon name={icon} color={bgColorStyle} />
                {text}
              </Link>
              {index === MIDDLE_INDEX && (
                <div className={`relative w-[69px] cursor-pointer ${zIndex.fab}`}>
                  <div
                    className={`${profileTextStyle} flex-column-align absolute bottom-0 gap-y-[6px]`}
                  >
                    {/* profile floating action button */}
                    <div className="flex rounded-t-[50%] bg-white p-[8px] pb-0">
                      <Profile
                        name={user.username}
                        onClickProfile={toggleShowing}
                        bgColor={isShowing ? '#949698' : '#F5F6F8'}
                        textColor={isShowing ? 'text-gray-1' : 'text-gray-6'}
                      />
                      {isShowing && <ProfileModal />}
                    </div>
                    {user.username}
                  </div>
                </div>
              )}
            </>
          )
        })}
      </div>
      <div className="absolute bottom-[27px] left-1/2 z-[-1] size-[69px] -translate-x-1/2 rounded-[50%] bg-white shadow-topShadow"></div>
    </nav>
  )
}

const MIDDLE_INDEX = 1
