'use client'

import { DashBoardTemplate } from '@/features'

const HealthLayout = ({
  graph,
  report,
  weight,
}: {
  graph: React.ReactNode
  report: React.ReactNode
  weight: React.ReactNode
}) => {
  return (
    <DashBoardTemplate route="health">
      {graph}
      {weight}
      {report}
    </DashBoardTemplate>
  )
}

export default HealthLayout
