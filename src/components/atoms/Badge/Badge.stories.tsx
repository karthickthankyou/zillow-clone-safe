import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from './Badge'
import { Wrapper } from '../utils'

export default {
  title: 'atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => (
  <Wrapper>
    <Badge {...args} />
  </Wrapper>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'Hello World',
  size: 'sm',
}
Primary.parameters = {}
