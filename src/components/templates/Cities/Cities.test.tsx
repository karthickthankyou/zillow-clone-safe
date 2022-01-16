import React from 'react'
import { render } from '@testing-library/react'
import Cities from './Cities'

describe('Cities Component', () => {
  test('Cities renders', () => {
    render(<Cities />)
  })
})
