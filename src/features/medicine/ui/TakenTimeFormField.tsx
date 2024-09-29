'use client'
import React, { useState } from 'react'

import { Icon, InputGroup, Label } from '@/components'
import { TakenTimeBottomSheet, useSyncMedicineTimes } from '@/features'
import { useToggle } from '@/hooks'
import { useSelectedTimeActions } from '@/store'

export const TakenTimeFormField = () => {
  const takenTimeArr = useSyncMedicineTimes()
  const [index, setIndex] = useState(0)
  const [takenTimeSheet, toggleTakenTimeSheet] = useToggle(false)
  const { setInitialSelectedTime } = useSelectedTimeActions()

  const handleClickButton = (index: number) => {
    setIndex(index)
    setInitialSelectedTime(takenTimeArr[index])
    toggleTakenTimeSheet()
  }

  return (
    <InputGroup>
      <Label>복용 시간</Label>
      <div className="flex-column gap-2 pl-2">
        {takenTimeArr.map((time, index) => (
          <React.Fragment key={index}>
            <button
              type="button"
              className="flex-between-align body-M cursor-pointer text-gray-6"
              onClick={() => handleClickButton(index)}
            >
              <p>{time}</p>
              <Icon size={28} name="arrow-right" />
            </button>
          </React.Fragment>
        ))}
        <TakenTimeBottomSheet
          section="medicineTakenTimeList"
          index={index}
          isShowing={takenTimeSheet}
          onClickScrim={toggleTakenTimeSheet}
        />
      </div>
    </InputGroup>
  )
}
