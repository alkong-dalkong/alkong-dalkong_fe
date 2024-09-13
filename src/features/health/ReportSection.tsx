'use client'

import Label from '@/components/label/Label'
import { useUserStore } from '@/store'
import type { HealthReportType } from '@/types'

export const ReportSection = ({ report }: { report: HealthReportType | undefined }) => {
  const {
    user: { name },
  } = useUserStore()

  return (
    <section className="w-full">
      <Label icon="health-label">건강 분석 리포트</Label>
      {report ? (
        <>
          <div className="subtitle-M mt-2 whitespace-pre rounded-xl bg-mint-0 px-6 py-4">
            {`${name}님과 같은 성별, 나이의 평균\n몸무게인 ${report.apiAvgWeight}kg보다 ${report.diffWeight}kg 낮아요.`}
          </div>
          <div className="subtitle-M mt-2 whitespace-pre rounded-xl bg-mint-0 px-6 py-4">
            {`${name}님의 평균 체중이\n지난주보다 ${report.lastweekWeight}kg 감소했어요.`}
          </div>
        </>
      ) : (
        <div className="subtitle-M mt-2 whitespace-pre rounded-xl bg-mint-0 px-6 py-4 text-gray-6">
          {'체중을 입력하면\n리포트를 확인할 수 있어요!'}
        </div>
      )}
    </section>
  )
}
