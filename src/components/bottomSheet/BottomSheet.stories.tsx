import { useState } from 'react'
import { type Meta } from '@storybook/react'
import { domMax, LazyMotion } from 'framer-motion'

import { BottomSheet } from './BottomSheet'

const meta: Meta<typeof BottomSheet> = {
  title: 'BottomSheet',
  component: BottomSheet,
}

export default meta

export function Default() {
  const [isShowing, setIsShowing] = useState(true)

  const toggleShowing = () => setIsShowing((prev) => !prev)

  return (
    <LazyMotion features={domMax}>
      <button
        className="rounded border border-blue-500 bg-transparent px-4 py-2 text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
        type="button"
        onClick={toggleShowing}
      >
        toggle
      </button>
      <BottomSheet handleClickScrim={toggleShowing} isShowing={isShowing}>
        bottom sheet content
      </BottomSheet>
    </LazyMotion>
  )
}
