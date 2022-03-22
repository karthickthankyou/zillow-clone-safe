import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'

describe('Home Component', () => {
  test('Home renders', () => {
    render(<Home />)
  })
})
