import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Initials from './Initials'

export default {
  title: 'src/components/molecules/Initials',
  component: Initials,
} as ComponentMeta<typeof Initials>

const Template: ComponentStory<typeof Initials> = (args) => <Initials {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
