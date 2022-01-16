import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DropdownMenuRadix from './DropdownMenuRadix'

export default {
  title: 'src/components/molecules/DropdownMenuRadix',
  component: DropdownMenuRadix,
} as ComponentMeta<typeof DropdownMenuRadix>

const Template: ComponentStory<typeof DropdownMenuRadix> = (args) => <DropdownMenuRadix {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
