import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchHomesFilter from './SearchHomesFilter'

export default {
  title: 'src/components/organisms/SearchHomesFilter',
  component: SearchHomesFilter,
} as ComponentMeta<typeof SearchHomesFilter>

const Template: ComponentStory<typeof SearchHomesFilter> = (args) => <SearchHomesFilter {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
