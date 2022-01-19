import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Switch from './Switch'

export default {
  title: 'src/components/molecules/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
