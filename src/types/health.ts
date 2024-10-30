export type GetPhysicalRequest = {
  userId: string
  period: string
}

export type GetPhysicalResponse = {
  code: number
  period: string
  data: {
    physicalId: number
    weight?: WeightType
    weightInfo: WeightInfoType
    healthReport?: HealthReportType
  }
}

export type WeightType = {
  weightId: number // 체중 기록의 고유 식별자
  weight: number // 체중 값 (kg)
}

export type WeightInfoType = {
  avgWeight: number // 평균 체중 값 (kg)
  avgDate: string // 평균 체중을 계산한 년도, 월(yyyy-MM-Wx 형식) ex. 2024-09-W1 (1주차)
}[]

export type HealthReportType = {
  apiAvgWeight: number // 사용자 성별, 나이대 평균 체중
  diffWeight: number // 사용자의 오늘 체중과 성별, 나이대 평균 체중의 차이값
  lastweekWeight: number // 오늘의 체중 - 지난주 평균 체중
}

export type PostPhysicalRequest = {
  physicalId: number
  weight: number
  createdAt: string
}

export type PostPhysicalResponse = {
  code: number
  weightId: number
}

export type PutPhysicalRequest = {
  weight: number
  createdAt: string
}

export type PutPhysicalResponse = {
  code: number
  weightId: number
}
