import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import userReducer, {
  initialState as userInitialState,
} from 'src/store/user/userSlice'
import produce from 'immer'
import { composedEnhancers } from 'src/store'
import { Provider } from 'react-redux'
import { AppLevelHooksWithoutAuth } from 'pages/_app'
import { SbReduxProvider, SbUrqlProvider } from 'src/lib/sb'
import { mswWorker } from 'src/mocks/mswWorker'
import {
  mockGetHomeByIdQuery,
  mockGetHomeByIdQueryFetching,
  mockGetHomeByIdQueryError,
} from 'src/mocks/handlers'
import PopupHomesContent from './PopupHomesContent'

export default {
  title: 'organisms/PopupHomesContent',
  component: PopupHomesContent,
  decorators: [SbUrqlProvider, SbReduxProvider],
} as ComponentMeta<typeof PopupHomesContent>

const Template: ComponentStory<typeof PopupHomesContent> = (args) => (
  <PopupHomesContent {...args} />
)

const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  {
    user: produce(userInitialState, (draft) => {
      // ! - Non-null assertion operator
      draft.data.user = {
        uid: '123456',
        displayName: 'Rajini Kant',
        email: 'kar@gmail.com',
      }
    }),
  },
  composedEnhancers
)

export const Primary = Template.bind({})
Primary.args = {
  id: 1,
}
Primary.decorators = [
  (Story) => {
    mswWorker.use(mockGetHomeByIdQuery)
    return Story()
  },
]

export const Fetching = Template.bind({})
Fetching.args = {
  id: 4,
}
Fetching.decorators = [
  (Story) => {
    mswWorker.use(mockGetHomeByIdQueryFetching)
    return Story()
  },
]
export const Error = Template.bind({})
Error.args = {
  id: 9,
}
Error.decorators = [
  (Story) => {
    mswWorker.use(mockGetHomeByIdQueryError)
    return Story()
  },
]
