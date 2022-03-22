import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlSelect from './HtmlSelect'

export default {
  title: 'atoms/HtmlSelect',
  component: HtmlSelect,
} as ComponentMeta<typeof HtmlSelect>

const Template: ComponentStory<typeof HtmlSelect> = (args) => (
  <label className='flex flex-col items-start' htmlFor='select'>
    <div className='mb-2'>Sample select</div>
    <HtmlSelect {...args} id='select' />
  </label>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
