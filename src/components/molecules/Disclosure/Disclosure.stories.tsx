import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Disclosure from './Disclosure'

export default {
  title: 'molecules/Disclosure',
  component: Disclosure,
} as ComponentMeta<typeof Disclosure>

const Template: ComponentStory<typeof Disclosure> = (args) => (
  <>
    <Disclosure {...args} />
    <Disclosure {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Hello',
  children: <div>Hello</div>,
}
Primary.parameters = {}
