import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MapboxContent from './MapboxContent'

export default {
  title: 'src/components/organisms/MapboxContent',
  component: MapboxContent,
} as ComponentMeta<typeof MapboxContent>

const Template: ComponentStory<typeof MapboxContent> = (args) => <MapboxContent {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
