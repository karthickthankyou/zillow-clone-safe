import React from 'react'
import { render } from '@testing-library/react'
import ProductListingResults from './ProductListingResults'

describe('ProductListingResult Component', () => {
  test('ProductListingResult renders', () => {
    render(
      <ProductListingResults
        watchAllData={{
          search: '',
          lat: '',
          lng: '',
          zoom: '',
          yearBuilt: [1900, 2022],
          price: [0, 1000],
          sqft: [0, 1000],
          beds: '3',
          bath: '3',
          homeType: [''],
        }}
        dirtyFields={{}}
      />
    )
  })
})
