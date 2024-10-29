import { create } from 'zustand'

import type { GetPhysicalResponse, HealthReportType, WeightInfoType } from '@/types'

type PeriodType = 'weekly' | 'monthly'

type HealthState = {
  period: PeriodType
  physicalId?: number
  weightId?: number
  weight?: number
  weightInfo: WeightInfoType
  healthreport?: HealthReportType
  actions: HealthActions
}

type HealthActions = {
  togglePeriod: VoidFunction
  setPhysicalId: (physicalId: number) => void
  setWeightId: (weightId: number) => void
  setWeight: (weight: number) => void
  setWeightInfo: (info: WeightInfoType) => void
  setReport: (report: HealthReportType) => void
  syncFetchHealthData: (data: GetPhysicalResponse) => void
}

const useHealthStore = create<HealthState>((set, get) => ({
  period: 'weekly',
  physicalId: undefined,
  weightId: undefined,
  weight: undefined,
  weightInfo: [],
  healthreport: undefined,
  actions: {
    togglePeriod: () => {
      const { period } = get()
      set({ period: period === 'weekly' ? 'monthly' : 'weekly' })
    },
    setPhysicalId: (physicalId: number) => {
      set({ physicalId })
    },
    setWeightId: (weightId: number) => {
      set({ weightId })
    },
    setWeight: (weight: number) => {
      set({ weight })
    },
    setWeightInfo: (weightInfo: WeightInfoType) => {
      set({ weightInfo })
    },
    setReport: (healthreport: HealthReportType) => {
      set({ healthreport })
    },
    syncFetchHealthData: ({ data }: GetPhysicalResponse) => {
      set({
        physicalId: data.physicalId,
        weightId: data.weight?.weightId,
        weight: data.weight?.weight,
        weightInfo: data.weightInfo,
        healthreport: data.healthReport,
      })
    },
  },
}))

export const usePeriod = () => useHealthStore((state) => state.period)
export const usePhysicalId = () => useHealthStore((state) => state.physicalId)
export const useWeightId = () => useHealthStore((state) => state.weightId)
export const useWeight = () => useHealthStore((state) => state.weight)
export const useHealthReport = () => useHealthStore((state) => state.healthreport)
export const useWeightInfo = () => useHealthStore((state) => state.weightInfo)
export const useHealthActions = () => useHealthStore((state) => state.actions)
