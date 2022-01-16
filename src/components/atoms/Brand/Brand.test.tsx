import React from 'react'
import { render } from '@testing-library/react'
import Brand from './Brand'

describe('Brand Component', () => {
  test('Brand renders', () => {
    render(<Brand />)
  })
})
