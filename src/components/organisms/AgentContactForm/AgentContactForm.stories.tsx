import React from 'react'
import { SbReduxProvider } from 'src/lib/sb'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AgentContactForm } from './AgentContactForm'

export default {
  title: 'organisms/AgentContactForm',
  component: AgentContactForm,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof AgentContactForm>

const Template: ComponentStory<typeof AgentContactForm> = (args) => (
  <AgentContactForm {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
