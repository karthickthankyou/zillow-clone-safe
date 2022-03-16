import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DropZone from './DropZone'

export default {
  title: 'molecules/DropZone',
  component: DropZone,
} as ComponentMeta<typeof DropZone>

const Template: ComponentStory<typeof DropZone> = (args) => (
  <DropZone {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
