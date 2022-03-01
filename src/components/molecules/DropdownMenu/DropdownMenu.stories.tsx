import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DropdownMenu from './DropdownMenu'

export default {
  title: 'molecules/DropdownMenu',
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>

const Template: ComponentStory<typeof DropdownMenu> = () => <DropdownMenu />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
