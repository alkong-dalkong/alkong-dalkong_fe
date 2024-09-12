type HelperBoxProps = {
  title: string
}

const HelperBox = ({ title }: HelperBoxProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-mint-3 px-6 py-4">
      <span className="subtitle-M text-gray-6">{title}</span>
    </div>
  )
}

const ClinicHelper = () => {
  return <HelperBox title="진료에서 내원 일정을 추가해 보세요!" />
}

const HealthHelper = () => {
  return <HelperBox title="건강에서 내 체중을 추가해 보세요!" />
}

const MedicineHelper = () => {
  return <HelperBox title="약에서 복용 중인 약을 추가해 보세요!" />
}

export { ClinicHelper, HealthHelper, MedicineHelper }
