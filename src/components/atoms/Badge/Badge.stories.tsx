import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from './Badge'

export default {
  title: 'atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = ({ children, size }) => (
  <Badge size={size}>{children}</Badge>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Hello World',
  size: 'sm',
}
Primary.parameters = {}
