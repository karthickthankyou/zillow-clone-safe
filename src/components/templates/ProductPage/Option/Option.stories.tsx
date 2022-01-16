import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Option from './Option'

export default {
  title: 'templates/ProductPage/Option',
  component: Option,
} as ComponentMeta<typeof Option>

const Template: ComponentStory<typeof Option> = (args) => <Option {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Property',
  content: ['Stories: 2', 'Floors: true'],
}
Primary.parameters = {}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'Appliances Included',
  content: [
    'Dishwasher',
    'Dryer',
    'Refrigerator',
    'Laundry In Basement',
    'Laundry In 1st floor',
  ],
}
Secondary.parameters = {}
