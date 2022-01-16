import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dropdown from './Dropdown'

export default {
  title: 'molecules/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
