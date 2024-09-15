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

  const DUMMY = {
    code: 200,
    period: 'weekly',
    data: {
      physicalId: 2,
      weight: {
        weight: 56.2,
        weightId: 12,
      },
      weightInfo: [
        { avgWeight: 54.5, avgDate: '2024-09-W1' },
        { avgWeight: 54.8, avgDate: '2024-09-W2' },
        { avgWeight: 55.0, avgDate: '2024-09-W3' },
        { avgWeight: 54.7, avgDate: '2024-09-W4' },
        { avgWeight: 55.2, avgDate: '2024-10-W1' },
        { avgWeight: 55.5, avgDate: '2024-10-W2' },
        { avgWeight: 55.3, avgDate: '2024-10-W3' },
        { avgWeight: 55.1, avgDate: '2024-10-W4' },
        { avgWeight: 55.2, avgDate: '2024-11-W1' },
      ],
      healthReport: {
        apiAvgWeight: 60,
        diffWeight: 3.2,
        lastweekWeight: 0.3,
      },
    },
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
