import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbAppLevelHooks, SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'
import Home from './Home'

export default {
  title: 'templates/Home',
  component: Home,
  decorators: [SbAppLevelHooks, SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = () => <Home />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
