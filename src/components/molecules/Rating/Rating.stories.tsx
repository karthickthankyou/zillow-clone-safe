import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Rating from './Rating'
import NotesFixed from '../NotesFixed'

export default {
  title: 'molecules/Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = (args) => (
  <>
    <Rating {...args} />
    <NotesFixed>
      <div>
        This component is from{' '}
        <span className='font-bold'>@mui/material/Rating</span> styled with
        tailwind classes.
      </div>
    </NotesFixed>
  </>
)

export const Small = Template.bind({})
Small.args = {
  value: 4.5,
}
export const Medium = Template.bind({})
Medium.args = {
  value: 3.3,
  size: 'medium',
}
export const Large = Template.bind({})
Large.args = {
  value: 1.3,
  size: 'large',
}
export const RedLarge = Template.bind({})
RedLarge.args = {
  value: 4.1,
  size: 'large',
  color: 'red',
}
export const BlackMedium = Template.bind({})
BlackMedium.args = {
  value: 3.9,
  size: 'medium',
  color: 'black',
}
export const Disabled = Template.bind({})
Disabled.args = {
  value: 1.3,
  size: 'large',
  disabled: true,
}
