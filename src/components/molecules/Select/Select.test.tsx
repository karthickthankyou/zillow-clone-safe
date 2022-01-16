import React from 'react'
import { render } from '@testing-library/react'
import Select from './Select'

describe('Select Component', () => {
  test('Select renders', () => {
    render(<Select options={['Hello']} />)
  })
})
