import React from 'react'
import { searchHomesByLocationMockData } from 'src/mocks/data/homes'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SbReduxProvider } from 'src/lib/sb'
import {
  mockSearchHomesByLocation,
  mockSearchHomesByLocationErrors,
} from 'src/mocks/handlers'
import {} from '@urql/storybook-addon'
import { namedOperations } from 'src/generated/graphql'
import { matchQuery } from 'src/lib/util'
import Mapbox from './Mapbox'

export default {
  title: 'organisms/Mapbox',
  component: Mapbox,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof Mapbox>

const Template: ComponentStory<typeof Mapbox> = () => <Mapbox />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {
  urql: (op: any) => {
    if (matchQuery(op, namedOperations.Query.SearchHomesByLocation))
      return {
        data: searchHomesByLocationMockData,
      }
  },
}
export const Fetching = Template.bind({})
Fetching.args = {}
Fetching.parameters = {
  urql: (op: any) => {
    if (matchQuery(op, namedOperations.Query.SearchHomesByLocation))
      return new Promise(() => {})
  },
}
export const Error = Template.bind({})
Error.args = {}
Error.parameters = {
  urql: (op: any) => {
    if (matchQuery(op, namedOperations.Query.SearchHomesByLocation))
      return { errors: ['Something went wrong.'] }
  },
}
