import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AgentListing from './AgentListing'

export default {
  title: 'templates/AgentListing',
  component: AgentListing,
} as ComponentMeta<typeof AgentListing>

const Template: ComponentStory<typeof AgentListing> = () => <AgentListing />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
