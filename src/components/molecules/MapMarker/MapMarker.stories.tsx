import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MapProvider } from 'src/store/map/mapContext'
import Mapbox from 'src/components/organisms/Mapbox'
import MapMarker from './MapMarker'

export default {
  title: 'molecules/MapMarker',
  component: MapMarker,
} as ComponentMeta<typeof MapMarker>

const Template: ComponentStory<typeof MapMarker> = (args) => (
  <MapProvider className='h-96'>
    <Mapbox>
      <MapMarker {...args} />
    </Mapbox>
  </MapProvider>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
