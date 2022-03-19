import React from 'react'
import { mswWorker } from 'src/mocks/mswWorker'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SbUrqlProvider } from 'src/lib/sb'
import {
  mockSearchHomesByLocation,
  mockSearchHomesByLocationErrors,
  mockSearchHomesByLocationFetching,
} from 'src/mocks/handlers'

import {} from '@urql/storybook-addon'
import { MapProvider } from 'src/store/map/mapContext'
import Mapbox from './Mapbox'
import {
  FetchingBool,
  MapMessage,
  ErrorBool,
  Panel,
} from '../MapboxContent/MapboxContent'

export default {
  title: 'organisms/Mapbox',
  component: Mapbox,
  decorators: [SbUrqlProvider],
} as ComponentMeta<typeof Mapbox>

const Template: ComponentStory<typeof Mapbox> = (args) => (
  <MapProvider className='h-screen'>
    <Mapbox {...args} />
  </MapProvider>
)

export const EmptyMap = Template.bind({})
EmptyMap.decorators = [
  (Story) => {
    mswWorker.use(mockSearchHomesByLocation)
    return <Story />
  },
]

export const Fetching = Template.bind({})
Fetching.args = {
  children: (
    <Panel position='center-bottom'>
      <FetchingBool fetching />
    </Panel>
  ),
}
Fetching.decorators = [
  (Story) => {
    mswWorker.use(mockSearchHomesByLocationFetching)
    return <Story />
  },
]
export const Error = Template.bind({})
Error.args = {
  children: (
    <Panel position='center-bottom'>
      <ErrorBool error='Custom error message.' />
    </Panel>
  ),
}
Error.decorators = [
  (Story) => {
    mswWorker.use(mockSearchHomesByLocationErrors)
    return <Story />
  },
]
