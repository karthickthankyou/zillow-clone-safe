import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AgentCard from './AgentCard'

export default {
  title: 'organisms/AgentCard',
  component: AgentCard,
  excludeStories: ['sampleAgentProps'],
} as ComponentMeta<typeof AgentCard>

const Template: ComponentStory<typeof AgentCard> = (args) => (
  <AgentCard {...args} />
)
const SampleLayoutTemplate: ComponentStory<typeof AgentCard> = (args) => (
  <div className='container grid gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3'>
    <AgentCard {...args} />
    <AgentCard {...args} />
    <AgentCard {...args} />
    <AgentCard {...args} />
    <AgentCard {...args} />
    <AgentCard {...args} />
    <AgentCard {...args} />
    <AgentCard {...args} />
    <AgentCard {...args} />
    <AgentCard {...args} />
    <AgentCard {...args} />
    <AgentCard {...args} />
  </div>
)

export const sampleAgentProps = {
  brokerName: 'Coldwell Banker Prime Properties',
  agentName: 'Richard Parent - NY Licensed R.E. Salesperson',
  phone: '(315) 842-4321',
  rating: 3.3,
  reviews: 3455,
}

export const Primary = Template.bind({})
Primary.args = sampleAgentProps
Primary.decorators = [(story) => <div className='max-w-md'>{story()}</div>]

export const SampleLayout = SampleLayoutTemplate.bind({})
SampleLayout.args = sampleAgentProps
