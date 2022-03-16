import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Notification from './Notification'

export default {
  title: 'molecules/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>

const Template: ComponentStory<typeof Notification> = () => <Notification />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
