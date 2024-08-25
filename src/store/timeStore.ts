import { create } from 'zustand'

type Actions = {
  handleHourChange: (newHour: number) => void
  handleMinuteChange: (newMinute: number) => void
}

type SelectedTimeStore = {
  selectedTime: string
  actions: Actions
}

const initialSelectedTime = '00:00:00'

export const useSelectedTimeStore = create<SelectedTimeStore>((set) => ({
  selectedTime: initialSelectedTime,
  actions: {
    handleHourChange: (newHour) =>
      set((state) => {
        const [_, minutes, seconds] = state.selectedTime.split(':')
        const formattedHour = newHour.toString().padStart(2, '0')
        return {
          selectedTime: `${formattedHour}:${minutes}:${seconds}`,
        }
      }),
    handleMinuteChange: (newMinute) =>
      set((state) => {
        const [hours, _, seconds] = state.selectedTime.split(':')
        const formattedMinute = newMinute.toString().padStart(2, '0')
        return {
          selectedTime: `${hours}:${formattedMinute}:${seconds}`,
        }
      }),
  },
}))

export const useSelectedTime = () => useSelectedTimeStore((state) => state.selectedTime)
export const useSelectedTimeActions = () => useSelectedTimeStore((state) => state.actions)
