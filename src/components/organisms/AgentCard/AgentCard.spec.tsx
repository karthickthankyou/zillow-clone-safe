import React from 'react'
import { mount } from '@cypress/react'
import AgentCard from './AgentCard'

describe('<Posts />', () => {
  beforeEach(() => {
    // given
    mount(<AgentCard />)
  })

  it('renders agent data', () => {
    // when, then
    cy.findAllByText('Coldwell Banker Prime Properties').should('exist')
    cy.findAllByText('Bouckville NY').should('exist')
    cy.findAllByText('(315) 842-4321').should('exist')
  })
})
