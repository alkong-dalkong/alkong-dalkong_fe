import { useState } from 'react'

type UseToggleType = (init?: boolean) => [boolean, () => void]

export const useToggle: UseToggleType = (init = false) => {
  const [state, setState] = useState<boolean>(init)

  const toggle = () => {
    setState((prevState) => !prevState)
  }

  return [state, toggle]
}
