import { render, screen } from '@testing-library/react'

import type { iconMap } from '../icons'

import Label from './Label'

jest.mock('../icons', () => ({
  Icon: ({ name }: { name: keyof typeof iconMap }) => <div data-testid="mock-icon">{name}</div>,
}))

test('children prop으로 준 텍스트가 렌더링된다.', () => {
  render(<Label>테스트</Label>)
  const labelText = screen.getByText('테스트')
  expect(labelText).toBeInTheDocument()
})

test('icon prop으로 준 아이콘이 렌더링된다.', () => {
  const iconName: keyof typeof iconMap = 'arrow-down'
  render(<Label icon={iconName} />)
  const iconElement = screen.getByTestId('mock-icon')
  expect(iconElement).toBeInTheDocument()
  expect(iconElement).toHaveTextContent(iconName)
})
