import { act, renderHook } from '@testing-library/react-hooks'

import { useBoolean } from '@/hooks'

// result.current = [state, setTrue, setFalse]

test.each([[true], [false]])(
  '초기 상태로 %s를 넣으면 해당 값으로 상태가 초기화된다.',
  (initialValue) => {
    const { result } = renderHook(() => useBoolean(initialValue))
    expect(result.current[0]).toBe(initialValue)
  },
)

test('setTrue하면 false에서 true로 바뀐다.', () => {
  const { result } = renderHook(() => useBoolean(false))
  expect(result.current[0]).toBe(false)
  act(result.current[1])
  expect(result.current[0]).toBe(true)
})

test('setFalse하면 true에서 false로 바뀐다.', () => {
  const { result } = renderHook(() => useBoolean(true))
  expect(result.current[0]).toBe(true)
  act(result.current[2])
  expect(result.current[0]).toBe(false)
})
