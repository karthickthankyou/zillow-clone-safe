import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'
import {
  mockGetRegionByIdQuery,
  mockGetRegionByIdQueryError,
  mockGetRegionByIdQueryFetching,
} from 'src/mocks/handlers'
import { mswWorker } from 'src/mocks/mswWorker'

import PopupRegionContent from './PopupRegionContent'

export default {
  title: 'organisms/PopupRegionContent',
  component: PopupRegionContent,
  decorators: [SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof PopupRegionContent>

const Template: ComponentStory<typeof PopupRegionContent> = (args) => (
  <PopupRegionContent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  id: 'LA',
}
Primary.decorators = [
  (Story) => {
    mswWorker.use(mockGetRegionByIdQuery)
    return <Story />
  },
]

export const Fetching = Template.bind({})
Fetching.args = {
  id: 'NW',
}
Fetching.decorators = [
  (Story) => {
    mswWorker.use(mockGetRegionByIdQueryFetching)
    return <Story />
  },
]
export const Error = Template.bind({})
Error.args = {
  id: 'NJ',
}
Error.decorators = [
  (Story) => {
    mswWorker.use(mockGetRegionByIdQueryError)
    return <Story />
  },
]
