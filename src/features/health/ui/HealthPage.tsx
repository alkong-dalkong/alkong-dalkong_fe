'use client'

import { GRAPHTYPE } from '@/constants'
import { DashBoardTemplate } from '@/features'
import { useToggle } from '@/hooks'
import { useFetchHealth } from '@/hooks/apis/useHealth'

import { GraphSection } from './GraphSection'
import { ReportSection } from './ReportSection'
import { WeightSection } from './WeightSection'

export const HealthPage = ({ userId }: { userId: string }) => {
  const [graphType, toggleGraphType] = useToggle(true)
  const { data: healthPageData } = useFetchHealth({ userId, period: GRAPHTYPE[`${graphType}`].en })

  if (!healthPageData) {
    return (
      <DashBoardTemplate route="health">
        {/* 추후 수정 */}
        <div>데이터를 불러오는데 실패하였습니다</div>
      </DashBoardTemplate>
    )
  }

  const { physicalId, weight, weightInfo, healthReport } = healthPageData.data

  return (
    <DashBoardTemplate route="health">
      <GraphSection type={graphType} toggle={toggleGraphType} info={weightInfo} />
      <WeightSection physicalId={physicalId} weight={weight} />
      <ReportSection report={healthReport} />
    </DashBoardTemplate>
  )
}
