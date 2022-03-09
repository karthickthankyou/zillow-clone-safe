import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AgentListing from './AgentListing'

export default {
  title: 'src/components/templates/AgentListing',
  component: AgentListing,
} as ComponentMeta<typeof AgentListing>

const Template: ComponentStory<typeof AgentListing> = (args) => <AgentListing {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
