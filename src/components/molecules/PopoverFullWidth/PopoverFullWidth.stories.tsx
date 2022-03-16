import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PopoverFullWidth from './PopoverFullWidth'

export default {
  title: 'molecules/PopoverFullWidth',
  component: PopoverFullWidth,
} as ComponentMeta<typeof PopoverFullWidth>

const Template: ComponentStory<typeof PopoverFullWidth> = (args) => (
  <PopoverFullWidth {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
