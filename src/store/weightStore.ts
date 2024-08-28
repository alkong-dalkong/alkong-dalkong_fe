import { create } from 'zustand'

type Actions = {
  handleTensWeightChange: (newTens: number) => void
  handleOnesWeightChange: (newOnes: number) => void
  handleDecimalWeightChange: (newDecimal: number) => void
}

type SelectedWeightStore = {
  weight: number
  actions: Actions
}

const initialSelectedWeight = 0.0

export const useSelectedWeightStore = create<SelectedWeightStore>((set) => ({
  weight: initialSelectedWeight,
  actions: {
    handleTensWeightChange: (newTens) =>
      set((state) => {
        const currentIntegerPart = Math.floor(state.weight)
        const newWeight = newTens * 10 + (currentIntegerPart % 10) + (state.weight % 1)
        return { weight: parseFloat(newWeight.toFixed(1)) }
      }),
    handleOnesWeightChange: (newOnes) =>
      set((state) => {
        const currentIntegerPart = Math.floor(state.weight)
        const newWeight = Math.floor(currentIntegerPart / 10) * 10 + newOnes + (state.weight % 1)
        return { weight: parseFloat(newWeight.toFixed(1)) }
      }),
    handleDecimalWeightChange: (newDecimal) =>
      set((state) => {
        const newWeight = Math.floor(state.weight) + newDecimal / 10
        return { weight: parseFloat(newWeight.toFixed(1)) }
      }),
  },
}))

export const useSelectedWeight = () => useSelectedWeightStore((state) => state.weight)
export const useSelectedWeightActions = () => useSelectedWeightStore((state) => state.actions)
