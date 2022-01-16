import React from 'react'
import { render } from '@testing-library/react'
import ProductPage from './ProductPage'

describe('ProductPage Component', () => {
  test('ProductPage renders', () => {
    render(<ProductPage />)
  })
})
