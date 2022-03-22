import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Suboption from './Suboption'

export default {
  title: 'templates/ProductPage/Suboption',
  component: Suboption,
} as ComponentMeta<typeof Suboption>

const Template: ComponentStory<typeof Suboption> = (args) => (
  <Suboption {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Sample title',
  value: 'Sample value',
}
Primary.parameters = {}
