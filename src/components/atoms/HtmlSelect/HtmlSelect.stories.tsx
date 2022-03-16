import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlSelect from './HtmlSelect'

export default {
  title: 'atoms/HtmlSelect',
  component: HtmlSelect,
} as ComponentMeta<typeof HtmlSelect>

const Template: ComponentStory<typeof HtmlSelect> = (args) => (
  <HtmlSelect {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
