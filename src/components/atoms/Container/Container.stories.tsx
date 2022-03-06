import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Container from './Container'

export default {
  title: 'src/components/atoms/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
