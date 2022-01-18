import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FluentSlider from './FluentSlider'

export default {
  title: 'src/components/molecules/FluentSlider',
  component: FluentSlider,
} as ComponentMeta<typeof FluentSlider>

const Template: ComponentStory<typeof FluentSlider> = (args) => (
  <FluentSlider {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  min: 0,
  max: 1_000_000,
  step: 10_000,
  label: 'Price range',
}
Primary.parameters = {}
