import { render, screen } from '@testing-library/react'
import Text from '.'

describe('Text component', () => {
  test('should render', () => {
    const textContent = 'Hello World'
    render(<Text>{textContent}</Text>)
    expect(screen.getByText(textContent)).toHaveTextContent(textContent)
  })
  test('should accept props', () => {
    const textContent = 'Hello World'
    render(<Text size='text-7xl'>{textContent}</Text>)
    expect(screen.getByText(textContent)).toHaveTextContent(textContent)
  })
})
