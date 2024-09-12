export type HomeParamsType = {
  userId: string
  localDate: string
}

export type HomeResponseType = {
  code: number
  data: {
    upcomingMedicalInfo: {
      hospitalName: string // 병원 이름
      hospitalDate: string // 병원 날짜 (yyyy-mm-dd hh:mm:ss 형식)
      medicalPart: string[] // 의료 분야 목록 (["건강 검진"])
    }
    recentMedicalInfo: {
      hospitalName: string // 최근 방문 병원 이름
      hospitalDate: string // 최근 방문 병원 날짜 (yyyy-mm-dd 형식)
    }
    recentWeightInfo?: {
      weight: number // 최근 몸무게
      date: string // 측정 날짜 (yyyy-mm-dd 형식)
    }
    currentMedicineInfo: {
      medicineName: string // 약 이름
      times: string[] // 약 복용 시간 목록 (hh:mm 형식)
      weekList: string[] // 복용 요일 목록
    }[]
  }
}
