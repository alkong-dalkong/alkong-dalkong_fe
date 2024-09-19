'use client'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export const useStepper = (section: string) => {
  const { setValue, getValues } = useFormContext()
  const [count, setCount] = useState<number>(getValues(section))

  const decreaseCount = () => {
    const newCountValue = count > 0 ? count - 1 : count
    setCount(newCountValue)
    setValue(section, newCountValue)
  }

  const increaseCount = () => {
    const newCountValue = count + 1
    setCount(newCountValue)
    setValue(section, newCountValue)
  }

  return { count, decreaseCount, increaseCount }
}
