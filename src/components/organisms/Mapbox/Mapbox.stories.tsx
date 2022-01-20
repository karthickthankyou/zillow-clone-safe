import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Mapbox from './Mapbox'

export default {
  title: 'organisms/Mapbox',
  component: Mapbox,
} as ComponentMeta<typeof Mapbox>

const Template: ComponentStory<typeof Mapbox> = (args) => <Mapbox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  latitude: 42.36,
  longitude: -71.058884,
  zoom: 12,
  markers: [
    { id: '1', latitude: 42.360081, longitude: -71.0583 },
    { id: '2', latitude: 42.360081, longitude: -71.0585 },
  ],
  className: 'h-screen',
}
Primary.parameters = {}
