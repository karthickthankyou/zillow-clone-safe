import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

describe('button component clicks', () => {
  let buttonContent = 'Click me 2'
  test('should be clickable', async () => {
    render(
      <Button fullWidth onClickAction={() => {}}>
        {buttonContent}
      </Button>
    )
    userEvent.click(
      screen.getByRole('button', {
        name: buttonContent,
      })
    )
  })
  test('should run default click action', async () => {
    buttonContent = 'Click me 3'
    const consoleWarnMock = jest.spyOn(console, 'error').mockImplementation()
    render(<Button fullWidth>{buttonContent}</Button>)
    userEvent.click(
      screen.getByRole('button', {
        name: buttonContent,
      })
    )
    expect(consoleWarnMock).toBeCalledTimes(1)
    consoleWarnMock.mockRestore()
  })
})
