import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'

import {} from '@urql/storybook-addon'
import { MapProvider } from 'src/store/map/mapContext'
import Mapbox from './Mapbox'
import {
  FetchingBool,
  ErrorBool,
  Panel,
  PanelContainer,
  MapPanelTypes,
  StateMarkers,
} from '../MapboxContent/MapboxContent'
import ZoomControls from '../ZoomControls'

export default {
  title: 'organisms/Mapbox',
  component: Mapbox,
  decorators: [SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof Mapbox>

const Template: ComponentStory<typeof Mapbox> = (args) => (
  <MapProvider className='h-screen'>
    <Mapbox {...args} />
  </MapProvider>
)

export const EmptyMap = Template.bind({})

export const Fetching = Template.bind({})
Fetching.args = {
  children: (
    <Panel position='center-bottom'>
      <FetchingBool fetching />
    </Panel>
  ),
}

export const Error = Template.bind({})
Error.args = {
  children: (
    <Panel position='center-bottom'>
      <ErrorBool error='Custom error message.' />
    </Panel>
  ),
}

const positionArray = [
  'left-top',
  'left-center',
  'left-bottom',
  'center-bottom',
  'right-bottom',
  'right-center',
  'right-top',
  'center-top',
  'center-center',
] as MapPanelTypes['position'][]

export const Panels = Template.bind({})
Panels.args = {
  children: (
    <PanelContainer>
      {positionArray.map((position) => (
        <Panel
          key={position}
          position={position}
          className='max-w-xs text-xl italic font-semibold bg-yellow-500/20 outline-yellow-200 outline-dashed'
        >
          <div>Panel {position}</div>
        </Panel>
      ))}
    </PanelContainer>
  ),
}
export const MarkersState = Template.bind({})
MarkersState.args = {
  children: <StateMarkers />,
}
export const MarkersStateWithZoom = Template.bind({})
MarkersStateWithZoom.args = {
  children: (
    <>
      <StateMarkers />
      <PanelContainer>
        <Panel position='left-top'>
          <ZoomControls>
            <ZoomControls.ZoomIn />
            <ZoomControls.ZoomOut />
          </ZoomControls>
        </Panel>
      </PanelContainer>
    </>
  ),
}
