import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlTextArea from './HtmlTextArea'

export default {
  title: 'atoms/HtmlTextArea',
  component: HtmlTextArea,
} as ComponentMeta<typeof HtmlTextArea>

const Template: ComponentStory<typeof HtmlTextArea> = (args) => (
  <label className='flex flex-col items-start' htmlFor='textarea'>
    <div className='mb-2'>Sample textarea</div>
    <HtmlTextArea {...args} id='textarea' />
  </label>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
