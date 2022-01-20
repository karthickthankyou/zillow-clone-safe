import { render } from '@testing-library/react'
import React from 'react'
import Badge from './Badge'

describe('Badge Component', () => {
  test('should render', () => {
    render(<Badge>Hello</Badge>)
  })
})
