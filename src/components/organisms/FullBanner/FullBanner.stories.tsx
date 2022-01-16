import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FullBanner from './FullBanner'

export default {
  title: 'organisms/FullBanner',
  component: FullBanner,
} as ComponentMeta<typeof FullBanner>

const Template: ComponentStory<typeof FullBanner> = (args) => (
  <FullBanner {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
