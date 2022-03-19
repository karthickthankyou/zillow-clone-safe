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
import NotesFixed from 'src/components/molecules/NotesFixed'

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
    return (
      <div>
        <Story />
        <NotesFixed>The data comes from msw.</NotesFixed>
      </div>
    )
  },
]

export const Fetching = Template.bind({})
Fetching.args = {
  id: 'Something else',
}
Fetching.decorators = [
  (Story) => {
    mswWorker.use(mockGetRegionByIdQueryFetching)
    return (
      <div>
        <Story />
        <NotesFixed>
          <div>
            We mimic this eternal fetching state by setting a delay of
            <em>1000 * 60 * 60 * 60</em>
          </div>
          <div>Kindly do not wait for this loading to end.</div>
        </NotesFixed>
      </div>
    )
  },
]
export const Error = Template.bind({})
Error.args = {
  id: 'Something else',
}
Error.decorators = [
  (Story) => {
    mswWorker.use(mockGetRegionByIdQueryError)
    return (
      <div>
        <Story />
        <NotesFixed>
          Humm... Should we have a component wise error management?
        </NotesFixed>
      </div>
    )
  },
]
