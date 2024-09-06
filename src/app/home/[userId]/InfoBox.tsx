type InfoBoxProps = {
  title: string
  schedule: string
}

export const InfoBox = ({ title, schedule }: InfoBoxProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-mint-3 px-6 py-4">
      <span className="subtitle-B">{title}</span>
      <span className="headline-R text-gray-6">{schedule}</span>
    </div>
  )
}
