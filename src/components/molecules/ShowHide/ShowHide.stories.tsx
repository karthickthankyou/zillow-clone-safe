import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ShowHide from './ShowHide'

export default {
  title: 'molecules/ShowHide',
  component: ShowHide,
} as ComponentMeta<typeof ShowHide>

const Template: ComponentStory<typeof ShowHide> = (args) => (
  <ShowHide {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
