import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchBox from './SearchBox'

export default {
  title: 'molecules/SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>

const Template: ComponentStory<typeof SearchBox> = (args) => (
  <SearchBox {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
