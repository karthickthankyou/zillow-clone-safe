/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { mount } from '@cypress/react'
import { sampleAgentProps } from 'src/components/organisms/AgentCard/AgentCard.stories'
import AgentCard from './AgentCard'

describe('<Posts />', () => {
  beforeEach(() => {
    // given
    mount(<AgentCard {...sampleAgentProps} />)
  })

  it('renders agent data', () => {
    // when, then
    cy.findAllByText('Coldwell Banker Prime Properties').should('exist')
    cy.findAllByText('Bouckville NY').should('exist')
    cy.findAllByText('(315) 842-4321').should('exist')
  })
})
