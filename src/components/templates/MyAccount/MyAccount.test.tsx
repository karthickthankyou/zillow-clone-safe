import React from 'react'
import { render } from '@testing-library/react'
import MyAccount from './MyAccount'

describe('MyAccount Component', () => {
  test('MyAccount renders', () => {
    render(<MyAccount />)
  })
})
