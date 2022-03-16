import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SplitLayoutImage from './SplitLayoutImage'

export default {
  title: 'templates/SplitLayoutImage',
  component: SplitLayoutImage,
} as ComponentMeta<typeof SplitLayoutImage>

const Template: ComponentStory<typeof SplitLayoutImage> = (args) => (
  <SplitLayoutImage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
