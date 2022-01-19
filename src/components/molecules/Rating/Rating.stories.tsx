import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Rating from './Rating'

export default {
  title: 'src/components/molecules/Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />

export const Primary = Template.bind({})
Primary.args = {
  value: 2.7,
}
Primary.parameters = {}
