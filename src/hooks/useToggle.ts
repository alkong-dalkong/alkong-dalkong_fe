import { useState } from 'react'

type ReturnType = [boolean, () => void]

export const useToggle = (init = false): ReturnType => {
  const [state, setState] = useState<boolean>(init)

  const toggle = () => {
    setState((prevState) => !prevState)
  }

  return [state, toggle]
}
