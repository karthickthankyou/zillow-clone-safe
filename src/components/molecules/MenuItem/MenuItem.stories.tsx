import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MenuItem from './MenuItem'

export default {
  title: 'molecules/MenuItem',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
