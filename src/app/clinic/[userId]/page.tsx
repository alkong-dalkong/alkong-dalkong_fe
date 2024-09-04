import { BottomNav, Calendar } from '@/components'
import { FloatingProfile, ScheduleSection } from '@/features/clinic'

const Clinic = () => {
  return (
    <main className="mx-4 mb-[10px] mt-[38px]">
      <FloatingProfile />

      <section>
        <Calendar />
      </section>

      <ScheduleSection />

      <BottomNav />
    </main>
  )
}

export default Clinic
