import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AddNewHomeTemplate from './AddNewHomeTemplate'

export default {
  title: 'templates/AddNewHomeTemplate',
  component: AddNewHomeTemplate,
} as ComponentMeta<typeof AddNewHomeTemplate>

const Template: ComponentStory<typeof AddNewHomeTemplate> = () => (
  <AddNewHomeTemplate />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
