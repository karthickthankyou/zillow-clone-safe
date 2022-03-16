import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlInput from './HtmlInput'

export default {
  title: 'atoms/HtmlInput',
  component: HtmlInput,
} as ComponentMeta<typeof HtmlInput>

const Template: ComponentStory<typeof HtmlInput> = (args) => (
  <HtmlInput {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
