import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Slideup from './Slideup'

export default {
  title: 'molecules/Slideup',
  component: Slideup,
} as ComponentMeta<typeof Slideup>

const Template: ComponentStory<typeof Slideup> = (args) => <Slideup {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
