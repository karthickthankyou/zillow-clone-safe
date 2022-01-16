import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MenuItemPartition from './MenuItemPartition'

export default {
  title: 'molecules/MenuItemPartition',
  component: MenuItemPartition,
} as ComponentMeta<typeof MenuItemPartition>

const Template: ComponentStory<typeof MenuItemPartition> = ({ text }) => (
  <MenuItemPartition text={text} />
)

export const Primary = Template.bind({})
Primary.args = {
  text: {
    title: 'Featured',
    subTitles: ['New Releases', 'Best Sellers', 'Popular'],
  },
}
Primary.parameters = {}
