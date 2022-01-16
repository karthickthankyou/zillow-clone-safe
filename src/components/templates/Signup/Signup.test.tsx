import React from 'react'
import { render } from '@testing-library/react'
import Signup from './Signup'

describe('Signup Component', () => {
  test('Signup renders', () => {
    render(<Signup />)
  })
})
