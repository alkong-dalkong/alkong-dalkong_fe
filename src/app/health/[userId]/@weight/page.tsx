import Label from '@/components/label/Label'

const WeightSection = () => {
  return (
    <section className="mb-8 w-full">
      <Label icon="emergency-label">오늘의 체중</Label>
      <div className="mt-2 flex h-[56px] gap-[7px]">
        <div className="subtitle-M flex flex-1 items-center rounded-xl bg-mint-0 pl-6">54.8kg</div>
        <button className="flex-center h-full w-[100px] rounded-xl bg-mint-4 text-white">
          수정
        </button>
      </div>
    </section>
  )
}

export default WeightSection
