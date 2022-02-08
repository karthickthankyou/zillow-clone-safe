import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Streams from './Streams'

export default {
  title: 'src/components/molecules/Streams',
  component: Streams,
} as ComponentMeta<typeof Streams>

const Template: ComponentStory<typeof Streams> = (args) => <Streams {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
