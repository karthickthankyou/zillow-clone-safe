import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FlexboxGrid from './FlexboxGrid'

export default {
  title: '_foundations/5. FlexboxGrid',
  component: FlexboxGrid,
} as ComponentMeta<typeof FlexboxGrid>

const Template: ComponentStory<typeof FlexboxGrid> = () => <FlexboxGrid />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
