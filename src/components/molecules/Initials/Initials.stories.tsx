import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Initials from './Initials'

export default {
  title: 'molecules/Initials',
  component: Initials,
} as ComponentMeta<typeof Initials>

const Template: ComponentStory<typeof Initials> = (args) => (
  <Initials {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'Karthick Ragavendran',
  color: 'primary',
}
Primary.parameters = {}
export const Yellow = Template.bind({})
Yellow.args = {
  name: 'Sachin Tendulkar',
  color: 'yellow',
}
Yellow.parameters = {}
