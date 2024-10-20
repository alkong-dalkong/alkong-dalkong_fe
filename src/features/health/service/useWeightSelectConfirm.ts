import dayjs from 'dayjs'

import { useCreateHealth, useEditHealth } from '@/hooks'
import { useSelectedWeight } from '@/store'
import type { WeightType } from '@/types'

type UseWeightSelectConfirm = {
  weight: WeightType | undefined
  physicalId: number
  toggleShowing: VoidFunction
}

export const useWeightSelectConfirm = ({
  weight,
  physicalId,
  toggleShowing,
}: UseWeightSelectConfirm) => {
  const userWeight = useSelectedWeight()
  const { mutate: editWeight } = useEditHealth()
  const { mutate: createWeight } = useCreateHealth()

  const handleConfirm = () => {
    if (weight) {
      editWeight({
        weightId: weight.weightId,
        request: {
          weight: Number(userWeight),
          createdAt: dayjs().format('YYYY-MM-DD'),
        },
      })
    } else {
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
