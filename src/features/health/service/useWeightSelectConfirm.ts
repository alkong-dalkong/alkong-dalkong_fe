import dayjs from 'dayjs'

import { usePhysicalId, useWeightId } from '@/features'
import { useCreateHealth, useEditHealth } from '@/features'
import { useSelectedWeight } from '@/store'

export const useWeightSelectConfirm = (toggleShowing: VoidFunction) => {
  const weightId = useWeightId()
  const physicalId = usePhysicalId()
  const weight = Number(useSelectedWeight())
  const { mutate: editWeight } = useEditHealth()
  const { mutate: createWeight } = useCreateHealth()
  const createdAt = dayjs().format('YYYY-MM-DD')

  const handleConfirm = () => {
    if (weightId) {
      editWeight({
        weightId,
        request: {
          weight,
          createdAt,
        },
      })
    } else if (physicalId) {
      createWeight({
        physicalId,
        weight,
        createdAt,
      })
    }
    toggleShowing()
  }

  return handleConfirm
}
