import { create } from 'zustand'

interface Actions {
  setInitialState: (init: boolean) => void
  changeIsActive: () => void
}

interface ToggleStore {
  isActive: boolean
  actions: Actions
}

export const useToggleStore = create<ToggleStore>((set) => ({
  isActive: false,
  actions: {
    setInitialState: (init: boolean) => {
      set(() => ({ isActive: init }))
    },
    changeIsActive: () => {
      set((state) => ({ isActive: !state.isActive }))
    },
  },
}))

export const useToggleState = () => useToggleStore((state) => state.isActive)
export const useToggleActions = () => useToggleStore((state) => state.actions)
