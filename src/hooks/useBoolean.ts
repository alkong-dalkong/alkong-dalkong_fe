'use client'

import { useState } from 'react'

export const useBoolean = (initial: boolean): [boolean, () => void, () => void] => {
  const [state, setState] = useState<boolean>(initial)

  const setTrue = () => {
    setState(true)
  }

  const setFalse = () => {
    setState(false)
  }

  return [state, setTrue, setFalse]
}
