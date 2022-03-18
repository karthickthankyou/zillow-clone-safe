import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NotesFixed from './NotesFixed'

export default {
  title: 'molecules/NotesFixed',
  component: NotesFixed,
} as ComponentMeta<typeof NotesFixed>

const Template: ComponentStory<typeof NotesFixed> = (args) => (
  <NotesFixed {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'This is text as children.',
}

export const CustomTitle = Template.bind({})
CustomTitle.args = {
  title: 'Special notes',
  children: 'You are awesome.',
}
export const CustomChildren = Template.bind({})
CustomChildren.args = {
  children: (
    <div className='italic text-primary-600'>
      This is styled div as children.
    </div>
  ),
}
