import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MyAccount from './MyAccount'

export default {
  title: 'templates/MyAccount',
  component: MyAccount,
} as ComponentMeta<typeof MyAccount>

const Template: ComponentStory<typeof MyAccount> = () => <MyAccount />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
