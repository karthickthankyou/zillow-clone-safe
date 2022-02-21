import React from 'react'
// import { mount } from '@cypress/react'
import ProductListingPage from './ProductListingPage'

describe('ProductListingPage Component', () => {
  it('ProductListingPage renders', () => {
    cy.mount(<ProductListingPage />)
  })
})
