import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MenuItem, MenuLink } from '@reach/menu-button'
import DropdownMenu2 from './DropdownMenu2'

export default {
  title: 'src/components/molecules/DropdownMenu2',
  component: DropdownMenu2,
} as ComponentMeta<typeof DropdownMenu2>

const Template: ComponentStory<typeof DropdownMenu2> = (args) => (
  <DropdownMenu2 {...args}>
    <MenuLink onSelect={() => alert('Download')}>Download</MenuLink>
    <MenuLink onSelect={() => alert('Copy')}>Create a Copy</MenuLink>
    <MenuLink onSelect={() => alert('Mark as Draft')}>Mark as Draft</MenuLink>
    <MenuLink onSelect={() => alert('Delete')}>Delete</MenuLink>
  </DropdownMenu2>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Actions',
}
Primary.parameters = {}
