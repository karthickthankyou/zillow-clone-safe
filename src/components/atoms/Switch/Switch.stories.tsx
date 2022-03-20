import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Switch from './Switch'
import { Wrapper } from '../utils'

export default {
  title: 'atoms/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = () => <Switch />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [(story) => <Wrapper>{story()}</Wrapper>]
