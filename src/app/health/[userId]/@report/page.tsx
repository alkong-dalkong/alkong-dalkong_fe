import Label from '@/components/label/Label'

const ReportSection = () => {
  return (
    <section className="w-full">
      <Label icon="emergency-label">건강 분석 리포트</Label>
      <div className="subtitle-M mt-2 rounded-xl bg-mint-0 px-6 py-4">
        가나다님과 같은 성별, 나이의 평균
        <br />
        몸무게인 57.5kg보다 3.2kg 낮아요.
      </div>
      <div className="subtitle-M mt-3 rounded-xl bg-mint-0 px-6 py-4">
        가나다님의 평균 체중이
        <br />
        지난주보다 0.5kg 감소했어요.
      </div>
    </section>
  )
}

export default ReportSection
