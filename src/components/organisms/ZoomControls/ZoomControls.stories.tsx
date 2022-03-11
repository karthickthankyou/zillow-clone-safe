import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ZoomControls from './ZoomControls'

export default {
  title: 'src/components/organisms/ZoomControls',
  component: ZoomControls,
} as ComponentMeta<typeof ZoomControls>

const Template: ComponentStory<typeof ZoomControls> = () => <ZoomControls />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
