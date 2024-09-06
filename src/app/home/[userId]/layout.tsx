import { DashBoardTemplate } from '@/features'

type HomeLayoutProps = {
  clinic: React.ReactNode
  health: React.ReactNode
  medicine: React.ReactNode
}

const HomeLayout = ({ clinic, health, medicine }: HomeLayoutProps) => {
  return (
    <DashBoardTemplate route="home">
      {clinic}
      {health}
      {medicine}
    </DashBoardTemplate>
  )
}

export default HomeLayout
