import type { PropsWithChildren } from 'react'
import Image from 'next/image'

type LabelProps = {
  src?: string
}

const Label = ({ children, src }: PropsWithChildren<LabelProps>) => {
  return (
    <div className="flex-align gap-2">
      {src && <Image src={src} width={28} height={28} alt="label-icon" />}
      <p className="subtitle-B">{children}</p>
    </div>
  )
}

export default Label
