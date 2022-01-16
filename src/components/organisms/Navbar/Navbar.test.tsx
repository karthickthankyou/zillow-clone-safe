import React from 'react'
import { render } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar Component', () => {
  test('Navbar renders', () => {
    render(<Navbar />)
  })
})
