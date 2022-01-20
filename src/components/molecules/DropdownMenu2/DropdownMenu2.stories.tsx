import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuItem, MenuLink } from '@reach/menu-button'
import DropdownMenu2 from './DropdownMenu2'

export default {
  title: 'src/components/molecules/DropdownMenu2',
  component: DropdownMenu2,
} as ComponentMeta<typeof DropdownMenu2>

const Template: ComponentStory<typeof DropdownMenu2> = () => (
  <DropdownMenu2 title='Title'>
    <div>Hello</div>
    <div>Hello2</div>
    <div>Hello3</div>
  </DropdownMenu2>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Actions',
}
Primary.parameters = {}
