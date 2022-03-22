import { render, screen } from '@testing-library/react'
import Button from '.'

describe('button component', () => {
  const buttonContent = 'Click me 1'
  test('should render with given text', async () => {
    render(<Button onClickAction={() => {}}>{buttonContent}</Button>)
    screen.getByRole('button', {
      name: buttonContent,
    })
  })
})
