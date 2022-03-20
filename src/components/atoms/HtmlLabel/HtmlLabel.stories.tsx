import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NotesFixed from 'src/components/molecules/NotesFixed'
import HtmlLabel from './HtmlLabel'
import { Wrapper } from '../utils'

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
Primary.decorators = [
  (story) => (
    <Wrapper>
      {story()}
      <NotesFixed>HtmlLabel wraps a color picker in this example.</NotesFixed>
    </Wrapper>
  ),
]
