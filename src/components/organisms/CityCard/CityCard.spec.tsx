import React from 'react'
import { mount } from '@cypress/react'
import CityCard from './CityCard'

describe('<Posts />', () => {
  beforeEach(() => {
    // given
    mount(
      <CityCard
        id='Chennai'
        lat={45.0}
        lng={-90}
        totalHomes={100}
        priceSqft={100}
        type='city'
      />
    )
  })

  it('renders agent data', () => {
    // when, then
    cy.findByText('Chennai').should('exist')
  })
})
