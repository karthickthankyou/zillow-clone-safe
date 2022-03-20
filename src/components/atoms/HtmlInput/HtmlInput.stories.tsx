import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HtmlInput from './HtmlInput'
import { Wrapper } from '../utils'
import NotesFixed from 'src/components/molecules/NotesFixed'

export default {
  title: 'atoms/HtmlInput',
  component: HtmlInput,
} as ComponentMeta<typeof HtmlInput>

const Template: ComponentStory<typeof HtmlInput> = (args) => (
  <Wrapper>
    <label className='flex flex-col items-start' htmlFor='sample-input'>
      Sample input
      <HtmlInput className='mt-2' id='sample-input' {...args} />
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
