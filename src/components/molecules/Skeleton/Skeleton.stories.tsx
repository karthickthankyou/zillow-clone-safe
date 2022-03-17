import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Skeleton from './Skeleton'

export default {
  title: 'molecules/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  className: 'h-24 w-full',
}
Primary.parameters = {}
