'use client'

import { DashBoardTemplate } from '@/features'
import { useFetchHealth } from '@/hooks/apis/useHealth'

import { useHealthActions } from '../index'

import { GraphSection } from './GraphSection'
import { ReportSection } from './ReportSection'
import { WeightSection } from './WeightSection'

export const HealthClientPage = () => {
  const { data } = useFetchHealth()
  const { syncFetchHealthData } = useHealthActions()

  if (!data) {
    return (
      <DashBoardTemplate route="health">
        {/* 추후 수정 */}
        <div>데이터를 불러오는데 실패하였습니다</div>
      </DashBoardTemplate>
    )
  }

  syncFetchHealthData({ ...data })

  return (
    <DashBoardTemplate route="health">
      <GraphSection />
      <WeightSection />
      <ReportSection />
    </DashBoardTemplate>
  )
}
