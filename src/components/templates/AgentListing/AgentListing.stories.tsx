import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AgentCard from 'src/components/organisms/AgentCard'
import { sampleAgentProps } from 'src/components/organisms/AgentCard/AgentCard.stories'
import AgentListing from './AgentListing'

export default {
  title: 'templates/AgentListing',
  component: AgentListing,
} as ComponentMeta<typeof AgentListing>

const Template: ComponentStory<typeof AgentListing> = () => (
  <AgentListing>
    <AgentCard {...sampleAgentProps} />
    <AgentCard {...sampleAgentProps} />
    <AgentCard {...sampleAgentProps} />
  </AgentListing>
)

export const Primary = Template.bind({})
