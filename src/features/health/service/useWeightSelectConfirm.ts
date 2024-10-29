import dayjs from 'dayjs'

import { useCreateHealth, useEditHealth } from '@/hooks'
import { useSelectedWeight } from '@/store'

import { usePhysicalId, useWeightId } from '../store/healthStore'

export const useWeightSelectConfirm = (toggleShowing: VoidFunction) => {
  const weightId = useWeightId()
  const physicalId = usePhysicalId()
  const userWeight = useSelectedWeight()
  const { mutate: editWeight } = useEditHealth()
  const { mutate: createWeight } = useCreateHealth()

  const handleConfirm = () => {
    if (weightId) {
      editWeight({
        weightId,
        request: {
          weight: Number(userWeight),
          createdAt: dayjs().format('YYYY-MM-DD'),
        },
      })
    } else if (physicalId) {
      createWeight({
        physicalId,
        weight: Number(userWeight),
        createdAt: dayjs().format('YYYY-MM-DD'),
      })
    }
    toggleShowing()
  }

  return handleConfirm
}
