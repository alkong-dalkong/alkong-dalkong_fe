'use client'

import { Button, SubHeader, Tag } from '@/components'
import { useMedicineDetailData } from '@/features'

const DetailItem = () => {
  const { detailData, isPending, isError } = useMedicineDetailData()

  if (isPending) return <p>로딩중</p>
  if (isError) return <p>에러</p>

  return (
    <div className="flex-column gap-6 overflow-scroll px-5 py-4 scrollbar-hide">
      {detailData.map((medicine) => (
        <div key={medicine.medicineId} className="rounded-xl border border-mint-3 bg-white p-5">
          <div className="flex-between-align border-b border-b-mint-5 pb-4">
            <p className="subtitle-B">{medicine.medicineName}</p>
            <p className="body-M text-gray-6">{medicine.medicineWeek}</p>
          </div>

          <div className="flex-column mt-6 gap-4">
            {medicine.medicineTakenTime.map((time, index) => (
              <div key={index} className="flex-between-align">
                <p className="body-M text-gray-7">{time}</p>
                <Tag label={`${medicine.medicineDosage} ${medicine.medicineTakenType}`} />
              </div>
            ))}
          </div>

          {medicine.medicineMemo && (
            <div className="mt-6 min-h-16 rounded-xl bg-mint-0 px-4 py-2">
              {medicine.medicineMemo}
            </div>
          )}

          <div className="mt-8 flex gap-[15px]">
            <Button size="sm" primary={false}>
              약 삭제
            </Button>
            <Button size="sm">정보 수정</Button>
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 *
 * @todo SubHeader 변경 시, 서버컴포넌트로 이동
 */

export const MedicineDetailClientPage = () => {
  return (
    <div className="flex-column h-full overflow-hidden">
      <div className="p-6">
        <SubHeader.Back title="나의 복용약" />
      </div>

      <DetailItem />
    </div>
  )
}
