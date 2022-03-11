import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HighButton from './HighButton'

export default {
  title: 'src/components/molecules/HighButton',
  component: HighButton,
} as ComponentMeta<typeof HighButton>

const Template: ComponentStory<typeof HighButton> = (args) => <HighButton {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
