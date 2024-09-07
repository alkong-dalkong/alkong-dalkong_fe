'use client'

import dayjs from 'dayjs'

import { DashBoardTemplate } from '@/features'
import { useHome } from '@/hooks/apis/useHome'

import ClinicSection from './ClinicSection'
import HealthSection from './HealthSection'
import MedicineSection from './MedicineSection'

export type HomeRouteParams = {
  params: { userId: string }
}

const Home = ({ params: { userId } }: HomeRouteParams) => {
  const currentTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
  const { data, isLoading, error } = useHome({ userId, localDate: currentTime })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading data</div>

  return (
    <DashBoardTemplate route="home">
      <ClinicSection />
      <HealthSection />
      <MedicineSection />
    </DashBoardTemplate>
  )
}

export default Home
