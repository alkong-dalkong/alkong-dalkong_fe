'use client'
import { useCallback, useRef } from 'react'

export type UseDebounceFuncType = (callback: () => void, delay: number) => () => void

export const useDebounceFunc: UseDebounceFuncType = (callback, delay) => {
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const debouncedFunction = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(callback, delay)
  }, [callback, delay])

  return debouncedFunction
}
