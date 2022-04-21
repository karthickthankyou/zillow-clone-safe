import React from 'react'
import { render } from '@testing-library/react'
import ProductPageCarousel, { dummyImagedData } from './ProductPageCarousel'

describe('ProductPageCarousel Component', () => {
  test('ProductPageCarousel renders', () => {
    render(
      <ProductPageCarousel imgs={dummyImagedData.map((item) => item.src)} />
    )
  })
})
