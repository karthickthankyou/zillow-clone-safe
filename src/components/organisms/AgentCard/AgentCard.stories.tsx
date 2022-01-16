import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AgentCard from './AgentCard'

export default {
  title: 'organisms/AgentCard',
  component: AgentCard,
} as ComponentMeta<typeof AgentCard>

const Template: ComponentStory<typeof AgentCard> = (args) => (
  <div className='container grid gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3'>
    <AgentCard />
    <AgentCard />
    <AgentCard />
    <AgentCard />
    <AgentCard />
    <AgentCard />
    <AgentCard />
    <AgentCard />
    <AgentCard />
    <AgentCard />
    <AgentCard />
    <AgentCard />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
