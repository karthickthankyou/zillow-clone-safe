import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlLabel from './HtmlLabel'

export default {
  title: 'atoms/HtmlLabel',
  component: HtmlLabel,
} as ComponentMeta<typeof HtmlLabel>

const Template: ComponentStory<typeof HtmlLabel> = (args) => (
  <HtmlLabel {...args} className='flex flex-col items-start'>
    Color picker
    <input type='color' className='mt-2 ' />
  </HtmlLabel>
)

export const Primary = Template.bind({})
Primary.args = {}
