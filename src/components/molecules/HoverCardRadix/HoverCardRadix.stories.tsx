import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HoverCardRadix from './HoverCardRadix'

export default {
  title: 'src/components/molecules/HoverCardRadix',
  component: HoverCardRadix,
} as ComponentMeta<typeof HoverCardRadix>

const Template: ComponentStory<typeof HoverCardRadix> = () => <HoverCardRadix />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
