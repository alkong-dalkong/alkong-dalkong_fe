import { create } from 'zustand'

interface Actions {
  setInitialToggleState: (init: boolean) => void
  changeToggleState: () => void
}

interface ToggleStore {
  isActive: boolean
  actions: Actions
}

export const useToggleStore = create<ToggleStore>((set) => ({
  isActive: false,
  actions: {
    setInitialToggleState: (init: boolean) => {
      set(() => ({ isActive: init }))
    },
    changeToggleState: () => {
      set((state) => ({ isActive: !state.isActive }))
    },
  },
}))

export const useToggleState = () => useToggleStore((state) => state.isActive)
export const useToggleActions = () => useToggleStore((state) => state.actions)
