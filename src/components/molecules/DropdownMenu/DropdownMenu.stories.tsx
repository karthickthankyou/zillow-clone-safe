import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DropdownMenu from './DropdownMenu'

export default {
  title: 'src/components/molecules/DropdownMenu',
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>

const Template: ComponentStory<typeof DropdownMenu> = (args) => <DropdownMenu {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
