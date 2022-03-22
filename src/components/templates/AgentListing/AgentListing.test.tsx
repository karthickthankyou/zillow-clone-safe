/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render } from '@testing-library/react'
import AgentCard from 'src/components/organisms/AgentCard'
import { sampleAgentProps } from 'src/components/organisms/AgentCard/AgentCard.stories'
import AgentListing from './AgentListing'

describe('AgentListing Component', () => {
  test('AgentListing renders', () => {
    render(
      <AgentListing>
        <AgentCard {...sampleAgentProps} />
        <AgentCard {...sampleAgentProps} />
      </AgentListing>
    )
  })
})
