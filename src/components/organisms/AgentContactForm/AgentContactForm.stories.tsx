import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AgentContactForm from './AgentContactForm'

export default {
  title: 'src/components/organisms/AgentContactForm',
  component: AgentContactForm,
} as ComponentMeta<typeof AgentContactForm>

const Template: ComponentStory<typeof AgentContactForm> = (args) => <AgentContactForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
