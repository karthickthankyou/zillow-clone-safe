import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PopupHomesContent from './PopupHomesContent'

export default {
  title: 'organisms/PopupHomesContent',
  component: PopupHomesContent,
} as ComponentMeta<typeof PopupHomesContent>

const Template: ComponentStory<typeof PopupHomesContent> = (args) => (
  <PopupHomesContent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
