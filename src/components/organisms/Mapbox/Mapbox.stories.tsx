import React from 'react'
import { mswWorker } from 'src/mocks/mswWorker'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SbReduxProvider } from 'src/lib/sb'
import {
  mockSearchHomesByLocation,
  mockSearchHomesByLocationErrors,
  mockSearchHomesByLocationFetching,
} from 'src/mocks/handlers'

import {} from '@urql/storybook-addon'
import { MapProvider } from 'src/store/map/mapContext'
import Mapbox from './Mapbox'

export default {
  title: 'organisms/Mapbox',
  component: Mapbox,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof Mapbox>

const Template: ComponentStory<typeof Mapbox> = () => (
  <MapProvider>
    <Mapbox>
      <div>Hello</div>
    </Mapbox>
  </MapProvider>
)

export const Primary = Template.bind({})
Primary.decorators = [
  (Story) => {
    mswWorker.use(mockSearchHomesByLocation)
    return <Story />
  },
]

export const Fetching = Template.bind({})
Fetching.decorators = [
  (Story) => {
    mswWorker.use(mockSearchHomesByLocationFetching)
    return <Story />
  },
]
export const Error = Template.bind({})
Error.decorators = [
  (Story) => {
    mswWorker.use(mockSearchHomesByLocationErrors)
    return <Story />
  },
]
