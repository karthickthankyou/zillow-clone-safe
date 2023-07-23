import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'
import Mapbox from 'src/components/organisms/Mapbox'
import { Style } from 'src/generated/graphql'
import MapMarker from './MapMarker'

export default {
  title: 'molecules/MapMarker',
  component: MapMarker,
  decorators: [SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof MapMarker>

const Template: ComponentStory<typeof MapMarker> = (args) => (
  <Mapbox>
    <MapMarker {...args} />
  </Mapbox>
)

export const Primary = Template.bind({})
Primary.args = {
  home: {
    id: 23,
    lat: 37.7577,
    lng: -122.4376,
    style: Style.Apartment,
  },
}

export const Coop = Template.bind({})
Coop.args = {
  home: {
    id: 23,
    lat: 37.7577,
    lng: -122.4376,
    style: Style.Apartment,
  },
}

export const Wishlisted = Template.bind({})
Wishlisted.args = {
  wishlisted: {
    propertyId: 12,
    id: 23,
  },
  home: {
    id: 23,
    lat: 37.7577,
    lng: -122.4376,
    style: Style.Apartment,
  },
}

export const Highlighted = Template.bind({})
Highlighted.args = {
  highlighted: true,
  home: {
    id: 23,
    lat: 37.7577,
    lng: -122.4376,
    style: Style.Apartment,
  },
}
