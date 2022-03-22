import React from 'react'
import { render } from '@testing-library/react'
import Notification from './Notification'

describe('Notification Component', () => {
  test('Notification renders', () => {
    render(<Notification />)
  })
})
