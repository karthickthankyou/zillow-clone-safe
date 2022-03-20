import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MapProvider } from 'src/store/map/mapContext'
import { SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'
import Mapbox from 'src/components/organisms/Mapbox'
import MapMarker from './MapMarker'
import NotesFixed from '../NotesFixed'

export default {
  title: 'molecules/MapMarker',
  component: MapMarker,
  decorators: [SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof MapMarker>

const Template: ComponentStory<typeof MapMarker> = (args) => (
  <MapProvider className='h-screen'>
    <Mapbox>
      <MapMarker {...args} />
    </Mapbox>
  </MapProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  home: {
    id: 23,
    lat: 37.7577,
    lng: -122.4376,
    style: 'Single Family',
  },
}
Primary.decorators = [
  (story) => (
    <>
      {story()}
      <NotesFixed>This component is wrapped within a map provider.</NotesFixed>
    </>
  ),
]
export const Coop = Template.bind({})
Coop.args = {
  home: {
    id: 23,
    lat: 37.7577,
    lng: -122.4376,
    style: 'Apartment',
  },
}
Coop.decorators = [
  (story) => (
    <>
      {story()}
      <NotesFixed>
        Currenty this map marker supports two types of icons.
      </NotesFixed>
    </>
  ),
]
export const Wishlisted = Template.bind({})
Wishlisted.args = {
  wishlisted: {
    hId: 12,
    id: 23,
  },
  home: {
    id: 23,
    lat: 37.7577,
    lng: -122.4376,
    style: 'Apartment',
  },
}
Wishlisted.decorators = [
  (story) => (
    <>
      {story()}
      <NotesFixed>
        Wishlisted homes are red as a heart and is scaled 1.5 times.
      </NotesFixed>
    </>
  ),
]
export const Highlighted = Template.bind({})
Highlighted.args = {
  highlighted: true,
  home: {
    id: 23,
    lat: 37.7577,
    lng: -122.4376,
    style: 'Apartment',
  },
}
Highlighted.decorators = [
  (story) => (
    <>
      {story()}
      <NotesFixed>
        As the house is hovered over, The marker icon will scale up while
        turning blue with a border and a white background.
      </NotesFixed>
    </>
  ),
]
