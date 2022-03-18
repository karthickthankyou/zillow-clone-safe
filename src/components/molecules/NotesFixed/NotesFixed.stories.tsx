import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NotesFixed from './NotesFixed'

export default {
  title: 'src/components/molecules/NotesFixed',
  component: NotesFixed,
} as ComponentMeta<typeof NotesFixed>

const Template: ComponentStory<typeof NotesFixed> = (args) => <NotesFixed {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
