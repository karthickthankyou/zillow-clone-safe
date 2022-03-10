import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MyAccount from './MyAccount'

export default {
  title: 'src/components/templates/MyAccount',
  component: MyAccount,
} as ComponentMeta<typeof MyAccount>

const Template: ComponentStory<typeof MyAccount> = (args) => <MyAccount {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
