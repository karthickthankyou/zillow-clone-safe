import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlLabel from './HtmlLabel'

export default {
  title: 'src/components/atoms/HtmlLabel',
  component: HtmlLabel,
} as ComponentMeta<typeof HtmlLabel>

const Template: ComponentStory<typeof HtmlLabel> = (args) => <HtmlLabel {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
