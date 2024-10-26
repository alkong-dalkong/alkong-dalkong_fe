import { useState } from 'react'

import { useToggle } from '@/hooks'
import type { CustomBottomSheetProps } from '@/types'

type OptionType = Record<string, (props: CustomBottomSheetProps) => JSX.Element>

export const useBottomSheet = (bottomSheets: OptionType) => {
  const [option, setOption] = useState<keyof typeof bottomSheets | null>(null)
  const [isShowing, toggleShowing] = useToggle(false)

  const BottomSheet = () => {
    if (!option) return null

    const BottomSheet = bottomSheets[option]
    return <BottomSheet isShowing={isShowing} onClickScrim={toggleShowing} />
  }

  const handleClickOption = (option: keyof typeof bottomSheets) => {
    setOption(option)
    toggleShowing()
  }

  return [BottomSheet, handleClickOption] as const
}
