import { useState } from 'react'

type UseModalType = [boolean, () => void, () => void]

const useModal = (initialState: boolean): UseModalType => {
  const [state, setState] = useState<boolean>(initialState)

  // [ modal, openModal, closeModal ]
  return [state, () => setState(true), () => setState(false)]
}

export { useModal }
