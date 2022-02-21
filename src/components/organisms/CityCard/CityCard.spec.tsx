import React from 'react'
import { mount } from '@cypress/react'
import CityCard from './CityCard'

describe('<Posts />', () => {
  beforeEach(() => {
    // given
    mount(
      <CityCard
        displayName='Chennai'
        image='https://res.cloudinary.com/thankyou/image/upload/v1640715615/nike/cities/newyork_zqnljo.jpg'
      />
    )
  })

  it('renders agent data', () => {
    // when, then
    cy.findByText('Chennai').should('exist')
  })
})
