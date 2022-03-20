import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NotesFixed from 'src/components/molecules/NotesFixed'
import HtmlInput from './HtmlInput'
import { Wrapper } from '../utils'

export default {
  title: 'atoms/HtmlInput',
  component: HtmlInput,
} as ComponentMeta<typeof HtmlInput>

const Template: ComponentStory<typeof HtmlInput> = (args) => (
  <Wrapper>
    <label className='flex flex-col items-start' htmlFor='sample-input'>
      <div className='mb-2'>Sample input</div>
      <HtmlInput id='sample-input' {...args} />
    </label>
  </Wrapper>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
  (story) => (
    <div>
      {story()}
      <NotesFixed>
        This sample input is wrapped in a label to avoid accessiblity
        violations.
      </NotesFixed>
    </div>
  ),
]
export const Password = Template.bind({})
Password.args = {
  type: 'password',
}
export const DateTime = Template.bind({})
DateTime.args = {
  type: 'datetime-local',
}
