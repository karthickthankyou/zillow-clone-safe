import React from 'react'
import { mount } from '@cypress/react'
import CityCard from './CityCard'

describe('<Posts />', () => {
  beforeEach(() => {
    // given
    mount(<CityCard id='Chennai' />)
  })

  it('renders agent data', () => {
    // when, then
    cy.findByText('Chennai').should('exist')
  })
})
