import React from 'react'
// import { mount } from '@cypress/react'
import ProductListingPage from './ProductListingPage'

describe('ProductListingPage Component', () => {
  it('ProductListingPage renders', () => {
    cy.mount(<ProductListingPage />)
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    cy.findAllByRole('button', { name: 'Year built' }).click()
    cy.findByTestId('slider').reactComponent().invoke('onChange', [1970, 1980])

    // cy.findByTestId('slider')
    // const arrows = '{rightarrow}'.repeat(3)
    // cy.get('#headlessui-popover-panel-4 > div > span > span:nth-child(3)').type(
    //   '{rightarrow}'
    // )
  })
})
