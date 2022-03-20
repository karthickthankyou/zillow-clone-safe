import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlTextArea from './HtmlTextArea'
import { Wrapper } from '../utils'

export default {
  title: 'atoms/HtmlTextArea',
  component: HtmlTextArea,
} as ComponentMeta<typeof HtmlTextArea>

const Template: ComponentStory<typeof HtmlTextArea> = (args) => (
  <Wrapper>
    <label className='flex flex-col items-start'>
      <div className='mb-2'>Sample textarea</div>
      <HtmlTextArea {...args} />
    </label>
  </Wrapper>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
