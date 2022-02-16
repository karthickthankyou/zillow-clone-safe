import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Popup from './Popup'

export default {
  title: 'molecules/Popup',
  component: Popup,
} as ComponentMeta<typeof Popup>

const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
