import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Details from './Details'

export default {
  title: 'templates/ProductPage/Details',
  component: Details,
} as ComponentMeta<typeof Details>

const Template: ComponentStory<typeof Details> = (args) => <Details {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Sample details',
  content: [
    {
      title: 'Sample details',
      content: 'Sample content',
    },
  ],
}
Primary.parameters = {}
