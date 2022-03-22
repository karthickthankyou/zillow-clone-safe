import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Colors from './Colors'

export default {
  title: '_foundations/Colors',
  component: Colors,
} as ComponentMeta<typeof Colors>

const Template: ComponentStory<typeof Colors> = () => <Colors />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
