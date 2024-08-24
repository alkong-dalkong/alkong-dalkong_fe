import { create } from 'zustand'

interface Actions {
  handleTensWeightChange: (selected: number) => void
  handleOnesWeightChange: (selected: number) => void
  handleDecimalWeightChange: (selected: number) => void
}

interface WeightStore {
  weight: number
  actions: Actions
}

const initialWeight = 0.0

export const useWeightStore = create<WeightStore>((set) => ({
  weight: initialWeight,
  actions: {
    handleTensWeightChange: (selected) =>
      set((state) => {
        const currentIntegerPart = Math.floor(state.weight)
        const newWeight = selected * 10 + (currentIntegerPart % 10) + (state.weight % 1)
        return { weight: parseFloat(newWeight.toFixed(1)) }
      }),
    handleOnesWeightChange: (selected) =>
      set((state) => {
        const currentIntegerPart = Math.floor(state.weight)
        const newWeight = Math.floor(currentIntegerPart / 10) * 10 + selected + (state.weight % 1)
        return { weight: parseFloat(newWeight.toFixed(1)) }
      }),
    handleDecimalWeightChange: (selected) =>
      set((state) => {
        const newWeight = Math.floor(state.weight) + selected / 10
        return { weight: parseFloat(newWeight.toFixed(1)) }
      }),
  },
}))

export const useWeight = () => useWeightStore((state) => state.weight)
export const useWeightActions = () => useWeightStore((state) => state.actions)
