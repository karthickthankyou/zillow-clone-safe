import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ScrollBanner from './ScrollBanner'

export default {
  title: 'src/components/molecules/ScrollBanner',
  component: ScrollBanner,
} as ComponentMeta<typeof ScrollBanner>

const Template: ComponentStory<typeof ScrollBanner> = (args) => <ScrollBanner {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
