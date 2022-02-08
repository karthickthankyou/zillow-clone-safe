import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MapMarker from './MapMarker'

export default {
  title: 'src/components/molecules/MapMarker',
  component: MapMarker,
} as ComponentMeta<typeof MapMarker>

const Template: ComponentStory<typeof MapMarker> = (args) => <MapMarker {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
