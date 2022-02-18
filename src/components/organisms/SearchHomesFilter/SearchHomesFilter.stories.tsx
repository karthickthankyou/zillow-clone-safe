import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider } from 'src/lib/sb'
import SearchHomesFilter from './SearchHomesFilter'

export default {
  title: 'organisms/SearchHomesFilter',
  component: SearchHomesFilter,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof SearchHomesFilter>

const Template: ComponentStory<typeof SearchHomesFilter> = () => (
  <SearchHomesFilter />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
