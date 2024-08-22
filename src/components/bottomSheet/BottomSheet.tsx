import { type ComponentProps, type MouseEventHandler } from 'react'
import { m, type Variants } from 'framer-motion'

import { Icon } from '../icons'
import { AnimatePortal } from '../portal/AnimatePortal'

type BottomSheetProps = ComponentProps<typeof AnimatePortal> & {
  handleClickScrim?: VoidFunction
  isShort?: boolean
}

export const BottomSheet = ({
  handleClickScrim,
  isShort = false,
  isShowing,
  children,
  mode,
}: BottomSheetProps) => {
  const onClickOutsideDefault: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== e.currentTarget) return
    if (handleClickScrim) handleClickScrim()
  }

  const heightStyle = isShort ? 'h-[calc(100vh-252px)]' : 'h-[calc(100vh-55px)]'

  return (
    <AnimatePortal isShowing={isShowing} mode={mode}>
      <m.div
        className="fixed inset-0 z-[1000] h-full w-screen overflow-hidden bg-[rgba(15,23,42,0.5)]"
        onClick={onClickOutsideDefault}
        variants={bottomSheetFadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <m.div
          className={`flex-column-align ${heightStyle} absolute left-0 top-full z-[1001] w-full rounded-t-3xl bg-white px-[20px]`}
          variants={bottomSheetVariants}
        >
          <div className="pb-[17px] pt-[8px]">
            <Icon name="handle-bar" />
          </div>
          {children}
        </m.div>
      </m.div>
    </AnimatePortal>
  )
}

const easing = [0.6, -0.05, 0.01, 0.99]

const bottomSheetFadeInVariants: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: easing },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: easing },
    willChange: 'opacity',
  },
}

const bottomSheetVariants: Variants = {
  initial: {
    y: 0,
    transition: { duration: 0.3, ease: easing },
    willChange: 'transform',
  },
  animate: {
    y: '-100%',
    transition: { duration: 0.3, ease: easing },
    willChange: 'transform',
  },
  exit: {
    y: 0,
    transition: { duration: 0.3, ease: easing },
    willChange: 'transform',
  },
}
