import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Switch from './Switch'

export default {
  title: 'atoms/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(false)
  console.log(checked)
  return <Switch checked={checked} onChange={setChecked} />
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
