import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ChakraSlider from './ChakraSlider'

export default {
  title: 'src/components/molecules/ChakraSlider',
  component: ChakraSlider,
} as ComponentMeta<typeof ChakraSlider>

const Template: ComponentStory<typeof ChakraSlider> = (args) => <ChakraSlider {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
