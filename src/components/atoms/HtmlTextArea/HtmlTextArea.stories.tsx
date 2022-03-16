import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlTextArea from './HtmlTextArea'

export default {
  title: 'atoms/HtmlTextArea',
  component: HtmlTextArea,
} as ComponentMeta<typeof HtmlTextArea>

const Template: ComponentStory<typeof HtmlTextArea> = (args) => (
  <HtmlTextArea {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
