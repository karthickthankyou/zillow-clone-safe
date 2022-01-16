import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FluentSlider from './FluentSlider'

export default {
  title: 'src/components/molecules/FluentSlider',
  component: FluentSlider,
} as ComponentMeta<typeof FluentSlider>

const Template: ComponentStory<typeof FluentSlider> = (args) => <FluentSlider {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
