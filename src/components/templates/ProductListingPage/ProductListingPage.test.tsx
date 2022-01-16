import React from 'react'
import { render } from '@testing-library/react'
import ProductListingPage from './ProductListingPage'

describe('ProductListingPage Component', () => {
  test('ProductListingPage renders', () => {
    render(<ProductListingPage />)
  })
})
