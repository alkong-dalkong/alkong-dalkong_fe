'use client'

import { GRAPHTYPE } from '@/constants'
import { DashBoardTemplate, GraphSection, ReportSection, WeightSection } from '@/features'
import { useToggle } from '@/hooks'
import { useFetchHealth } from '@/hooks/apis/useHealth'

export type HealthRouteParams = {
  params: { userId: string }
}

const HealthPage = ({ params: { userId } }: HealthRouteParams) => {
  const [graphType, toggleGraphType] = useToggle(true)
  const { data: healthPageData } = useFetchHealth({ userId, period: GRAPHTYPE[`${graphType}`].en })

  if (!healthPageData) {
    return null
  }

  const DUMMY = {
    code: 200,
    period: 'weekly',
    data: {
      physicalId: undefined,
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

  const { weight, weightInfo, healthReport } = DUMMY.data

  return (
    <DashBoardTemplate route="health">
      <GraphSection type={graphType} toggle={toggleGraphType} info={weightInfo} />
      <WeightSection weight={weight} />
      <ReportSection report={healthReport} />
    </DashBoardTemplate>
  )
}

export default HealthPage
