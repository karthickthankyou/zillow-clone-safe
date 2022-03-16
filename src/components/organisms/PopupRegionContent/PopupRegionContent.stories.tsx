import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PopupRegionContent from './PopupRegionContent'

export default {
  title: 'organisms/PopupRegionContent',
  component: PopupRegionContent,
} as ComponentMeta<typeof PopupRegionContent>

const Template: ComponentStory<typeof PopupRegionContent> = (args) => (
  <PopupRegionContent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
